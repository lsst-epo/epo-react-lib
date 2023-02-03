import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

import ColorSwatch from ".";

const meta: ComponentMeta<typeof ColorSwatch> = {
  component: ColorSwatch,
  argTypes: {
    classes: {
      control: "text",
      description:
        "Additional CSS classes to attach to the outer container of the ColorSwatch component.",
      table: {
        category: "Styling",
        type: { summary: "string" },
      },
    },
    content: {
      control: "text",
      description:
        "Screenreader text, will instead use the value of `color` if not provided.",
      table: {
        category: "Accessibility",
        type: { summary: "string" },
      },
    },
    color: {
      control: "color",
      type: { name: "string", required: true },
      description:
        "Set the color to be displayed in the swatch.\n\nCan also be a CSS variable like `var(--turquoise55)`",
      table: {
        category: "Styling",
        type: { summary: "string" },
      },
    },
    large: {
      control: "boolean",
      description: "Makes the swatch 1.5x larger.",
      table: {
        category: "Styling",
        type: { summary: "boolean" },
        defaultValue: { summary: false },
      },
    },
  },
};
export default meta;

export const Primary: ComponentStoryObj<typeof ColorSwatch> = {
  args: {
    color: "#009fa1",
  },
};
