import { useState } from "react";
import { Meta, StoryFn, StoryObj } from "@storybook/react";
import BaseContainer from "@rubin-epo/epo-react-lib/Container";
import styled from "styled-components";
import { getLinearScale } from "@/lib/utils";
import { Domain } from "@/types/charts";
import Trendline from ".";

const meta: Meta<typeof Trendline> = {
  argTypes: {},
  component: Trendline,
};
export default meta;

const Container = styled(BaseContainer)`
  container-type: inline-size;
`;

const width = 400;
const height = 400;
const padding = 80;

/** The domain of the "Redness vs. Distance" plot */
const domain: [Domain, Domain] = [
  [0, 16],
  [0, 2],
];

const xScale = getLinearScale(domain[0], [padding, width]);
const yScale = getLinearScale(domain[1], [height - padding, 0]);

/** The plot area the slope variant's capture rect covers */
const captureArea = {
  x: padding,
  y: 0,
  width: width - padding,
  height: height - padding,
};

/**
 * Trendline is always drawn inside a parent chart's SVG, so the story hosts it
 * in one sized to match.
 */
const Template: StoryFn<typeof Trendline> = (args) => {
  return (
    <Container width="narrow">
      <svg viewBox={`0 0 ${width} ${height}`} {...{ width, height }}>
        <Trendline {...args} />
      </svg>
    </Container>
  );
};

export const Primary: StoryObj<typeof Trendline> = Template.bind({});

Primary.args = {
  label: "Redder",
  domain,
  xScale,
  yScale,
  padding,
  pointUp: false,
};

/** The variant used by the brightness plot, with the arrow flipped */
export const PointUp: StoryObj<typeof Trendline> = Template.bind({});

PointUp.args = {
  ...Primary.args,
  label: "Brighter",
  pointUp: true,
};

/** The Hubble plot's line, drawn from the origin at a fixed slope */
export const Slope: StoryObj<typeof Trendline> = Template.bind({});

Slope.args = {
  variant: "slope",
  slope: 0.1,
  domain,
  xScale,
  yScale,
  label: (slope) => `Slope: ${slope}`,
};

/**
 * The same line, but draggable. Trendline is controlled, so the story owns the
 * slope the way a consuming widget would.
 */
const InteractiveTemplate: StoryFn<typeof Trendline> = (args) => {
  const [slope, setSlope] = useState<number | undefined>(0.1);

  return (
    <Container width="narrow">
      <svg viewBox={`0 0 ${width} ${height}`} {...{ width, height }}>
        <Trendline
          {...args}
          variant="slope"
          isInteractable
          fractionDigits={2}
          onSlopeChange={setSlope}
          {...{ slope, captureArea }}
        />
      </svg>
    </Container>
  );
};

export const InteractiveSlope: StoryObj<typeof Trendline> =
  InteractiveTemplate.bind({});

InteractiveSlope.args = {
  domain,
  xScale,
  yScale,
  label: (slope) => `Slope: ${slope}`,
};
