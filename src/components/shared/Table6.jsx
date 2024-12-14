"use client"
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"


import {
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"
const chartData = [
    { month: "January", mobile: 45 },
    { month: "February", mobile: 65 },
    { month: "March", mobile: 55 },
    { month: "April", mobile: 50 },
    { month: "May", mobile: 70 },
    { month: "June", mobile: 48 },
    { month: "Jule", mobile: 52 },
    { month: "Avg", mobile: 47 },
    { month: "Sep", mobile: 65 },
    { month: "Oct", mobile: 75 },
    { month: "Nov", mobile: 45 },
    { month: "Dec", mobile: 50 },
]

const chartConfig = {
    mobile: {
        label: "Mobile",
        color: "hsl(var(--chart-2))",
    },
}

export function Table6() {
    return (
        <div className="">

            <ChartContainer config={chartConfig}>
                <AreaChart
                    accessibilityLayer
                    data={chartData}
                    margin={{
                        left: 22,
                        right: 22,
                    }}
                >
                    <CartesianGrid vertical={false} />
                    <XAxis
                        dataKey="month"
                        tickLine={false}
                        axisLine={false}
                        tickMargin={8}
                        tickFormatter={(value) => value.slice(0, 3)}
                    />
                    <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
                    <defs>
                        <linearGradient id="fillMobile" x1="0" y1="0" x2="0" y2="1">
                            <stop
                                offset="5%"
                                stopColor="var(--color-mobile)"
                                stopOpacity={0.8}
                            />
                            <stop
                                offset="95%"
                                //   stopColor="var(--color-mobile)"
                                stopOpacity={0.1}
                            />
                        </linearGradient>
                    </defs>
                    <Area
                        dataKey="mobile"
                        //   type="natural"
                        fill="url(#fillMobile)"
                        fillOpacity={0.4}
                        stroke="var(--color-mobile)"
                        stackId="a"
                    />
                    <Area
                        dataKey="desktop"
                        type="natural"
                        fill="url(#fillDesktop)"
                        fillOpacity={0.4}
                        stroke="var(--color-desktop)"
                        stackId="a"
                    />
                </AreaChart>
            </ChartContainer>
            <div className="flex w-full border gap-12 mt-10 p-2">
                <div className="text-center hover:cursor-pointer text-[14px]">
                    <h1>12,721</h1>
                    <p>Number of Projects</p>
                </div>
                <div className="text-center hover:cursor-pointer text-[14px]">
                    <h1>721</h1>
                    <p>Active Projects</p>
                </div>
                <div className="text-center hover:cursor-pointer text-[14px]">
                    <h1>$2,50,523</h1>
                    <p>Revenue</p>
                </div>
                <div className="text-center hover:cursor-pointer text-[14px]">
                    <h1>12,275h</h1>
                    <p>Working Hours</p>
                </div>
            </div>
        </div>
    )
}
