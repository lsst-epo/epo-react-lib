import { Meta, StoryObj } from "@storybook/react";

import ProgressBar from ".";

const meta: Meta<typeof ProgressBar> = {
  component: ProgressBar,
  argTypes: {
    value: {
      control: "number",
      description:
        "The current value of the progress bar, will be bound to `aria-valuenow`. Must be a number or will be displayed as 'indeterminate' and must be between the `min` and `max` values or else it will be bounded to them automatically.",
      table: {
        type: {
          summary: "number",
        },
        category: "Model",
      },
    },
    min: {
      control: "number",
      description:
        "The minimum value of the progress bar, will be bound to `aria-valuemin`.",
      table: {
        type: {
          summary: "number",
        },
        category: "Model",
      },
    },
    max: {
      control: "number",
      description:
        "The maximum value of the progress bar, will be bound to `aria-valuemax`.",
      table: {
        type: {
          summary: "number",
        },
        category: "Model",
      },
    },
    markerFormatter: {
      description:
        "Formatting method for the value that will be shown in the marker.",
      table: {
        type: {
          summary: "(value: number) => string",
        },
        category: "Display",
      },
    },
    markerConfig: {
      control: "object",
      description: "Allows override of the marker display.",
      table: {
        type: {
          summary: `{$active?: boolean; $background?: string; $hoverable?: boolean; $filled?: boolean;}`,
        },
        defaultValue: {
          summary: `{$active: true, $hoverable: true}`,
        },
        category: "Display",
      },
    },
    labelledById: {
      control: "text",
      description: "The ID of an element that labels the progress bar.",
      table: {
        type: {
          summary: "string",
        },
        category: "Accessibility",
      },
    },
    describedById: {
      control: "text",
      description: "The ID of an element that describes the progress bar.",
      table: {
        type: {
          summary: "string",
        },
        category: "Accessibility",
      },
    },
  },
};
export default meta;

export const Primary: StoryObj<typeof ProgressBar> = {
  args: {
    value: 40,
    markerFormatter: (value) =>
      Intl.NumberFormat("en-US", {
        style: "percent",
      }).format(value / 100),
  },
};
