import { className } from "@/storybook/utilities/argTypes";
import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

import Points from ".";
import { AstroDataset } from "../GalaxySelector";
import { getLinearScale } from "../utilities";

const width = 600;
const height = 600;
const domain = [0, 1200];
const data: AstroDataset = {
  name: "All Three Filters",
  id: "ZTF19abvhduf",
  color: "#fed828",
  distance: 124.63102831794073,
  dec: 56.07525,
  velocity: 8573.901530035577,
  ra: 97.139708,
  redshift: 0.029,
  objects: [
    {
      object_id: "01",
      id: "galaxy",
      ra: 120,
      dec: 780,
      color: "#fed828",
    },
    {
      object_id: "02",
      id: "galaxyFilter",
      ra: 590,
      dec: 630,
      color: "#fed828",
    },
    {
      object_id: "03",
      id: "supernova",
      ra: 990,
      dec: 440,
      color: "#fed828",
    },
  ],
};

const meta: ComponentMeta<typeof Points> = {
  argTypes: {
    className: {
      ...className,
      table: {
        ...className.table,
        category: "Styling",
      },
    },
    data: {
      control: "object",
      description: "Array of objects to be rendered as points.",
      table: {
        type: {
          summary: "AstroObject[]",
        },
        defaultValue: {
          summary: "[]",
        },
        category: "Model",
      },
    },
    activeId: {
      control: "select",
      options: ["supernova", "galaxy", "galaxyFilter", "none"],
      description:
        "ID of the currently active point that will be given active styling",
      table: {
        type: {
          summary: "supernova | galaxy | galaxyFilter",
        },
        category: "Model",
      },
    },
    selectedData: {
      control: "object",
      description:
        "ID of the currently selected point that will be visible to the user.",
      table: {
        type: {
          summary: "AstroObject[]",
        },
        category: "Model",
      },
    },
    xValueAccessor: {
      type: {
        name: "string",
        required: true,
      },
      control: "select",
      options: ["ra", "dec"],
      description: "Key to access the x value of data points.",
      table: {
        type: {
          summary: "ra | dec",
        },
        category: "Placement",
      },
    },
    yValueAccessor: {
      type: {
        name: "string",
        required: true,
      },
      control: "select",
      options: ["ra", "dec"],
      description: "Key to access the y value of data points.",
      table: {
        type: {
          summary: "ra | dec",
        },
        category: "Placement",
      },
    },
    xScale: {
      type: {
        name: "function",
        required: true,
      },
      description:
        "Scaling function to place points on the appropriate x value given the data range.",
      table: {
        type: {
          summary: "(value: number) => number",
        },
        category: "Placement",
      },
    },
    yScale: {
      type: {
        name: "function",
        required: true,
      },
      description:
        "Scaling function to place points on the appropriate y value given the data range.",
      table: {
        type: {
          summary: "(value: number) => number",
        },
        category: "Placement",
      },
    },
    color: {
      control: "color",
      description:
        "Override color to be used in place of data points defined colors.",
      table: {
        type: {
          summary: "string",
        },
        category: "Styling",
      },
    },
  },
  component: Points,
  decorators: [
    (Story) => (
      <svg
        viewBox={`0 0 ${width} ${height}`}
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

const xScale = getLinearScale(domain, [0, width]);
const yScale = getLinearScale(domain, [height, 0]);

export const Primary: ComponentStoryObj<typeof Points> = {
  args: {
    data: data.objects,
    selectedData: [data.objects[0]],
    xScale,
    yScale,
    xValueAccessor: "ra",
    yValueAccessor: "dec",
  },
};
