"use client"

import { TrendingUp } from "lucide-react"
import { Bar, BarChart, XAxis, YAxis, ResponsiveContainer } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

export const description = "A mixed bar chart showing successful and failed sales"

const chartData = [
  { month: "January", total: 286, successful: 198, failed: 88 },
  { month: "February", total: 335, successful: 247, failed: 88 },
  { month: "March", total: 247, successful: 186, failed: 61 },
  { month: "April", total: 113, successful: 92, failed: 21 },
  { month: "May", total: 309, successful: 234, failed: 75 },
  { month: "June", total: 234, successful: 189, failed: 45 },
];

const chartConfig = {
  total: {
    label: "Total",
    color: "var(--chart-3)",
  },
  successful: {
    label: "Successful",
    color: "var(--chart-1)",
  },
  failed: {
    label: "Failed",
    color: "var(--chart-5)",
  },
} satisfies ChartConfig

export function ChartBarMixed() {
  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader>
        <CardTitle>Total Sales - Mixed Bar Chart</CardTitle>
        <CardDescription>January - June Performance</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart
              accessibilityLayer
              data={chartData}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
              <XAxis 
                dataKey="month" 
                tickLine={false}
                axisLine={false}
                tickMargin={10}
              />
              <YAxis 
                tickLine={false}
                axisLine={false}
                tickMargin={10}
              />
              <ChartTooltip 
                content={<ChartTooltipContent />}
              />
              <Bar 
                dataKey="successful" 
                fill="var(--chart-1)" 
                stackId="a" 
                radius={[0, 0, 5, 5]}
                name="Successful"
              />
              <Bar 
                dataKey="failed" 
                fill="var(--chart-5)" 
                stackId="a" 
                radius={[5, 5, 0, 0]}
                name="Failed"
              />
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium">
          Sales up 12.7% <TrendingUp className="h-4 w-4" />
        </div>
        <div className="text-muted-foreground">
          Showing successful vs failed Sales by month
        </div>
      </CardFooter>
    </Card>
  )
}