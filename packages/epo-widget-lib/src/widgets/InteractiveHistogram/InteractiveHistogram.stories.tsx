import { Meta, StoryFn, StoryObj } from "@storybook/react";
import { nice } from "d3-array";
import { ChartMargin } from "@/types/charts";
import { getLinearScale } from "@/lib/utils";
import InteractiveHistogram from ".";
import histograms from "./mock/semimajor-axis-histograms.json";
import BarChart from "./BarChart";

type StoryArgs = React.ComponentProps<typeof InteractiveHistogram>;

const meta: Meta<StoryArgs> = {
  argTypes: {},
  component: InteractiveHistogram,
};
export default meta;

const Template: StoryFn<StoryArgs> = (args) => (
  <InteractiveHistogram {...args} />
);

const width = 600;
const height = width / 1.6;
const xTicks = 6;
const yTicks = 7;
const margin: ChartMargin = { top: 50, right: 100, bottom: 30, left: 80 };

const count = (value: number) => value.toLocaleString("en-US");
const au = (value: number) => `${Number(value.toFixed(2))}`;

/**
 * Each dataset is binned differently, so the domains and scales are derived
 * per group rather than shared across the rail.
 */
const toChartProps = ({
  data,
  step,
  xLabel,
  yLabel,
  binLabel,
  label,
  total,
}: typeof histograms[number]): Omit<
  StoryArgs["data"][number],
  "label" | "id"
> => {
  const bins = data.map(({ bin }) => bin);
  const values = data.map(({ value }) => value);

  const xDomain = nice(Math.min(...bins), Math.max(...bins), xTicks);
  const yDomain = nice(0, Math.max(...values), yTicks);

  return {
    data,
    step,
    horizontalLabel: xLabel,
    verticalLabel: yLabel,
    renderTooltip: ({ bin, value }) =>
      `${count(value)} of ${count(total)} ${label}, ` +
      `${binLabel}: ${au(bin)} – ${au(bin + step)}`,
    renderAriaLabel: ({ bin, value }) =>
      `${binLabel} ${au(bin)} to ${au(bin + step)}: ` +
      `${count(value)} of ${count(total)} ${label}`,
    margin,
    width,
    height,
    xTicks,
    yTicks,
    xDomain,
    yDomain,
    xScale: getLinearScale(xDomain, [margin.left, width - margin.right]),
    yScale: getLinearScale(yDomain, [height - margin.bottom, margin.top]),
    activeRange: [Math.min(...bins), Math.max(...bins)],
  };
};

export const Primary: StoryObj<StoryArgs> = Template.bind({});
Primary.args = {
  navLabel: "Orbit sizes",
  data: histograms.map((histogram) => ({
    label: histogram.label,
    header: histogram.xLabel,
    id: histogram.id,
    ...toChartProps(histogram),
  })),
};

export const WithOneDataset: StoryObj<StoryArgs> = Template.bind({});
WithOneDataset.args = {
  navLabel: "Orbit sizes",
  data: [
    {
      label: histograms[0].label,
      header: histograms[0].xLabel,
      id: histograms[0].id,
      ...toChartProps(histograms[0]),
    },
  ],
};

export const WithMultipleDatasets: StoryObj<StoryArgs> = Template.bind({});
WithMultipleDatasets.args = {
  navLabel: "Orbit sizes",
  data: histograms.map((histogram) => ({
    label: histogram.label,
    header: histogram.xLabel,
    icon: <BarChart />,
    id: histogram.id,
    ...toChartProps(histogram),
  })),
};
