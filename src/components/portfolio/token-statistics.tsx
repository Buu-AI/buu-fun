import TokenStatisticsButtons from "./token-statistics-button";
import TokenStatisticsChart from "./token-statistics-chart";

export default function TokenStatistics() {
  return (
    <div className="bg-portfolio-statistics mt-5 rounded-lg px-2 md:px-6 py-6">
      <div className="flex items-center flex-col md:flex-row justify-between">
        <h3 className="font-medium text-xl text-white">Token statistics</h3>
        <TokenStatisticsButtons />
      </div>
      <div className="w-full pt-6">
        <TokenStatisticsChart />
      </div>
    </div>
  );
}
