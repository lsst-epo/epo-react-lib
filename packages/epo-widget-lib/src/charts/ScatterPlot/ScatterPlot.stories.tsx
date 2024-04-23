import { Meta, StoryFn, StoryObj } from "@storybook/react";
import styled from "styled-components";
import ScatterPlot from ".";

const meta: Meta<typeof ScatterPlot> = {
  argTypes: {},
  component: ScatterPlot,
};
export default meta;

const Container = styled.div`
  display: grid;
  gap: 1em;
  grid-template-rows: 400px 1fr;
  justify-items: center;
`;

const Template: StoryFn<typeof ScatterPlot> = (args) => {
  return (
    <Container>
      <ScatterPlot {...args} />
    </Container>
  );
};

export const Primary: StoryObj<typeof ScatterPlot> = Template.bind({});

Primary.args = {};
