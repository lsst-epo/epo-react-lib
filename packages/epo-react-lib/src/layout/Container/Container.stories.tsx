import { colorTokens } from "@/styles/globalStyles";
import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import { objChildren, className } from "../../../.storybook/utilities";

import Container from ".";
import MockChildren from "../../../.storybook/utilities/MockChildren";

const meta: ComponentMeta<typeof Container> = {
  component: Container,
  argTypes: {
    children: objChildren,
    className,
    bgColor: {
      control: "select",
      options: Object.keys(colorTokens),
      description:
        "Background color for the container, chosen from the available color tokens defined in `GlobalStyles`",
      table: {
        type: { summary: Object.keys(colorTokens).join(" | ") },
        defaultValue: { summary: "white" },
      },
    },
    width: {
      control: "select",
      options: ["narrow", "regular", "wide"],
      description: "Width of the container.",
      table: {
        type: { summary: `"narrow" | "regular" | "wide"` },
        defaultValue: { summary: "narrow" },
      },
    },
    paddingSize: {
      control: "select",
      options: ["small", "medium", "large", "none"],
      description: "Size of padding at the top and bottom of the container",
      table: {
        type: { summary: `"small" | "medium" | "large" | "none"` },
        defaultValue: { summary: "large" },
      },
    },
    elAttributes: {
      control: "object",
      description: "HTML attributes to be passed to the `<section>` element.",
      table: {
        type: { summary: `SectionAttributes` },
      },
    },
  },
};
export default meta;

export const Primary: ComponentStoryObj<typeof Container> = {
  args: {
    children: MockChildren,
  },
};
