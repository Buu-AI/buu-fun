"use client";
import React, { useState } from "react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  ComposedChart,
  Tooltip,
  CartesianGrid,
  TooltipProps,
} from "recharts";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { generateMockData } from "@/lib/mock/generate-chart-mock-data";

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
  const [timeRange, setTimeRange] = useState<number>(1); // Default to 1 hour
  const [data, setData] = useState<DataPoint[]>(generateMockData(timeRange));
  const [maxVolume] = useState(Math.max(...data.map((item) => item.volume)));
  
  const updateTimeRange = (hours: number): void => {
    setTimeRange(hours);
    setData(generateMockData(hours));
  };

  const CustomTooltip: React.FC<CustomTooltipProps> = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-gray-800 p-2 rounded border border-gray-700 text-gray-200 text-xs">
          <p>{`Time: ${payload[0].payload.time}`}</p>
          <p>{`Price: ${payload[0].value}`}</p>
          <p>{`Volume: ${payload[1]?.value}`}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="w-full ">
      <div className="">
        <div className="h-80 ">
          <ResponsiveContainer width="100%" height="100%">
            <ComposedChart
              data={data}
              margin={{ top: 20, right: 0, left: 15, bottom: 20 }}
            >
              <XAxis
                dataKey="time"
                tick={{ fill: "#999" }}
                className="text-sm  "
                axisLine={{ stroke: "rgba(255, 255, 255, 0.1)" }}
                tickLine={true}
                interval={"equidistantPreserveStart"} // Show every 5th tick for cleaner timeline
              />
              <YAxis
                yAxisId="price"
                domain={["auto", "auto"]}
                tick={{ fill: "#999" }}
                className="px-2 text-sm w-full "
                axisLine={false}
                interval={"equidistantPreserveStart"}
                tickLine={false}
                orientation="left"
              />
              <YAxis
                yAxisId="volume"
                // domain={[0, "dataMax + 600"]}
                domain={[0, "dataMax + 1000"]}
                hide={true}
                className="max-h-[30px]"
                // Set a fixed height for the volume bars
                // This effectively caps the maximum height
                height={100}
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
              <Bar
                yAxisId="volume"
                dataKey="volume"
                fill="#275665"
                opacity={0.8}
                barSize={8} // Thicker bars as requested
                // The maxBarSize ensures the bars don't exceed the height we want
                maxBarSize={150}
              />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
