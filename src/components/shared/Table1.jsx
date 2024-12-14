"use client";

import { TrendingUp } from "lucide-react";
import { CartesianGrid, Line, LineChart, XAxis } from "recharts";
import { BsCurrencyDollar } from "react-icons/bs";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  { month: "", desktop: 70 },
  { month: "", desktop: 150 },
  { month: "", desktop: 120 },
  { month: "", desktop: 140 },
  { month: "", desktop: 120 },
  { month: "", desktop: 140 },
  { month: "", desktop: 120 },
  { month: "", desktop: 130 },
  { month: "", desktop: 120 },
  { month: "", desktop: 125 },
  { month: "", desktop: 130 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "#0D99FF",
  },
};

export function Table1() {
  return (
    <div className="">
      <div className="text-white px-5 flex gap-8 items-center">
        <div>
          <div className="text-[15px]">Total Deposit</div>
          <div className="font-bold">$1200.00</div>
        </div>
        <div className="py-2 px-3 h-8 text-[#0D99FF] rounded-md bg-[#0D99FF1A]">
          <BsCurrencyDollar />
        </div>
      </div>
      <ChartContainer config={chartConfig}>
        <LineChart
          data={chartData}
          margin={{
            left: 2,
            right: 2,
          }}
        >
          <defs>
            <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
              <feDropShadow
                dx="0"
                dy="10"
                stdDeviation="6"
                floodColor="#0D99FF"
              />
            </filter>
          </defs>
          <XAxis
            dataKey="month"
            tickLine={false}
            axisLine={false}
            tickMargin={8}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <Line
            dataKey="desktop"
            type="linear"
            stroke="var(--color-desktop)"
            strokeWidth={2}
            dot={false}
            filter="url(#shadow)"
          />
        </LineChart>
      </ChartContainer>
    </div>
  );
}
