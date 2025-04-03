"use client";
import React from "react";
import { RadialBar, RadialBarChart, ResponsiveContainer } from "recharts";

export default function BuuStakedSupply() {
  // Calculate percentages based on the actual values
  const totalSupply = 101.51;
  const circulatingSupply = 27.97;
  const totalStaked = 12.44;
  const stakedByUsers = 4.92; // Based on 919.94K value shown in the image

  // Convert to percentages relative to total supply
  const circulatingPercentage = (circulatingSupply / totalSupply) * 100;
  const stakedPercentage = (totalStaked / totalSupply) * 100;
  const userStakedPercentage = (stakedByUsers / totalSupply) * 100;

  // Format numbers for display
  const formatNumber = (num: number) => {
    if (num >= 1) {
      return `${num.toFixed(2)}M`;
    } else {
      return `${(num * 1000).toFixed(2)}K`;
    }
  };

  // Staking percentage to display in the center
  const stakingRatio = Math.round((totalStaked / circulatingSupply) * 100);

  // Data for the chart layers
  const data = [
    {
      name: "Total Supply",
      value: 100,
      fill: "#6bd0f5",
      filter: "drop-shadow(0px 0px 20.3px rgba(120, 219, 255, 0.25))",
    },
    {
      name: "Circulating Supply",
      value: circulatingPercentage,
      fill: "url(#circulating-gradient)",
      //   filter: "drop-shadow(0px 0px 20.3px rgba(78, 135, 233, 0.25))",
    },
    {
      name: "Total Staked",
      value: stakedPercentage,
      fill: "url(#staked-gradient)",
      //   filter: "drop-shadow(0px 0px 20.3px rgba(255, 146, 203, 0.25))",
    },
    {
      name: "Staked by BUU Users",
      value: userStakedPercentage,
      fill: "url(#users-gradient)",
      //   filter: "drop-shadow(0px 0px 20.3px rgba(206, 158, 255, 0.25))",
    },
  ];

  return (
    <div className="flex flex-col w-full h-full bg-buu  rounded-3xl overflow-hidden">
      <div className="px-4 py-3 border-b border-white/5 bg-overview-portfolio ">
        <p className="uppercase text-xs text-white font-semibold">
          BUU Staked Supply
        </p>
      </div>

      <div className="flex-1  flex flex-col items-center justify-center p-6 relative">
        <div className="w-full max-w-sm aspect-square overflow-hidden  relative">
          <ResponsiveContainer width="100%" height="100%">
            <RadialBarChart
              cx="50%"
              cy="50%"
              innerRadius="40%"
              outerRadius="80%"
              barSize={12}
              data={data.reverse()}
              startAngle={90}
              endAngle={-270}
            >
              <defs>
                <linearGradient
                  id="circulating-gradient"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >
                  <stop offset="0%" stopColor="#2C4C83" />
                  <stop offset="100%" stopColor="#4E87E9" />
                </linearGradient>
                <linearGradient
                  id="staked-gradient"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >
                  <stop offset="0%" stopColor="#bf85a3" />
                  <stop offset="100%" stopColor="#FF92CB" />
                </linearGradient>
                <linearGradient id="users-gradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#8f6fb2" />
                  <stop offset="100%" stopColor="#CE9EFF" />
                </linearGradient>
              </defs>

              <RadialBar
                background={{ fill: "#1E232B" }}
                dataKey="value"
                cornerRadius={30}
                label={false}
              />
            </RadialBarChart>
          </ResponsiveContainer>

          {/* Center percentage text */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <p className="text-2xl tracking-tighter text-white">
                {stakingRatio}%
              </p>
            </div>
          </div>
        </div>

        {/* Stats below the chart */}
        <div className="grid grid-cols-2 gap-y-7">
          <div className="flex items-center justify-center flex-col">
            <p className="text-sm font-medium text-muted-foreground/60">
              Staked by BUU Users
            </p>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-[#CE9EFF] rounded-full" />
              <p className="text-xl font-medium tracking-tighter">
                {formatNumber(stakedByUsers)}
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center flex-col">
            <p className="text-sm font-medium text-muted-foreground/60">
              Total Staked{" "}
            </p>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-[#FF92CB] rounded-full" />
              <p className="text-xl font-medium tracking-tighter">
                {formatNumber(totalStaked)}
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center flex-col">
            <p className="text-sm font-medium text-muted-foreground/60">
              Circulating Supply{" "}
            </p>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-[#4E87E9] rounded-full" />
              <p className="text-xl font-medium tracking-tighter">
                {formatNumber(circulatingSupply)}
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center flex-col">
            <p className="text-sm font-medium text-muted-foreground/60">
              Total Supply{" "}
            </p>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-[#4E87E9] rounded-full" />
              <p className="text-xl font-medium tracking-tighter">
                {formatNumber(totalSupply)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
