import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useAllReferrals } from "@/hooks/use-referral";
import { formatUnits, truncateString } from "@/lib/utils";
import { format } from "date-fns";
import Pill from "../elements/pill";
import Bounded from "../ui/Bounded";

export default function ReferralShowcaseTable() {
  const { data } = useAllReferrals();
  return (
    <Bounded className="max-w-screen-md">
      <div
        style={{
          borderRadius: "10px",
          overflow: "hidden",
        }}
        className="w-full overflow-x-auto mt-8 border border-[#1c202788]"
      >
        <div className="max-h-[300px] overflow-y-auto">
          {data && data.items && data.items.length ? (
            <div className="h-[300px] relative w-full overflow-auto  scrollbar-w-hidden scrollbar-thumb-orange scrollbar-thumb-rounded">
              <Table className="w-full">
                <TableHeader className="h-auto bg-buu-table shadow-buu sticky top-0 z-10">
                  <TableRow className="hover:bg-muted/0 h-auto !border-b-0 bg-clip-border !border-0 rounded-t-xl">
                    <TableHead className="text-xs h-auto py-4 text-white/60 font-semibold uppercase w-1/4">
                      WALLET ADDRESS
                    </TableHead>
                    <TableHead className="text-xs text-white/60 font-semibold uppercase w-1/4">
                      REGISTRATION DATE
                    </TableHead>
                    <TableHead className="text-xs text-white/60 font-semibold uppercase w-1/4">
                      your earnings
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {data &&
                    data?.items?.map((item, index) => {
                      return (
                        <TableRow
                          key={`${item._id}`}
                          className="h-auto border-[#1c202788]"
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
                            ${" "}
                            {formatUnits(item.tokens ?? "", item.decimals ?? 0)}{" "}
                            BUU
                          </TableCell>
                        </TableRow>
                      );
                    })}
                </TableBody>
              </Table>{" "}
            </div>
          ) : null}
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
