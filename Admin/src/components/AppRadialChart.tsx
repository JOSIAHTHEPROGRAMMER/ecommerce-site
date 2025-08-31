"use client"

import { TrendingUp } from "lucide-react"
import {
  Label,
  PolarGrid,
  PolarRadiusAxis,
  RadialBar,
  RadialBarChart,
} from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { ChartConfig, ChartContainer } from "@/components/ui/chart"

export const description = "A radial chart with a custom shape"

const chartData = [
  { user: "Elon Musk", purchases: 2000, fill: "var(--chart-1)" },
]

const chartConfig = {
  purchases: {
    label: "Purchases (in USD)",
  },
  user: {
    label: "Elon Musk",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig

export function ChartRadialShape() {
  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>User Quarterly Purchases - Radial Chart</CardTitle>
        <CardDescription>Q1 2025 Financial Report</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <RadialBarChart
            data={chartData}
            endAngle={100}
            innerRadius={80}
            outerRadius={140}
          >
            <PolarGrid
              gridType="circle"
              radialLines={false}
              stroke="none"
              className="first:fill-muted last:fill-background"
              polarRadius={[91, 74]}
            />
            <RadialBar dataKey="purchases" background />
            <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-ring text-2xl font-bold"
                        >
                          {chartData[0].purchases.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          Purchases (USD)
                        </tspan>
                      </text>
                    )
                  }
                }}
              />
            </PolarRadiusAxis>
          </RadialBarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 leading-none font-medium">
          Purchases increased by 8.4% this quarter <TrendingUp className="h-4 w-4" />
        </div>
        <div className="text-muted-foreground leading-none">
          User&apos;s financial performance in Q1 2025
        </div>
      </CardFooter>
    </Card>
  )
}
