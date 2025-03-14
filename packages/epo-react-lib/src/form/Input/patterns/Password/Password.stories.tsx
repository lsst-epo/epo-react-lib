import { Meta, StoryObj } from "@storybook/react";

import Password from ".";

const meta: Meta<typeof Password> = {
  component: Password,
  argTypes: {},
};
export default meta;

export const Primary: StoryObj<typeof Password> = {
  args: {},
};
