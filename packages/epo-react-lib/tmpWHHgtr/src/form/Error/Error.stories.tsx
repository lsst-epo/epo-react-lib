import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

import Error from ".";

const meta: ComponentMeta<typeof Error> = {
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

export const Primary: ComponentStoryObj<typeof Error> = {
  args: {
    children: "An error has occurred!",
  },
};
