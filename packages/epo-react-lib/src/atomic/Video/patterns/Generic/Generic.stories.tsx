import { Meta, StoryObj } from "@storybook/react";

import Video from ".";

const meta: Meta<typeof Video> = {
  component: Video,
  argTypes: {
    id: {
      control: "text",
      description: "Optional ID to attach to the `video` element",
      table: {
        type: {
          summary: "string",
        },
      },
    },
    height: {
      control: "text",
      description: "Height of the video in pixels",
      table: {
        type: {
          summary: "string | number",
        },
      },
    },
    width: {
      control: "text",
      description: "Width of the video in pixels",
      table: {
        type: {
          summary: "string | number",
        },
      },
    },
    thumbnail: {
      control: "text",
      description:
        "URL for the thumbnail image that will be displayed before the video is played",
      table: {
        type: {
          summary: "string",
        },
      },
    },
    url: {
      type: {
        name: "string",
        required: true,
      },
      control: "text",
      description: "Source URL for the mp4 version of the asset to be played",
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
  args: {
    url: "https://rubin.canto.com/direct/video/388ep66n8t113dduo7r4aoe36u/VQxqhxX3A1EGQMDhkJvJ5OByUI4/play",
    thumbnail:
      "https://rubin.canto.com/direct/video/388ep66n8t113dduo7r4aoe36u/VQxqhxX3A1EGQMDhkJvJ5OByUI4/m800/800",
    width: "1280",
    height: "720",
  },
};
