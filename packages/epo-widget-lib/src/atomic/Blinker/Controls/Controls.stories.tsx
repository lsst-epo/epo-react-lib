import { Meta, StoryObj } from "@storybook/react";

import Controls from "./Controls";

const meta: Meta<typeof Controls> = {
  argTypes: {
    playing: {
      type: {
        name: "boolean",
        required: true,
      },
      control: "boolean",
      description: "Sets the play state of the controls.",
      table: {
        type: {
          summary: "boolean",
        },
      },
    },
    handleNext: {
      type: {
        name: "function",
        required: true,
      },
      description: "Callback when the forward button is clicked",
      action: "Next image",
      table: {
        type: {
          summary: "MouseEventHandler<HTMLButtonElement>",
        },
      },
    },
    handlePrevious: {
      type: {
        name: "function",
        required: true,
      },
      description: "Callback when the backward button is clicked",
      action: "Previous image",
    },
    handleStartStop: {
      type: {
        name: "function",
        required: true,
      },
      description: "Callback when the pause/play button is clicked",
      action: "Play state changed",
      table: {
        type: {
          summary: "MouseEventHandler<HTMLButtonElement>",
        },
      },
    },
  },
  component: Controls,
};
export default meta;

export const Primary: StoryObj<typeof Controls> = {
  args: {},
};
