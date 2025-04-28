import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useAllReferrals } from "@/hooks/use-referral";
import {
  cn,
  formatNumber,
  formatUnits,
  getSolanaExplorerUrl,
  truncateString,
} from "@/lib/utils";
import { format } from "date-fns";
import { Ghost } from "lucide-react";
import toast from "react-hot-toast";
import Pill from "../elements/pill";
import Bounded from "../ui/Bounded";

export default function ReferralShowcaseTable() {
  const { data } = useAllReferrals();
  function handleUrlClick(txHash: string) {
    try {
      const url = getSolanaExplorerUrl(`/tx/${txHash}`);
      window.open(url, "_blank");
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      if (error) {
      }
      toast.error("Invalid transaction");
    }
  }
  return (
    <Bounded className="max-w-screen-md">
      <div
        style={{
          overflow: "hidden",
        }}
        className={cn(
          "w-full bg-api-key-table-radius overflow-x-auto mt-6 border  border-muted-foreground/10",
        )}
      >
        <div className="">
          <div className="max-h-[40vh] relative w-full overflow-scroll scrollbar-w-hidden scrollbar-thumb-orange scrollbar-thumb-rounded">
            <Table className="w-full">
              <TableHeader className="h-auto bg-api-key-table-header  sticky top-0 left-2 z-10">
                <TableRow className="hover:bg-muted/0 h-auto !border-b-0 bg-clip-border !border-0 rounded-t-xl">
                  <TableHead className="text-xs  h-auto py-4 text-white/60 font-semibold uppercase w-1/4">
                    <span className="ml-2.5">Referee</span>
                  </TableHead>
                  <TableHead className="text-xs text-white/60 font-semibold uppercase w-1/4">
                    Reward Date
                  </TableHead>
                  <TableHead className="text-xs text-white/60 font-semibold uppercase w-1/4">
                    Amount
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {data &&
                  data?.items?.map((item, index) => {
                    return (
                      <TableRow
                        onClick={() => {
                          if (item.transactionHash) {
                            handleUrlClick(item.transactionHash);
                          }
                        }}
                        key={`${item._id}`}
                        className="h-auto cursor-pointer  border-[#1c202788]"
                      >
                        <TableCell className="h-auto py-4">
                          <div className="flex items-center gap-1 pl-2">
                            <Pill className="text-[10px] truncate text-white/40 font-medium py-0 px-2">
                              {index.toLocaleString()}
                            </Pill>
                            {truncateString(item.referral, 6, 4)}
                          </div>
                        </TableCell>
                        <TableCell className="text-muted-foreground/40 font-medium">
                          {format(
                            new Date(item.createdAt),
                            "MMMM dd, yyyy hh:mm:a",
                          )}
                        </TableCell>
                        {/* <TableCell className="text- font-medium">
                            $ {formatNumber(parseInt(item.tokens ?? "0"))} USD
                          </TableCell> */}
                        <TableCell className="text- font-medium">
                          {formatNumber(
                            Number(
                              formatUnits(
                                item.tokens ?? "",
                                item.decimals ?? 0,
                              ),
                            ),
                          )}{" "}
                          BUU
                        </TableCell>
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>{" "}
            <div
              className={cn(" hidden items-center justify-center w-full ", {
                flex: !data || !data.items.length,
              })}
            >
              <div className="flex flex-col items-center gap-2 py-4">
                <div className="w-8 h-8">
                  <Ghost className="w-full h-full" />
                </div>
                <h4 className="text-xl font-medium">No referral&apos;s Yet</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Bounded>
  );
}

export const referralData = [
  {
    id: "01",
    walletAddress: "0xf99760xf9...14a8",
    registrationDate: "March 10, 2025 12:48 PM",
    stakedAmount: "138.012456",
    earnings: "38.012456",
  },
  {
    id: "02",
    walletAddress: "0xf99760xf9...14a8",
    registrationDate: "March 10, 2025 12:48 PM",
    stakedAmount: "138.012456",
    earnings: "38.012456",
  },
  {
    id: "03",
    walletAddress: "0xf99760xf9...14a8",
    registrationDate: "March 10, 2025 12:48 PM",
    stakedAmount: "138.012456",
    earnings: "38.012456",
  },
];
