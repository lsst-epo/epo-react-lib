import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import { children } from "@/storybook/utilities/argTypes";

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
    children,
  },
};
export default meta;

export const Primary: ComponentStoryObj<typeof Accordion> = {
  args: {
    summary: "Accordion Summary",
    children: "Expandable content",
  },
};
