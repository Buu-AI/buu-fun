"use client";
// @ts-nocheck
function MyBitrefillWidget({ url = "https://embed.bitrefill.com/" }) {
  const config: any = {
    utm_source: "Buu AI",
    showPaymentInfo: true,
    theme: "dark",
    paymentMethods: ["solana"].join(","),
  };

  const handleMessage = (e: any) => {
    if (e.origin !== "https://embed.bitrefill.com") {
      return;
    }

    const { event } = e;
    console.log("Message received");
    console.log("EVENT", event);
    switch (event) {
      case "invoice_created":
        // TODO: handle the Jupiter Ultra API transaction process
        /**
            {
              "event": "invoice_created",
              "invoiceId": "3ea4fc3f-a8f4-4e1d-a496-7cf29fae5d16",
              "paymentUri": "solana:47SP9KAmwgt5xMcG9DCBw4pkcu7dmiDsdc4aMp2BYNab?amount=0.152231&label=Bitrefill+-+3ea4fc3f-a8f4-4e1d-a496-7cf29fae5d16",
              "paymentMethod": "solana",
              "paymentAmount": 152230747,
              "paymentCurrency": "SOL",
              "paymentAddress": "47SP9KAmwgt5xMcG9DCBw4pkcu7dmiDsdc4aMp2BYNab"
            }
          */
        break;
      default:
        break;
    }
  };

  return (
    <iframe
      title="Bitrefill"
      src={`${url}?${new URLSearchParams(config)}`}
      className="w-full h-full"
      style={{ border: "none" }}
      sandbox="allow-same-origin allow-popups allow-scripts allow-forms"
      onMessage={handleMessage}
    />
  );
}

export default MyBitrefillWidget;
