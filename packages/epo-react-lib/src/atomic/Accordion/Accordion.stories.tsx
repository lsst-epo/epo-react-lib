import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

import Accordion from ".";

const meta: ComponentMeta<typeof Accordion> = {
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
    children: {
      description: "Content to be shown or hidden by accordion.",
      table: {
        type: {
          summary: "ReactNode",
        },
      },
    },
  },
};
export default meta;

export const Default: ComponentStoryObj<typeof Accordion> = {
  args: {
    summary: "Accordion Summary",
    children: "Expandable content",
  },
};
