import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import { Container } from "@rubin-epo/epo-react-lib";

import CameraFilter from ".";

const meta: ComponentMeta<typeof CameraFilter> = {
  argTypes: {},
  component: CameraFilter,
};
export default meta;

export const Primary: ComponentStoryObj<typeof CameraFilter> = {
  args: {},
};
