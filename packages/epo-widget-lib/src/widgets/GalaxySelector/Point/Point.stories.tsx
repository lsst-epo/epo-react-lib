import { className } from "@/storybook/utilities/argTypes";
import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

import Point from ".";

const meta: ComponentMeta<typeof Point> = {
  argTypes: {
    id: {
      control: "text",
      description: "Determines the radius of the point",
      table: {
        type: {
          summary: "supernova | galaxy | galaxyFilter",
        },
        category: "Display",
      },
    },
    className: {
      ...className,
      table: {
        ...className.table,
        category: "Styling",
      },
    },
    isSelected: {
      control: "boolean",
      description: "Determines if the point has been selected and is visible",
      table: {
        type: {
          summary: "boolean",
        },
        category: "Display",
      },
    },
    isActive: {
      control: "boolean",
      description: "Determines if the point is active and has a larger radius",
      table: {
        type: {
          summary: "boolean",
        },
        category: "Display",
      },
    },
    x: {
      control: "number",
      description: "X axis placement of the point",
      table: {
        type: {
          summary: "number",
        },
        category: "Display",
      },
    },
    y: {
      control: "number",
      description: "Y axis placement of the point",
      table: {
        type: {
          summary: "number",
        },
        category: "Display",
      },
    },
    radius: {
      control: "number",
      description:
        "Radius of the point that will override any ID-based default radii.",
      table: {
        type: {
          summary: "number",
        },
        category: "Display",
      },
    },
    color: {
      control: "color",
      description: "Color of the point stroke.",
      table: {
        type: {
          summary: "string",
        },
        category: "Styling",
      },
    },
  },
  component: Point,
  decorators: [
    (Story) => (
      <svg
        viewBox="0 0 100 100"
        style={{
          display: "inline-block",
          width: "100%",
          height: "auto",
        }}
      >
        <Story />
      </svg>
    ),
  ],
};
export default meta;

export const Primary: ComponentStoryObj<typeof Point> = {
  args: { color: "#00bebf", x: 50, y: 50, isSelected: true },
};
