import { SourceDataset } from "@/types/astro";
import { Meta, StoryObj } from "@storybook/react";

import PointSelector from ".";

const width = 600;
const height = 600;
const data: SourceDataset = {
  name: "All Three Filters",
  id: "ZTF19abvhduf",
  color: "#fed828",
  distance: 124.63102831794073,
  dec: 56.07525,
  velocity: 8573.901530035577,
  ra: 97.139708,
  redshift: 0.029,
  alerts: [],
  sources: [
    {
      id: "01",
      type: "galaxy",
      x: "20%",
      y: "65%",
      color: "#fed828",
    },
    {
      id: "02",
      type: "galaxyFilter",
      x: "49%",
      y: "52.5%",
      color: "#fed828",
    },
    {
      id: "03",
      type: "supernova",
      x: "82.5%",
      y: "36%",
      color: "#fed828",
    },
  ],
};

const meta: Meta<typeof PointSelector> = {
  argTypes: {
    sources: {
      control: "object",
      description: "Array of sources to be rendered as points.",
      table: {
        type: {
          summary: "Source[]",
        },
        category: "Model",
      },
    },
    selectedSource: {
      control: "object",
      description:
        "ID of the currently selected source that will be visible to the user.",
      table: {
        type: {
          summary: "string[]",
        },
        category: "Model",
      },
    },
    onSelectCallback: {
      action: "Selected source",
      description:
        "Returns the ID of the source if clicked, otherwise returns undefined",
      table: {
        type: {
          summary: "(id?: string) => void",
        },
        category: "Function",
      },
    },
  },
  component: PointSelector,
};
export default meta;

export const Primary: StoryObj<typeof PointSelector> = {
  args: {
    sources: data.sources,
    selectedSource: [data.sources[0].id],
    width,
    height,
  },
};
