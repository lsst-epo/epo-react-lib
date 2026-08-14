import { useState } from "react";
import { Meta, StoryFn, StoryObj } from "@storybook/react";
import { nice } from "d3-array";
import { ChartMargin, HistogramData } from "@/types/charts";
import { getLinearScale } from "@/lib/utils";
import Histogram from ".";

type StoryArgs = React.ComponentProps<typeof Histogram>;

const meta: Meta<StoryArgs> = {
  argTypes: {},
  component: Histogram,
};
export default meta;

const Template: StoryFn<StoryArgs> = (args) => <Histogram {...args} />;

/** Tracks the clicked bar so the tooltip and selected fill persist. */
const SelectableTemplate: StoryFn<StoryArgs> = (args) => {
  const [selectedIndex, setSelectedIndex] = useState<number | undefined>(2);

  return (
    <Histogram
      {...args}
      {...{ selectedIndex }}
      onBarClick={({ index }) =>
        setSelectedIndex(index === selectedIndex ? undefined : index)
      }
    />
  );
};

const width = 600;
const height = width / 1.6;
const xTicks = 6;
const yTicks = 7;
const step = 0.5;
const margin: ChartMargin = { top: 50, right: 100, bottom: 30, left: 80 };

/** A roughly normal distribution of counts across 12 bins. */
const counts = [4, 12, 31, 68, 122, 168, 155, 104, 57, 26, 9, 3];

const data: HistogramData = counts.map((value, i) => ({
  bin: i * step,
  value,
}));

const total = counts.reduce((sum, value) => sum + value, 0);
const bins = data.map(({ bin }) => bin);

const xDomain = nice(Math.min(...bins), Math.max(...bins) + step, xTicks);
const yDomain = nice(0, Math.max(...counts), yTicks);

const count = (value: number) => value.toLocaleString("en-US");
const au = (value: number) => `${Number(value.toFixed(2))}`;

export const Primary: StoryObj<StoryArgs> = Template.bind({});

Primary.args = {
  data,
  step,
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
  horizontalLabel: "Semimajor axis (AU)",
  verticalLabel: "Number of objects",
  renderTooltip: ({ bin, value }) =>
    `${count(value)} of ${count(total)} objects, ` +
    `semimajor axis: ${au(bin)} – ${au(bin + step)}`,
  renderAriaLabel: ({ bin, value }) =>
    `Semimajor axis ${au(bin)} to ${au(bin + step)}: ` +
    `${count(value)} of ${count(total)} objects`,
};

export const WithSelection: StoryObj<StoryArgs> = SelectableTemplate.bind({});

WithSelection.args = {
  ...Primary.args,
};

export const WithActiveRange: StoryObj<StoryArgs> = Template.bind({});

WithActiveRange.args = {
  ...Primary.args,
  activeRange: [2, 4],
};
