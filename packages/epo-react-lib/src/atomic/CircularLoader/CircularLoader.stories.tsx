import { Meta, StoryObj } from "@storybook/react";
import { speeds } from "./styles";

import CircularLoader from ".";

const speedKeys = Object.keys(speeds);
const speedLabels: { [key: string]: string } = {};

speedKeys.forEach((speed) => {
  speedLabels[speed] = `${speed} - (${speeds[speed]})`;
});

const meta: Meta<typeof CircularLoader> = {
  component: CircularLoader,
  argTypes: {
    withOverlay: {
      control: "boolean",
      description:
        "Displays the loader as a full screen with black background over top other content.",
      table: {
        type: { summary: "boolean" },
      },
    },
    isVisible: {
      control: "boolean",
      description: "Determines whether the loader is visible.",
      table: {
        type: { summary: "boolean" },
      },
    },
    speed: {
      options: Object.keys(speeds),
      control: { type: "select", labels: speedLabels },
      description: "Speed that the loader spins.",
      table: {
        type: { summary: "slow | normal | fast" },
        defaultValue: { summary: "normal" },
      },
    },
    description: {
      control: { type: "text" },
      description:
        "Status text shown to screenreaders when the loader becomes active. Used to indicate a loading message.",
      table: {
        type: { summary: "string" },
      },
    },
  },
};

export default meta;

export const Primary: StoryObj<typeof CircularLoader> = {
  args: {
    isVisible: true,
  },
};
