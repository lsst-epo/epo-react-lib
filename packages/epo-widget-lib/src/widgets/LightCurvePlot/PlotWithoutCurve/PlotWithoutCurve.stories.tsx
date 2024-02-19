import { Meta, StoryObj } from "@storybook/react";
import { biggerData } from "@/widgets/SourceSelector/mocks";
import minBy from "lodash/minBy";
import PlotWithoutCurve from ".";

const meta: Meta<typeof PlotWithoutCurve> = {
  argTypes: {},
  component: PlotWithoutCurve,
};
export default meta;

const { alerts } = biggerData;

const peakMjd = (minBy(alerts, ({ magnitude }) => magnitude)?.date || 0) - 0.5;

export const Primary: StoryObj<typeof PlotWithoutCurve> = {
  args: { alerts, peakMjd },
};
