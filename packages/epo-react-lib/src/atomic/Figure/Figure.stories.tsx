import { Meta, StoryObj } from "@storybook/react";
import { children } from "@/storybook/utilities/argTypes";

import Figure from ".";
import Image from "../Image/Image";
import { getGradientImage } from "@/storybook/utilities/helpers";

const meta: Meta<typeof Figure> = {
  component: Figure,
  argTypes: {
    caption: {
      control: "text",
    },
    children,
    withBackground: { control: "boolean", defaultValue: false },
  },
};
export default meta;

export const Primary: StoryObj<typeof Figure> = {
  args: {
    children: <Image image={{ url: getGradientImage() }} />,
    caption:
      "Cosmic ipsum Lagrange points hydrogen double star lunar orbital eccentricity solar wind synodic Earthshine gamma ray astronomical unit variable star half moon cosmology spectroscope red shift",
  },
};

export const WithBackground: StoryObj<typeof Figure> = {
  args: {
    ...Primary.args,
    withBackground: true,
  },
};
