import { FC } from "react";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "./ui/chart";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";

const chartData = [
  { time: "11:00", players: 1.4, watchers: 2.6 },
  { time: "11:02", players: 1.4, watchers: 3.0 },
  { time: "11:04", players: 1.6, watchers: 3.2 },
  { time: "11:06", players: 2.0, watchers: 6 },
];

const chartConfig = {
  watchers: {
    label: "Watchers bet",
    color: "hsl(var(--chart-1))",
  },
  players: {
    label: "Players bet",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

const BetChart: FC = () => {
  return (
    <ChartContainer config={chartConfig}>
      <AreaChart accessibilityLayer data={chartData}>
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="time"
          tickLine={false}
          axisLine={false}
          tickMargin={8}
        />
        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent indicator="dot" />}
        />
        <Area
          dataKey="players"
          type="natural"
          fill="var(--color-players)"
          fillOpacity={0.4}
          stroke="var(--color-players)"
          stackId="a"
        />
        <Area
          dataKey="watchers"
          type="natural"
          fill="var(--color-watchers)"
          fillOpacity={0.4}
          stroke="var(--color-watchers)"
          stackId="a"
        />
        <ChartLegend content={<ChartLegendContent />} />
      </AreaChart>
    </ChartContainer>
  );
};

export default BetChart;
