"use client";
import { formatNumber } from "@/lib/utils";
import { useEffect, useState } from "react";
import { RadialBar, RadialBarChart, ResponsiveContainer } from "recharts";

export default function BuuNetworkUtilization() {
  // const { data: PricingData } = useBuuPricingData();

  // Updated more accurate values to match the UI screenshot
  const consumed = 3000;
  const available = 178000;
  const total = consumed + available;

  // Calculate actual percentage
  const utilizationPercentage = (consumed / total) * 100;
  const displayPercentage = utilizationPercentage.toFixed(1);

  // Countdown timer state
  const [countdown, setCountdown] = useState("00:23:21");

  useEffect(() => {
    // Update countdown every second
    const timer = setInterval(() => {
      // Simple countdown logic - this would be replaced with actual epoch timing logic
      const [hours, minutes, seconds] = countdown.split(":").map(Number);
      let newSeconds = seconds - 1;
      let newMinutes = minutes;
      let newHours = hours;

      if (newSeconds < 0) {
        newSeconds = 59;
        newMinutes -= 1;
      }
      if (newMinutes < 0) {
        newMinutes = 59;
        newHours -= 1;
      }
      if (newHours < 0) {
        newHours = 0;
        newMinutes = 0;
        newSeconds = 0;
      }

      setCountdown(
        `${String(newHours).padStart(2, "0")}:${String(newMinutes).padStart(2, "0")}:${String(newSeconds).padStart(2, "0")}`
      );
    }, 1000);

    return () => clearInterval(timer);
  }, [countdown]);

  // Data for the chart
  const data = [
    {
      name: "Utilization",
      value: 2.2, // Ensure it's within 0-100

      fill: "#6bd0f5",
      filter: "drop-shadow(0px 0px 20.3px rgba(120, 219, 255, 0.25))",
    },
  ];

  return (
    <div className="flex flex-col w-full h-full bg-buu rounded-3xl overflow-hidden">
      <div className="px-4 py-3 border-b border-white/5 bg-overview-portfolio">
        <p className="uppercase text-xs text-white font-semibold">
          Daily Network Utilization
        </p>
      </div>

      <div className="flex-1 flex flex-col items-center p-6 relative">
        <div className="w-full max-w-sm aspect-square overflow-hidden relative">
          <ResponsiveContainer width="100%" height="100%">
            <RadialBarChart
              cx="50%"
              cy="50%"
              innerRadius="70%"
              outerRadius="100%"
              barSize={12}
              data={data}
            >
              <RadialBar
                background={{ fill: "#1E232B" }}
                dataKey="value"
                cornerRadius={30}
                startAngle={260}
                label={false}
              />
            </RadialBarChart>
          </ResponsiveContainer>

          {/* Center percentage text */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <p className="text-2xl tracking-tighter text-white">
                {displayPercentage}%
              </p>
            </div>
          </div>
          {/* Blue dot indicator at bottom of circle */}
        </div>

        {/* Stats below the chart */}
        <div className="grid grid-cols-2 w-full gap-y-7">
          <div className="flex items-center justify-center flex-col">
            <p className="text-sm font-medium text-muted-foreground/60">
              Consumed
            </p>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-[#CE9EFF] rounded-full" />
              <p className="text-xl font-medium tracking-tighter">
                {formatNumber(consumed)}
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center flex-col">
            <p className="text-sm font-medium text-muted-foreground/60">
              Available
            </p>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-[#FF92CB] rounded-full" />
              <p className="text-xl font-medium tracking-tighter">
                {formatNumber(available)}
              </p>
            </div>
          </div>
        </div>

        {/* Countdown timer */}
        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground/60">
            Next epoch begins in:{" "}
            <span className="text-white">{countdown}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
