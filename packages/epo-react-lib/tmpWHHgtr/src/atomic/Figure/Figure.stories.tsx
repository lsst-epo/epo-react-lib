import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import { children } from "@/storybook/utilities/argTypes";

import Figure from ".";

const meta: ComponentMeta<typeof Figure> = {
  component: Figure,
  argTypes: {
    caption: {
      control: "text",
      defaultValue:
        "Cosmic ipsum Lagrange points hydrogen double star lunar orbital eccentricity solar wind synodic Earthshine gamma ray astronomical unit variable star half moon cosmology spectroscope red shift",
    },
    children,
    withBackground: { control: "boolean", defaultValue: false },
  },
};
export default meta;

export const Primary: ComponentStoryObj<typeof Figure> = {};

export const WithBackground: ComponentStoryObj<typeof Figure> = {
  args: {
    withBackground: true,
  },
};
