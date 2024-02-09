import { Meta, StoryObj } from "@storybook/react";
import { biggerData } from "@/widgets/SourceSelector/mocks";
import minBy from "lodash/minBy";
import LightCurvePlot from ".";

const meta: Meta<typeof LightCurvePlot> = {
  argTypes: {},
  component: LightCurvePlot,
};
export default meta;

const { alerts } = biggerData;

const peakMjd = minBy(alerts, ({ magnitude }) => magnitude)?.date;

export const Primary: StoryObj<typeof LightCurvePlot> = {
  args: { alerts, peakMjd },
};
