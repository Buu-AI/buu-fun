"use client";
import { usePricingHistoricalPricing } from "@/hooks/use-pricing-history";
import { formatUnixTimestamp } from "@/lib/utils";
import React from "react";
import {
  CartesianGrid,
  ComposedChart,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

// Define types for our data
interface DataPoint {
  time: string;
  price: number;
  volume: number;
}

// Type for tooltip props
interface CustomTooltipProps {
  active?: boolean;
  payload?: Array<{
    value: number;
    payload: DataPoint;
  }>;
}

export default function TokenPriceChart() {
  const { data } = usePricingHistoricalPricing();

  const timingData =
    data &&
    data.items?.map((item) => ({
      time: formatUnixTimestamp(item.unixTime),
      price: item.value,
    }));

  const CustomTooltip: React.FC<CustomTooltipProps> = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-gray-800 p-2 rounded border border-gray-700 text-gray-200 text-xs">
          <p>{`Time: ${payload[0].payload.time}`}</p>
          <p>{`Price: ${payload[0].value}`}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="w-full ">
      <div className="">
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <ComposedChart
              data={timingData}
              margin={{ top: 20, right: 0, left: 15, bottom: 20 }}
            >
              <XAxis
                dataKey="time"
                tick={{ fill: "#999" }}
                className="text-sm"
                axisLine={{ stroke: "rgba(255, 255, 255, 0.1)" }}
                tickLine={true}
                padding={{ left: 10, right: 10 }} // Add padding to X-axis
                dy={10} // Move X-axis labels down a bit
                interval={"preserveStartEnd"}
              />

              <YAxis
                yAxisId="price"
                domain={["auto", "auto"]}
                // alignmentBaseline="text-after-edge"
                tick={{ fill: "#999" }}
                className="px-2 text-sm  w-full "
                axisLine={false}
                interval={"preserveStart"}
                tickLine={false}
                orientation="left"
                dx={-5} // Move Y-axis labels to the left a bit
                padding={{ top: 0, bottom: 0 }} // Add padding to Y-axis
                tickFormatter={(value) => value.toFixed(6)} // Format Y-axis ticks
              />

              <Tooltip content={<CustomTooltip />} />
              <CartesianGrid
                vertical={false}
                stroke="rgba(255, 255, 255, 0.05)"
              />
              <Line
                yAxisId="price"
                type="monotone"
                dataKey="price"
                stroke="#5BBFCE"
                strokeWidth={2}
                dot={false}
                activeDot={{ r: 6, fill: "#5BBFCE" }}
              />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
