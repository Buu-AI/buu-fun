"use client";
import { usePricing } from "@/hooks/use-pricing";
import { formatUnits, parseJson } from "@/lib/utils";
import { BitRefillEvents } from "@/types/bit-refill";
import { useEffect } from "react";
import { bitRefillFunctions } from "./bit-refill-function";
import toast from "react-hot-toast";
import { MIN_AMOUNT_TO_PURCHASE_USD } from "@/constants/bitrefill";
import { useAuthentication } from "@/providers/account.context";
import { useSolanaWallets } from "@privy-io/react-auth";
import { useGlobalStakingData } from "@/hooks/use-global-staking";
function MyBitrefillWidget({
  url = "https://embed.bitrefill.com?ref=DniWoOsh",
}) {
  const { data: TokensPrice } = usePricing();
  const { data: globalStakingData } = useGlobalStakingData();
  const buuDecimals = globalStakingData?.tokenMint.decimals ?? 8;

  const { address, wallet, login, connectSolanaWallet } = useAuthentication();
  const config: any = {
    utm_source: "Buu AI",
    showPaymentInfo: true,
    theme: "dark",
    paymentMethods: ["solana"].join(","),
  };
  useEffect(() => {
    window.onmessage = async function (e) {
      if (e.origin !== "https://embed.bitrefill.com") {
        return;
      }
      console.log(e.data)
      const { data } = parseJson<BitRefillEvents>(e.data);
      const event = data?.event;

      async function eventCreate(params: BitRefillEvents) {
        if (!wallet || !wallet.walletData) {
          toast.error("Please connect wallet before transaction");
          connectSolanaWallet();
          return;
        }
        const invoicePrice = parseFloat(
          formatUnits(params.paymentAmount.toString(), 9)
        );

        const buuPrice = TokensPrice?.buu ?? 0;
        const solPricing = TokensPrice?.sol ?? 0;
        const paymentAddress = data?.paymentAddress ?? "";
        await bitRefillFunctions?.invoiceCreated({
          buuPrice,
          invoicePrice,
          invoicePriceLamports: params.paymentAmount,
          solPricing,
          userAddress: address ?? "",
          wallet,
          paymentAddress,
          buuDecimals,
        });
      }

      switch (event) {
        case "invoice_created": {
          if (!data) {
            return;
          }
          await eventCreate(data);
          break;
        }
        case "payment_intent": {
          if (!data) {
            return;
          }
          await eventCreate(data);
          break;
        }
      }
    };
  });

  return (
    <iframe
      title="Bitrefill"
      src={`${url}?${new URLSearchParams(config)}`}
      className="w-full h-full"
      style={{ border: "none" }}
      sandbox="allow-same-origin allow-popups allow-scripts allow-forms"
    />
  );
}

export default MyBitrefillWidget;
