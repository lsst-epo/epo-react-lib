import { Meta, StoryObj } from "@storybook/react";
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
  <Image key="first" {...{ image }} />,
  <Image key="second" {...{ image }} />,
  <Image key="third" {...{ image }} />,
  <Image key="fourth" {...{ image }} />,
];

const meta: Meta<typeof Grid> = {
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
      },
    },
  },
};
export default meta;

export const Primary: StoryObj<typeof Grid> = {
  args: {
    children: Children,
  },
};

export const WithFeature: StoryObj<typeof Grid> = {
  args: {
    children: Children,
    showFeature: true,
  },
};
