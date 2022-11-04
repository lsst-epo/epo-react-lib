import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

import Video from ".";

const meta: ComponentMeta<typeof Video> = {
  component: Video,
  argTypes: {
    url: {
      control: "text",
      description: "YouTube video url",
      table: {
        type: {
          summary: "string",
        },
      },
    },
  },
};
export default meta;

export const Default: ComponentStoryObj<typeof Video> = {
  args: { url: "https://www.youtube.com/watch?v=wd2hL3yI_-E" },
};
