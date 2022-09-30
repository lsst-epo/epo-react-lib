import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

import Image from ".";

const meta: ComponentMeta<typeof Image> = {
  component: Image,
  argTypes: {
    image: {
      control: "object",
    },
    className: {
      control: "text",
    },
    title: {
      control: "text",
    },
  },
};
export default meta;

export const Default: ComponentStoryObj<typeof Image> = {
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
