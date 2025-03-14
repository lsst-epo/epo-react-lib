import { Meta, StoryFn, StoryObj } from "@storybook/react";
import styled from "styled-components";
import Guidelines from ".";
import Chart from "../Base";
import XAxis from "../XAxis";
import YAxis from "../YAxis";
import { getLinearScale } from "@/lib/utils";

const meta: Meta<typeof Guidelines> = {
  argTypes: {
    direction: {
      control: "radio",
      options: ["horizontal", "vertical"],
      table: {
        type: { summary: "horizontal | vertical" },
        defaultValue: { summary: "horizontal" },
      },
    },
    guides: {
      control: "number",
      description: "Number of guides to render",
      table: {
        type: { summary: "number" },
      },
    },
    xDomain: {
      description: "Domain of the x axis",
      control: "object",
      table: {
        type: { summary: "number[]" },
        defaultValue: { summary: "[0,1]" },
      },
    },
    xScale: {
      description: "Scaling function for the x axis",
      table: {
        type: { summary: "(value: number) => number" },
        defaultValue: { summary: "(v) => v" },
      },
    },
    yDomain: {
      description: "Domain of the y axis",
      control: "object",
      table: {
        type: { summary: "number[]" },
        defaultValue: { summary: "[0,1]" },
      },
    },
    yScale: {
      description: "Scaling function for the y axis",
      table: {
        type: { summary: "(value: number) => number" },
        defaultValue: { summary: "(v) => v" },
      },
    },
  },
  component: Guidelines,
};
export default meta;

const Container = styled.div`
  display: grid;
  gap: 1em;
  grid-template-rows: 400px 1fr;
  justify-items: center;
`;

const Template: StoryFn<typeof Guidelines> = (args) => {
  const width = 400;
  const height = 400;
  const padding = 25;
  const xRange = [0 + padding, width - padding];
  const yRange = [height - padding, 0 + padding];
  const xScale = getLinearScale(args.xDomain, xRange);
  const yScale = getLinearScale(args.yDomain, yRange);

  return (
    <Container>
      <Chart xMin={0} {...{ width, height }}>
        <XAxis
          ticks={args.guides}
          y={yScale(args.yDomain[0])}
          xDomain={args.xDomain}
          {...{ xScale }}
        />
        <YAxis
          ticks={args.guides}
          x={xScale(args.xDomain[0])}
          yDomain={args.yDomain}
          // labelFormatter={(v) => 400 - v}
          {...{ yScale }}
        />
        <Guidelines {...args} {...{ xScale, yScale }} />
      </Chart>
    </Container>
  );
};

export const Primary: StoryObj<typeof Guidelines> = Template.bind({});

Primary.args = {
  guides: 10,
  xDomain: [0, 400],
  yDomain: [0, 400],
};
