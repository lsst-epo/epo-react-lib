import { Meta, StoryFn, StoryObj } from "@storybook/react";
import styled from "styled-components";
import AspectRatio from ".";

const options = {
  Square: "square",
  Landscape: "landscape",
  Portrait: "portrait",
  None: undefined,
};

const meta: Meta<typeof AspectRatio> = {
  argTypes: {
    ratio: {
      control: "select",
      options,
    },
    medScreenRatio: {
      control: "select",
      options,
    },
    smallScreenRatio: {
      control: "select",
      options,
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
  ratio: "landscape",
  medScreenRatio: "square",
  smallScreenRatio: "portrait",
};
