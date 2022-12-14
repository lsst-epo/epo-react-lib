import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import { objChildren } from "@/storybook/utilities/argTypes";
import { getGradientImage } from "@/storybook/utilities/helpers";

import Grid from ".";
import Image from "@/atomic/Image";

const image = {
  altText: "A placeholder image",
  url: getGradientImage(200, 200),
  width: 200,
  height: 200,
};

const Children = [
  <Image {...{ image }} />,
  <Image {...{ image }} />,
  <Image {...{ image }} />,
  <Image {...{ image }} />,
];

const meta: ComponentMeta<typeof Grid> = {
  component: Grid,
  argTypes: {
    children: objChildren,
    showFeature: {
      type: "boolean",
      control: "boolean",
      description:
        "Highlights the first item in the grid by displaying it across the top row.",
      table: {
        type: {
          summary: "boolean",
        },
        defaultValue: { summary: false },
      },
    },
    columns: {
      type: "number",
      control: {
        type: "number",
        min: 1,
      },
      description: "Number of columns in grid.",
      table: {
        type: {
          summary: "number",
        },
        defaultValue: { summary: 3 },
      },
    },
    tablet: {
      type: "number",
      control: {
        type: "number",
        min: 1,
      },
      description: "Number of columns in grid to display at tablet sizing.",
      table: {
        type: {
          summary: "number",
        },
        defaultValue: { summary: 1 },
      },
    },
  },
};
export default meta;

export const Primary: ComponentStoryObj<typeof Grid> = {
  args: {
    children: Children,
  },
};

export const WithFeature: ComponentStoryObj<typeof Grid> = {
  args: {
    children: Children,
    showFeature: true,
  },
};
