import { Meta, StoryFn, StoryObj } from "@storybook/react";
import BaseContainer from "@rubin-epo/epo-react-lib/Container";
import styled from "styled-components";
import ScatterPlot from ".";

const meta: Meta<typeof ScatterPlot> = {
  argTypes: {},
  component: ScatterPlot,
};
export default meta;

const Container = styled(BaseContainer)`
  container-type: inline-size;
`;

const Template: StoryFn<typeof ScatterPlot> = (args) => {
  return (
    <Container width="narrow">
      <ScatterPlot {...args} />
    </Container>
  );
};

const width = 400;
const height = 400;

const points = [];

for (let i = 0; i < 25; i++) {
  points.push({
    id: i,
    x: Math.random() * width,
    y: Math.random() * height,
  });
}

const data = {
  label: "Storybook Data",
  points,
};

const xAxis = {
  min: 0,
  max: width,
  step: 50,
  label: "Width",
};

const yAxis = {
  min: 0,
  max: height,
  step: 50,
  label: "Height",
};

export const Primary: StoryObj<typeof ScatterPlot> = Template.bind({});

Primary.args = {
  width,
  height,
  data,
  xAxis,
  yAxis,
  tooltip: ({ x, y }) => `x: ${x.toFixed(0)} y: ${y.toFixed(0)}`,
  margins: { left: 40, bottom: 20, top: 0, right: 0 },
};
