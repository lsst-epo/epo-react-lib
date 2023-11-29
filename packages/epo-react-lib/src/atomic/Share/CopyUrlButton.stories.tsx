import { Meta, StoryObj } from "@storybook/react";

import CopyUrlButton from "./CopyUrlButton";

const meta: Meta<typeof CopyUrlButton> = {
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
    showText: {
      description: "Shows the share button's label",
      control: "boolean",
      table: {
        type: {
          summary: "boolean",
        },
      },
    },
  },
};
export default meta;

export const Primary: StoryObj<typeof CopyUrlButton> = {
  args: {
    url: "https://rubinobservatory.org/",
  },
};
