import { useState } from "react";
import { Meta, StoryFn, StoryObj } from "@storybook/react";
import { biggerData } from "@/widgets/SourceSelector/mocks";
import minBy from "lodash/minBy";
import PlotWithCurve from ".";

const meta: Meta<typeof PlotWithCurve> = {
  argTypes: {
    gaussianWidth: {
      control: "none",
    },
    yOffset: {
      control: "none",
    },
  },
  component: PlotWithCurve,
};
export default meta;

const { alerts } = biggerData;

const peakMjd = (minBy(alerts, ({ magnitude }) => magnitude)?.date || 0) - 0.5;

const Template: StoryFn<typeof PlotWithCurve> = (args) => {
  const [userMagnitude, setUserMagnitude] = useState(args.userMagnitude);
  const [gaussianWidth, setGaussianWidth] = useState(args.gaussianWidth);
  const [yOffset, setYOffset] = useState(args.yOffset);

  return (
    <PlotWithCurve
      {...args}
      {...{ gaussianWidth, yOffset, userMagnitude }}
      onGaussianChangeCallback={(value) => setGaussianWidth(value)}
      onYOffsetChangeCallback={(value) => setYOffset(value)}
      onUserMagnitudeChangeCallback={(value) => setUserMagnitude(value)}
    />
  );
};

export const Primary: StoryObj<typeof PlotWithCurve> = Template.bind({});

Primary.args = { alerts, peakMjd };
