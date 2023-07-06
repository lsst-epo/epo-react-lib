import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

import Buttonish from ".";

const meta: ComponentMeta<typeof Buttonish> = {
  component: Buttonish,
  argTypes: {
    text: {
      control: "text",
      defaultValue: "Rubin Observatory",
      description: "Text to be displayed in button",
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
    url: {
      control: "text",
      description: "URL to be attached to button",
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

export const ExternalLink: ComponentStoryObj<typeof Buttonish> = {
  args: {
    url: "https://rubinobs.org/",
  },
};

const BASE_URL =
  process.env.STORYBOOK_ENV === "true"
    ? process.env.STORYBOOK_PUBLIC_BASE_URL
    : process.env.NEXT_PUBLIC_BASE_URL;

export const InternalLink: ComponentStoryObj<typeof Buttonish> = {
  args: {
    url: `${BASE_URL}/?path=/story/atomic-accordion--primary`,
  },
};
