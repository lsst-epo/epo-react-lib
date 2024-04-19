import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

import CameraFilter from ".";

const meta: ComponentMeta<typeof CameraFilter> = {
  argTypes: {},
  component: CameraFilter,
};
export default meta;

export const Primary: ComponentStoryObj<typeof CameraFilter> = {
  args: {},
};
