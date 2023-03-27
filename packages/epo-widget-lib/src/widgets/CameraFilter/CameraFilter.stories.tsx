import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import { Container } from "@rubin-epo/epo-react-lib";

import CameraFilter from ".";

const meta: ComponentMeta<typeof CameraFilter> = {
  argTypes: {},
  component: CameraFilter,
  decorators: [
    (Story) => (
      <Container>
        <Story />
      </Container>
    ),
  ],
};
export default meta;

export const Primary: ComponentStoryObj<typeof CameraFilter> = {
  args: {},
};
