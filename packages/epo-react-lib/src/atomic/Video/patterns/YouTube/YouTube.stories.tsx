import { Meta, StoryObj } from "@storybook/react";

import Video from ".";

const meta: Meta<typeof Video> = {
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

export const Primary: StoryObj<typeof Video> = {
  args: { url: "https://www.youtube.com/watch?v=wd2hL3yI_-E" },
};
