import { Meta, StoryObj } from "@storybook/react";

import Buttonish from ".";

const meta: Meta<typeof Buttonish> = {
  component: Buttonish,
  argTypes: {
    text: {
      control: "text",
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

export const ExternalLink: StoryObj<typeof Buttonish> = {
  args: {
    text: "Rubin Observatory",
    url: "https://rubinobservatory.org/",
  },
};

const BASE_URL =
  process.env.STORYBOOK_ENV === "true"
    ? process.env.STORYBOOK_PUBLIC_BASE_URL
    : process.env.NEXT_PUBLIC_BASE_URL;

export const InternalLink: StoryObj<typeof Buttonish> = {
  args: {
    ...ExternalLink.args,
    url: `${BASE_URL}/?path=/story/atomic-accordion--primary`,
  },
};
