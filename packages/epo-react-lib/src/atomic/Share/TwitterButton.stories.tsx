import { Meta, StoryObj } from "@storybook/react";

import TwitterButton from "./TwitterButton";

const meta: Meta<typeof TwitterButton> = {
  component: TwitterButton,
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
    title: {
      control: "text",
      description: "Subject of the Twitter post",
      type: {
        name: "string",
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

export const Primary: StoryObj<typeof TwitterButton> = {
  args: {
    url: "https://rubinobservatory.org/",
    title: "New image gallery posts!",
  },
};
