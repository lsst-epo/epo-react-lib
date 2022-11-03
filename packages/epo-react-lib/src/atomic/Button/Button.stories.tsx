import Icons from "@/svg/icons";
import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

import Button from ".";

const meta: ComponentMeta<typeof Button> = {
  component: Button,
  argTypes: {
    children: {
      control: "text",
      defaultValue: "Rubin Observatory",
      description: "React child",
      table: {
        type: {
          summary: "ReactNode",
        },
      },
    },
    styleAs: {
      control: {
        type: "select",
        options: ["primary", "secondary", "tertiary", "educator"],
      },
      defaultValue: "primary",
      description: "Visual style",
      table: {
        category: "Style",
        defaultValue: {
          summary: "primary",
        },
        type: {
          summary: "primary | secondary | tertiary | educator",
        },
      },
    },
    isInactive: {
      control: "boolean",
      defaultValue: false,
      description:
        "This is a disabled style without disabling the button. Good for a11y - button is visible even if form isn't complete.",
      table: {
        type: {
          summary: "boolean",
        },
      },
    },
    isBlock: {
      control: "boolean",
      defaultValue: false,
      description: "Determines if button is a full width block or not.",
      table: {
        category: "Style",
        type: {
          summary: "boolean",
        },
      },
    },
    icon: {
      control: {
        type: "select",
        options: Object.keys(Icons),
      },
      description: "SVG icons.",
      table: {
        category: "Icon",
        type: {
          summary: "string",
        },
      },
    },
    iconSize: {
      control: "number",
      description: "Icon size in pixels.",
      table: {
        category: "Icon",
        type: {
          summary: "number",
        },
      },
    },
  },
};
export default meta;

export const Primary: ComponentStoryObj<typeof Button> = {};

export const Secondary: ComponentStoryObj<typeof Button> = {
  args: { styleAs: "secondary" },
};
export const Tertiary: ComponentStoryObj<typeof Button> = {
  args: { styleAs: "tertiary" },
};
export const Educator: ComponentStoryObj<typeof Button> = {
  args: { styleAs: "educator" },
};
