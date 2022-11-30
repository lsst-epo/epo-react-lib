import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

import CopyUrlButton from "./CopyUrlButton";

const meta: ComponentMeta<typeof CopyUrlButton> = {
  component: CopyUrlButton,
  argTypes: {
    url: {
      control: "text",
      description: "Url to share",
      type: {
        name: "string",
        required: true,
      },
      table: {
        type: {
          summary: "string",
        },
      },
    },
  },
};
export default meta;

export const Primary: ComponentStoryObj<typeof CopyUrlButton> = {
  args: {
    url: "https://rubinobs.org/",
  },
};
