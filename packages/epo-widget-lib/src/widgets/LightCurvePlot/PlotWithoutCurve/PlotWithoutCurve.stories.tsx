import { Meta, StoryObj } from "@storybook/react";
import { biggerData } from "@/widgets/SourceSelector/mocks";
import longerDataset from "@/widgets/SourceSelector/mocks/ZTF19aavjzrz_r_lightcurve.json";
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
  args: { alerts, peakMjd, name: "Supernova A" },
};

export const LongerAlertSet: StoryObj<typeof PlotWithoutCurve> = {
  args: {
    alerts: longerDataset.alerts.map(({ alert_id: id, ...alert }) => {
      return { id, ...alert };
    }),
    peakMjd: 58633.4559,
    name: "ZTF19aavjzrz",
    yMin: 21,
    yMax: 17,
  },
};
