import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

import Accordion from ".";

const meta: ComponentMeta<typeof Accordion> = {
  component: Accordion,
};
export default meta;

export const Default: ComponentStoryObj<typeof Accordion> = {
  args: {
    summary: "Accordion Summary",
    children: "Expandable content",
  },
};
