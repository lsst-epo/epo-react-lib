import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

import Switch from ".";

const meta: ComponentMeta<typeof Switch> = {
  component: Switch,
  argTypes: {
    checked: {
      control: "boolean",
      defaultValue: "false",
      description:
        "Sets the checked state of the switch, including `aria-checked`.",
      table: {
        type: {
          summary: "boolean",
        },
        defaultValue: {
          summary: "false",
        },
      },
    },
    onClick: {
      action: "Clicked",
      description:
        "Callback to bind to the click event. Since this button is a native `button` element, all other native browser events are available as well.",
      table: {
        type: {
          summary: "(event: MouseEvent) => void",
        },
      },
    },
  },
};
export default meta;

export const Primary: ComponentStoryObj<typeof Switch> = {};
