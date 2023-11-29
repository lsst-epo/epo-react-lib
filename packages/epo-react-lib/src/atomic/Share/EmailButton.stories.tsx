import { Meta, StoryObj } from "@storybook/react";

import EmailButton from "./EmailButton";

const meta: Meta<typeof EmailButton> = {
  component: EmailButton,
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
      description: "Email subject",
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

export const Primary: StoryObj<typeof EmailButton> = {
  args: {
    url: "https://rubinobservatory.org/",
    title: "New image gallery posts!",
  },
};
