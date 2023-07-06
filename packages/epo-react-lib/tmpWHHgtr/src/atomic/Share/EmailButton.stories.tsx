import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

import EmailButton from "./EmailButton";

const meta: ComponentMeta<typeof EmailButton> = {
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
  },
};
export default meta;

export const Primary: ComponentStoryObj<typeof EmailButton> = {
  args: {
    url: "https://rubinobs.org/",
    title: "New image gallery posts!",
  },
};
