import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

import CircularLoader from ".";

const meta: ComponentMeta<typeof CircularLoader> = {
  component: CircularLoader,
  argTypes: {
    fullScreen: { control: "boolean" },
    isVisible: { control: "boolean" },
  },
};
export default meta;

export const Primary: ComponentStoryObj<typeof CircularLoader> = {
  args: {
    isVisible: true,
  },
};
