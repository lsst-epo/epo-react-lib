import Icons from "@/svg/icons";
import { Meta, StoryObj } from "@storybook/react";
import { children } from "@/storybook/utilities/argTypes";

import Button from ".";

const meta: Meta<typeof Button> = {
  component: Button,
  argTypes: {
    children,
    styleAs: {
      control: {
        type: "select",
      },
      options: ["primary", "secondary", "tertiary", "educator"],
      description: "Visual style",
      table: {
        category: "Styling",
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
      description:
        "This is a disabled style without disabling the button. Good for a11y - button is visible even if form isn't complete.",
      table: {
        category: "Function",
        type: {
          summary: "boolean",
        },
      },
    },
    onClick: {
      action: "Clicked",
      description:
        "Callback to bind to the click event. Since this button is a native `button` element, all other native browser events are available as well.",
      table: {
        category: "Function",
        type: {
          summary: "(event: MouseEvent) => void",
        },
      },
    },
    isBlock: {
      control: "boolean",
      description: "Determines if button is a full width block or not.",
      table: {
        category: "Styling",
        type: {
          summary: "boolean",
        },
      },
    },
    icon: {
      control: {
        type: "select",
      },
      options: Object.keys(Icons),
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

export const Primary: StoryObj<typeof Button> = {
  args: { children: "Rubin Observatory" },
};

export const Secondary: StoryObj<typeof Button> = {
  args: { ...Primary.args, styleAs: "secondary" },
};
export const Tertiary: StoryObj<typeof Button> = {
  args: { ...Primary.args, styleAs: "tertiary" },
};
export const Educator: StoryObj<typeof Button> = {
  args: { ...Primary.args, styleAs: "educator" },
};
export const WithIcon: StoryObj<typeof Button> = {
  args: { icon: "Account", children: "With Icon" },
};
