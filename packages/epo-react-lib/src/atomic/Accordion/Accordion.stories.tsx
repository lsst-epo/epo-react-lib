import { Meta, StoryObj } from "@storybook/react";
import { children } from "@/storybook/utilities/argTypes";

import Accordion from ".";

const meta: Meta<typeof Accordion> = {
  component: Accordion,
  argTypes: {
    summary: {
      description: "Top level display text, always visible.",
      table: {
        type: {
          summary: "string",
        },
      },
    },
    children,
  },
};
export default meta;

export const Primary: StoryObj<typeof Accordion> = {
  args: {
    summary: "Accordion Summary",
    children: "Expandable content",
  },
};
