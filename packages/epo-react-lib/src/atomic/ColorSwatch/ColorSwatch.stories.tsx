import { Meta, StoryObj } from "@storybook/react";

import ColorSwatch from ".";

const meta: Meta<typeof ColorSwatch> = {
  component: ColorSwatch,
  argTypes: {
    className: {
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
    size: {
      control: "select",
      options: ["small", "regular", "large"],
      description: "Sets the size of the swatch",
      table: {
        category: "Styling",
        type: { summary: "small | regular | large" },
        defaultValue: { summary: "regular" },
      },
    },
  },
};
export default meta;

export const Primary: StoryObj<typeof ColorSwatch> = {
  args: {
    color: "#009fa1",
  },
};
