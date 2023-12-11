import { Meta, StoryObj } from "@storybook/react";
import { argTypes } from "@/storybook/utilities";

import OffscreenFilter from ".";

const meta: Meta<typeof OffscreenFilter> = {
  argTypes: {
    url: {
      type: {
        name: "string",
        required: true,
      },
      control: "text",
      description: "URL of the image to be displayed",
      table: {
        type: {
          summary: "string",
        },
      },
    },
    brightness: {
      type: {
        name: "number",
      },
      control: { type: "number", min: 0, step: 0.1 },
      description:
        "Image brightness linear multiplier value. Applied to image via CSS `brightness()` function.",
      table: {
        type: {
          summary: "number",
        },
        category: "Filters",
        defaultValue: {
          summary: 1,
        },
      },
    },
    height: {
      type: {
        name: "number",
      },
      control: { type: "number", min: 0, step: 1 },
      description: "Height of the `canvas` element in `px`",
      table: {
        type: {
          summary: "number",
        },
        defaultValue: {
          summary: 600,
        },
      },
    },
    width: {
      type: {
        name: "number",
      },
      control: { type: "number", min: 0, step: 1 },
      description: "Width of the `canvas` element in `px`",
      table: {
        type: {
          summary: "number",
        },
        defaultValue: {
          summary: 600,
        },
      },
    },
    color: {
      type: {
        name: "string",
      },
      control: "color",
      description:
        "Color filter applied to the image by drawing over top of it with multiply composition.",
      table: {
        type: {
          summary: "string",
        },
        category: "Filters",
        defaultValue: {
          summary: "transparent",
        },
      },
    },
    debug: {
      type: {
        name: "boolean",
      },
      control: "boolean",
      description: "Enable to view what is currently filtered",
      table: {
        type: {
          summary: "boolean",
        },
        defaultValue: {
          summary: false,
        },
      },
    },
  },
  component: OffscreenFilter,
};
export default meta;

export const Primary: StoryObj<typeof OffscreenFilter> = {
  args: {
    height: 300,
    url: "https://rubin.canto.com/direct/image/3jhaht4beh6aha6eiplkb5us6o/MlO1oSfjiMJBT25-VtnRD7B0-EI/original?content-type=image%2Fjpeg&name=Wide_View_Telescope_Mount.jpg",
    color: "#EC1C24",
    debug: true,
  },
};
