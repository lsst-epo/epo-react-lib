import { Meta, StoryObj } from "@storybook/react";

import Error from ".";

const meta: Meta<typeof Error> = {
  component: Error,
  argTypes: {
    children: {
      control: "text",
      description: "React components to populate error message",
      table: {
        type: {
          summary: "ReactNode",
        },
      },
    },
  },
};
export default meta;

export const Primary: StoryObj<typeof Error> = {
  args: {
    children: "An error has occurred!",
  },
};
