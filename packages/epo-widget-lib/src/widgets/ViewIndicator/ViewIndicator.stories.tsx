import { Meta, StoryObj } from "@storybook/react";
import ViewIndicator from ".";

const meta: Meta<typeof ViewIndicator> = {
  argTypes: {
    ra: {
      control: { type: "range", min: 0, max: 360, step: 0.1 },
    },
    dec: {
      control: { type: "range", min: -90, max: 90, step: 0.1 },
    },
    fov: {
      control: "object",
    },
  },
  component: ViewIndicator,
};
export default meta;

export const Primary: StoryObj<typeof ViewIndicator> = {
  args: {
    size: "var(--size-spacing-4xl)",
    ra: 0,
    dec: 0,
    fov: [20, 20],
  },
};
