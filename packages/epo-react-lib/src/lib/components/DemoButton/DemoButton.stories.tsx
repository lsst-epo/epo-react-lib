import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

import DemoButton from "./";

const meta: ComponentMeta<typeof DemoButton> = {
  title: "Design System/MyButton",
  component: DemoButton,
};
export default meta;

export const Primary: ComponentStoryObj<typeof DemoButton> = {
  args: {
    disabled: false,
    children: "Hello",
  },
  parameters: {
    jest: "DemoButton.test.tsx",
  },
};
