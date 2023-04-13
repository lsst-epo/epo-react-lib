import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import { className } from "@/storybook/utilities/argTypes";
import Icons from "../icons";

import IconComposer from ".";

const meta: ComponentMeta<typeof IconComposer> = {
  component: IconComposer,
  argTypes: {
    icon: {
      control: { type: "select", options: Object.keys(Icons) },
      description: "Name of the icon to be rendered",
      table: { category: "Model" },
    },
    fill: {
      control: "color",
      description: "Color to apply to SVG fill",
      table: { category: "Styling" },
    },
    stroke: {
      control: "color",
      description: "Color to apply to SVG strokes",
      table: { category: "Styling" },
    },
    size: {
      control: "text",
      description: "Size to render the SVG icon",
      table: { type: { summary: "string | number" }, category: "Styling" },
    },
    className: { ...className, table: { category: "Styling" } },
    svgProps: {
      control: "object",
      description: "Additional props to pass to the SVG",
      table: { category: "Model" },
    },
    customIcons: {
      control: "object",
      description: "Custom SVG icons that will override the included iconset",
      table: {
        type: { summary: "{[key: string]: ComponentType<SVGProps>}" },
        category: "Model",
      },
    },
  },
};
export default meta;

export const Example: ComponentStoryObj<typeof IconComposer> = {
  args: {
    icon: "Search",
  },
};
