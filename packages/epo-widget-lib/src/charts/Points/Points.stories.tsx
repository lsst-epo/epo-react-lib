import { Meta, StoryFn, StoryObj } from "@storybook/react";
import styled from "styled-components";
import Points from ".";
import Chart from "../Base";
import XAxis from "../XAxis";
import YAxis from "../YAxis";
import { getLinearScale } from "@/lib/utils";

const meta: Meta<typeof Points> = {
  argTypes: {},
  component: Points,
};
export default meta;

const Container = styled.div`
  display: grid;
  gap: 1em;
  grid-template-rows: 400px 1fr;
  justify-items: center;
`;

const Template: StoryFn<typeof Points> = (args) => {
  const width = 400;
  const height = 400;
  const padding = 25;
  const xRange = [0 + padding, width - padding];
  const yRange = [height - padding, 0 + padding];
  const xDomain = [0, 400];
  const yDomain = [0, 400];
  const xScale = getLinearScale(xDomain, xRange);
  const yScale = getLinearScale(yDomain, yRange);

  const data = [];

  for (let i = 0; i < 25; i++) {
    data.push({
      id: i,
      x: Math.random() * width,
      y: Math.random() * height,
    });
  }

  return (
    <Container>
      <Chart xMin={0} {...{ width, height }}>
        <XAxis
          ticks={10}
          y={yScale(yDomain[0])}
          xDomain={xDomain}
          {...{ xScale }}
        />
        <YAxis
          ticks={10}
          x={xScale(xDomain[0])}
          yDomain={yDomain}
          {...{ yScale }}
        />
        <Points {...args} {...{ xScale, yScale, data }} />
      </Chart>
    </Container>
  );
};

export const Primary: StoryObj<typeof Points> = Template.bind({});

Primary.args = {};
