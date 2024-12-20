"use client"

import * as React from "react"
import { PieChart, Pie, Label, Cell } from "recharts"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const chartData = [
  { name: "Completed", value: 155, color: "#3B82F6" }, // Blue
  { name: "Progress", value: 105, color: "#22C55E" }, // Green
  { name: "Cancelled", value: 225, color: "#EF4444" }, // Red
  { name: "Yet to Start", value: 105, color: "#F97316" }, // Orange
]

export default function FlexChart() {
  const totalProjects = chartData.reduce((acc, data) => acc + data.value, 0)

  return (
    <Card className="bg-gray-800 text-white">
      {/* Header */}
      <CardHeader className="flex justify-between items-center">
        <CardTitle>Projects Status</CardTitle>
        <DropdownMenu>
          <DropdownMenuTrigger className="text-blue-500 flex items-center gap-1">
            Today
            <span>▾</span>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>This Week</DropdownMenuItem>
            <DropdownMenuItem>This Month</DropdownMenuItem>
            <DropdownMenuItem>All Time</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </CardHeader>

      {/* Chart Content */}
      <CardContent>
        <div className="flex justify-center">
          <PieChart width={300} height={250}>
            <Pie
              data={chartData}
              dataKey="value"
              nameKey="name"
              innerRadius={100} // Adjusted for thickness
              outerRadius={120}
              paddingAngle={3}
              strokeWidth={10} // Added thickness to match design
              stroke="transparent"
            >
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
              <Label
                position="center"
                content={({ viewBox }) => (
                  <text
                    x={viewBox?.cx}
                    y={viewBox?.cy}
                    textAnchor="middle"
                    dominantBaseline="middle"
                  >
                    <tspan className="text-4xl font-bold fill-white">
                      {totalProjects}
                    </tspan>
                    <tspan
                      x={viewBox?.cx}
                      y={(viewBox?.cy || 0) + 25}
                      className="text-sm fill-gray-400"
                    >
                      Total Projects
                    </tspan>
                  </text>
                )}
              />
            </Pie>
          </PieChart>
        </div>
      </CardContent>

      {/* Footer */}
      <CardFooter className="flex flex-col gap-2">
        {chartData.map((item) => (
          <div
            key={item.name}
            className="flex items-center justify-between px-4 py-2 rounded-lg"
          >
            <div className="flex items-center">
              <div
                className="w-4 h-4 rounded mr-2"
                style={{ backgroundColor: item.color }}
              ></div>
              <span className="font-medium">{item.name} Projects</span>
            </div>
            <span className="font-medium">{item.value} Projects</span>
          </div>
        ))}
      </CardFooter>
    </Card>
  )
}
