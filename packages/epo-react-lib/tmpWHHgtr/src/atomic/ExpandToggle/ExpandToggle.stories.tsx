import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

import ExpandToggle from ".";

const meta: ComponentMeta<typeof ExpandToggle> = {
  component: ExpandToggle,
  argTypes: {
    isOpen: {
      control: "boolean",
      defaultValue: false,
      description:
        "State reflecting whether or not the toggle is intended to be open or closed. Sets `aria-expanded`",
      table: {
        category: "Display",
        type: {
          summary: "boolean",
        },
      },
    },
    isHidden: {
      control: "boolean",
      defaultValue: false,
      description:
        "State reflecting whether or not the toggle is visible. Sets `aria-hidden`",
      table: {
        category: "Display",
        type: {
          summary: "boolean",
        },
      },
    },
    onToggle: {
      action: "Toggled",
      description: "Callback made by the `click` event.",
      table: {
        type: {
          summary: "(event: MouseEvent) => void",
        },
      },
    },
    controlsId: {
      control: "text",
      description:
        "Identifies the element (or elements) whose contents or presence are controlled by the current element. Sets `aria-controls`",
      table: {
        type: {
          summary: "string",
        },
      },
    },
  },
};
export default meta;

export const Primary: ComponentStoryObj<typeof ExpandToggle> = {};
