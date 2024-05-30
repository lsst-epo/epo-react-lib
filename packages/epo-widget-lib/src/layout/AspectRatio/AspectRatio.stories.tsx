import { Meta, StoryFn, StoryObj } from "@storybook/react";
import styled from "styled-components";
import AspectRatio from ".";

const meta: Meta<typeof AspectRatio> = {
  argTypes: {
    ratio: {
      control: "object",
    },
  },
  component: AspectRatio,
};
export default meta;

const Filler = styled.div`
  background-color: var(--neutral30);
  border-radius: 5px;
  width: 100%;
  height: 100%;
`;

const Template: StoryFn<typeof AspectRatio> = (args) => {
  return (
    <AspectRatio {...args}>
      <Filler />
    </AspectRatio>
  );
};

export const Primary: StoryObj<typeof AspectRatio> = Template.bind({});
Primary.args = {
  ratio: 1,
};
export const MultipleOrientations: StoryObj<typeof AspectRatio> = Template.bind(
  {}
);
MultipleOrientations.args = {
  ratio: { landscape: 3 / 2, portrait: 2 / 3 },
};
