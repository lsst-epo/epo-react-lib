import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import Icons from "../icons";

import IconComposer from ".";

const meta: ComponentMeta<typeof IconComposer> = {
  component: IconComposer,
  argTypes: {
    icon: { control: { type: "select", options: Object.keys(Icons) } },
    fill: { control: "color" },
    stroke: { control: "color" },
    size: { control: "number" },
  },
};
export default meta;

export const Example: ComponentStoryObj<typeof IconComposer> = {
  args: {
    icon: "Search",
  },
};
