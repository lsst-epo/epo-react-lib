import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

import Password from ".";

const meta: ComponentMeta<typeof Password> = {
  component: Password,
  argTypes: {},
};
export default meta;

export const Primary: ComponentStoryObj<typeof Password> = {
  args: {},
};
