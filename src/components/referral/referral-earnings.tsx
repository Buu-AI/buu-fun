import { useAllReferrals } from "@/hooks/use-referral";
import { formatNumber, formatUnits } from "@/lib/utils";

export default function ReferralEarnings() {
  const { data } = useAllReferrals();
  const uniqueReferrals = data?.items
    ? [...new Set(data?.items.map((item) => item.referral))].length
    : 0;

  const totalRewards = data
    ? data?.items.reduce((acc, item) => {
        const value = parseInt(
          formatUnits(item.tokens ?? "0", item.decimals ?? 0),
        );
        return acc + value;
      }, 0)
    : 0;
  return (
    <div className="flex items-center justify-center  max-w-sm w-full  mt-5    gap-5">
      <div className="flex items-center justify-start w-full   flex-col">
        <h3 className=" font-medium text-buu-muted-text">Total Earnings</h3>
        <div className="text-2xl font-medium">
          <p>{formatNumber(totalRewards)} $BUU</p>
        </div>
      </div>
      <div className="w-[2.5px] min-h-[50px] h-full  bg-gray-700/60" />
      <div className="flex items-center justify-start w-full flex-col">
        <h3 className=" font-medium text-buu-muted-text">Referees</h3>
        <div className="text-2xl font-medium">
          <p>{uniqueReferrals}</p>
        </div>
      </div>
    </div>
  );
}
