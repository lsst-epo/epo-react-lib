import { Meta, StoryObj } from "@storybook/react";

import FacebookButton from "./FacebookButton";

const meta: Meta<typeof FacebookButton> = {
  component: FacebookButton,
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
      description: "Subject of the Facebook post",
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

export const Primary: StoryObj<typeof FacebookButton> = {
  args: {
    url: "https://rubinobservatory.org/",
    title: "New image gallery posts!",
  },
};
