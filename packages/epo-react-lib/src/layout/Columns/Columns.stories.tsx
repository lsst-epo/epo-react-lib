import { Meta, StoryObj } from "@storybook/react";
import { children } from "@/storybook/utilities/argTypes";
import MockChildren from "@/storybook/utilities/mocks";

import Columns from ".";

const meta: Meta<typeof Columns> = {
  component: Columns,
  argTypes: {
    children: {
      ...children,
      control: "object",
    },
    $width: {
      description: "Width of column in px",
      control: { type: "number", min: 0 },
      table: {
        type: {
          summary: "number",
        },
      },
    },
    $gap: {
      description: "Gap between columns in px",
      control: { type: "number", min: 0 },
      table: {
        type: {
          summary: "number",
        },
      },
    },
  },
};
export default meta;

export const Primary: StoryObj<typeof Columns> = {
  args: {
    children: MockChildren,
  },
};
