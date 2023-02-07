import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

import FilterTool from ".";

const meta: ComponentMeta<typeof FilterTool> = {
  component: FilterTool,
};
export default meta;

export const Primary: ComponentStoryObj<typeof FilterTool> = {
  args: {},
};
