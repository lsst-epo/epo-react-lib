import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

import TwitterButton from "./TwitterButton";

const meta: ComponentMeta<typeof TwitterButton> = {
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
  },
};
export default meta;

export const Primary: ComponentStoryObj<typeof TwitterButton> = {
  args: {
    url: "https://rubinobservatory.org/",
    title: "New image gallery posts!",
  },
};
