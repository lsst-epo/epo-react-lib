import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import { className } from "../../../.storybook/utilities/index";

import ResponsiveImage from ".";

const meta: ComponentMeta<typeof ResponsiveImage> = {
  component: ResponsiveImage,
  argTypes: {
    image: {
      control: "object",
    },
    className,
    ratio: {
      control: "text",
      defaultValue: "8:5",
    },
    title: {
      control: "text",
    },
  },
};
export default meta;

export const Primary: ComponentStoryObj<typeof ResponsiveImage> = {
  args: {
    image: {
      altText: "A placeholder image",
      url: "https://via.placeholder.com/150",
      url2x: "https://via.placeholder.com/300",
      url3x: "https://via.placeholder.com/450",
      width: 150,
      height: 150,
    },
  },
};
