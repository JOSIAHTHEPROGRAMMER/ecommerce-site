"use client"

import * as React from "react"
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export const description = "An interactive area chart"

const chartData = [
  { date: "2024-04-01", tesla: 222, spacex: 150 },
  { date: "2024-04-02", tesla: 97, spacex: 180 },
  { date: "2024-04-03", tesla: 167, spacex: 120 },
  { date: "2024-04-04", tesla: 242, spacex: 260 },
  { date: "2024-04-05", tesla: 373, spacex: 290 },
  { date: "2024-04-06", tesla: 301, spacex: 340 },
  { date: "2024-04-07", tesla: 245, spacex: 180 },
  { date: "2024-04-08", tesla: 409, spacex: 320 },
  { date: "2024-04-09", tesla: 59, spacex: 110 },
  { date: "2024-04-10", tesla: 261, spacex: 190 },
  { date: "2024-04-11", tesla: 327, spacex: 350 },
  { date: "2024-04-12", tesla: 292, spacex: 210 },
  { date: "2024-04-13", tesla: 342, spacex: 380 },
  { date: "2024-04-14", tesla: 137, spacex: 220 },
  { date: "2024-04-15", tesla: 120, spacex: 170 },
  { date: "2024-04-16", tesla: 138, spacex: 190 },
  { date: "2024-04-17", tesla: 446, spacex: 360 },
  { date: "2024-04-18", tesla: 364, spacex: 410 },
  { date: "2024-04-19", tesla: 243, spacex: 180 },
  { date: "2024-04-20", tesla: 89, spacex: 150 },
  { date: "2024-04-21", tesla: 137, spacex: 200 },
  { date: "2024-04-22", tesla: 224, spacex: 170 },
  { date: "2024-04-23", tesla: 138, spacex: 230 },
  { date: "2024-04-24", tesla: 387, spacex: 290 },
  { date: "2024-04-25", tesla: 215, spacex: 250 },
  { date: "2024-04-26", tesla: 75, spacex: 130 },
  { date: "2024-04-27", tesla: 383, spacex: 420 },
  { date: "2024-04-28", tesla: 122, spacex: 180 },
  { date: "2024-04-29", tesla: 315, spacex: 240 },
  { date: "2024-04-30", tesla: 454, spacex: 380 },
  { date: "2024-05-01", tesla: 165, spacex: 220 },
  { date: "2024-05-02", tesla: 293, spacex: 310 },
  { date: "2024-05-03", tesla: 247, spacex: 190 },
  { date: "2024-05-04", tesla: 385, spacex: 420 },
  { date: "2024-05-05", tesla: 481, spacex: 390 },
  { date: "2024-05-06", tesla: 498, spacex: 520 },
  { date: "2024-05-07", tesla: 388, spacex: 300 },
  { date: "2024-05-08", tesla: 149, spacex: 210 },
  { date: "2024-05-09", tesla: 227, spacex: 180 },
  { date: "2024-05-10", tesla: 293, spacex: 330 },
  { date: "2024-05-11", tesla: 335, spacex: 270 },
  { date: "2024-05-12", tesla: 197, spacex: 240 },
  { date: "2024-05-13", tesla: 197, spacex: 160 },
  { date: "2024-05-14", tesla: 448, spacex: 490 },
  { date: "2024-05-15", tesla: 473, spacex: 380 },
  { date: "2024-05-16", tesla: 338, spacex: 400 },
  { date: "2024-05-17", tesla: 499, spacex: 420 },
  { date: "2024-05-18", tesla: 315, spacex: 350 },
  { date: "2024-05-19", tesla: 235, spacex: 180 },
  { date: "2024-05-20", tesla: 177, spacex: 230 },
  { date: "2024-05-21", tesla: 82, spacex: 140 },
  { date: "2024-05-22", tesla: 81, spacex: 120 },
  { date: "2024-05-23", tesla: 252, spacex: 290 },
  { date: "2024-05-24", tesla: 294, spacex: 220 },
  { date: "2024-05-25", tesla: 201, spacex: 250 },
  { date: "2024-05-26", tesla: 213, spacex: 170 },
  { date: "2024-05-27", tesla: 420, spacex: 460 },
  { date: "2024-05-28", tesla: 233, spacex: 190 },
  { date: "2024-05-29", tesla: 78, spacex: 130 },
  { date: "2024-05-30", tesla: 340, spacex: 280 },
  { date: "2024-05-31", tesla: 178, spacex: 230 },
  { date: "2024-06-01", tesla: 178, spacex: 200 },
  { date: "2024-06-02", tesla: 470, spacex: 410 },
  { date: "2024-06-03", tesla: 103, spacex: 160 },
  { date: "2024-06-04", tesla: 439, spacex: 380 },
  { date: "2024-06-05", tesla: 88, spacex: 140 },
  { date: "2024-06-06", tesla: 294, spacex: 250 },
  { date: "2024-06-07", tesla: 323, spacex: 370 },
  { date: "2024-06-08", tesla: 385, spacex: 320 },
  { date: "2024-06-09", tesla: 438, spacex: 480 },
  { date: "2024-06-10", tesla: 155, spacex: 200 },
  { date: "2024-06-11", tesla: 92, spacex: 150 },
  { date: "2024-06-12", tesla: 492, spacex: 420 },
  { date: "2024-06-13", tesla: 81, spacex: 130 },
  { date: "2024-06-14", tesla: 426, spacex: 380 },
  { date: "2024-06-15", tesla: 307, spacex: 350 },
  { date: "2024-06-16", tesla: 371, spacex: 310 },
  { date: "2024-06-17", tesla: 475, spacex: 520 },
  { date: "2024-06-18", tesla: 107, spacex: 170 },
  { date: "2024-06-19", tesla: 341, spacex: 290 },
  { date: "2024-06-20", tesla: 408, spacex: 450 },
  { date: "2024-06-21", tesla: 169, spacex: 210 },
  { date: "2024-06-22", tesla: 317, spacex: 270 },
  { date: "2024-06-23", tesla: 480, spacex: 530 },
  { date: "2024-06-24", tesla: 132, spacex: 180 },
  { date: "2024-06-25", tesla: 141, spacex: 190 },
  { date: "2024-06-26", tesla: 434, spacex: 380 },
  { date: "2024-06-27", tesla: 448, spacex: 490 },
  { date: "2024-06-28", tesla: 149, spacex: 200 },
  { date: "2024-06-29", tesla: 103, spacex: 160 },
  { date: "2024-06-30", tesla: 446, spacex: 400 },
]

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  tesla: {
    label: "Tesla",
    color: "var(--chart-1)",
  },
  spacex: {
    label: "SpaceX",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig

export function ChartAreaInteractive() {
  const [timeRange, setTimeRange] = React.useState("90d")

  const filteredData = chartData.filter((item) => {
    const date = new Date(item.date)
    const referenceDate = new Date("2024-06-30")
    let daysToSubtract = 90
    if (timeRange === "30d") {
      daysToSubtract = 30
    } else if (timeRange === "7d") {
      daysToSubtract = 7
    }
    const startDate = new Date(referenceDate)
    startDate.setDate(startDate.getDate() - daysToSubtract)
    return date >= startDate
  })

  return (
    <Card className="pt-0">
      <CardHeader className="flex items-center gap-2 space-y-0 border-b py-5 sm:flex-row">
        <div className="grid flex-1 gap-1">
          <CardTitle>Space x Vs Tesla Revenue - Area Chart</CardTitle>
          <CardDescription>
            Showing total Revenue (in Millions) for the last 3 months
          </CardDescription>
        </div>
        <Select value={timeRange} onValueChange={setTimeRange}>
          <SelectTrigger
            className="hidden w-[160px] rounded-lg sm:ml-auto sm:flex"
            aria-label="Select a value"
          >
            <SelectValue placeholder="Last 3 months" />
          </SelectTrigger>
          <SelectContent className="rounded-xl">
            <SelectItem value="90d" className="rounded-lg">
              Last 3 months
            </SelectItem>
            <SelectItem value="30d" className="rounded-lg">
              Last 30 days
            </SelectItem>
            <SelectItem value="7d" className="rounded-lg">
              Last 7 days
            </SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <AreaChart data={filteredData}>
            <defs>
              <linearGradient id="fillTesla" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-tesla)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-tesla)"
                  stopOpacity={0.1}
                />
              </linearGradient>
              <linearGradient id="fillSpaceX" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-spacex)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-spacex)"
                  stopOpacity={0.1}
                />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value)
                return date.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                })
              }}
            />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    })
                  }}
                  indicator="dot"
                />
              }
            />
            <Area
              dataKey="spacex"
              type="natural"
              fill="url(#fillSpaceX)"
              stroke="var(--color-spacex)"
              stackId="a"
            />
            <Area
              dataKey="tesla"
              type="natural"
              fill="url(#fillTesla)"
              stroke="var(--color-tesla)"
              stackId="a"
            />
            <ChartLegend content={<ChartLegendContent />} />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
