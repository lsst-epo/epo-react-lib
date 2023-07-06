import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

import FacebookButton from "./FacebookButton";

const meta: ComponentMeta<typeof FacebookButton> = {
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
  },
};
export default meta;

export const Primary: ComponentStoryObj<typeof FacebookButton> = {
  args: {
    url: "https://rubinobs.org/",
    title: "New image gallery posts!",
  },
};
