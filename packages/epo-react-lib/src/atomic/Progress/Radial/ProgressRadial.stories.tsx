import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

import ProgressRadial from ".";

const meta: ComponentMeta<typeof ProgressRadial> = {
  component: ProgressRadial,
  decorators: [
    (Story) => (
      <div style={{ width: "10rem", margin: "10rem auto" }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    role: {
      control: "select",
      options: ["meter", "progressbar"],
      description: "Can choose between `meter` and `progressbar` ARIA roles.",
      table: {
        type: {
          summary: "meter | progressbar",
        },
        defaultValue: {
          summary: "meter",
        },
        category: "Accessibility",
      },
    },
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
        defaultValue: {
          summary: 0,
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
        defaultValue: {
          summary: 100,
        },
        category: "Model",
      },
    },
    markerFormatter: {
      control: "none",
      description:
        "Formatting method for the value that will be shown in the marker.",
      table: {
        type: {
          summary: "(value: number) => string",
        },
        category: "Display",
      },
    },
    labelledById: {
      control: "text",
      description: "The ID of an element that labels the progress radial.",
      table: {
        type: {
          summary: "string",
        },
        category: "Accessibility",
      },
    },
    describedById: {
      control: "text",
      description: "The ID of an element that describes the progress radial.",
      table: {
        type: {
          summary: "string",
        },
        category: "Accessibility",
      },
    },
    darkMode: {
      control: "boolean",
      description: "Sets display of radial progress bar for dark mode themes",
      table: {
        type: {
          summary: "boolean",
        },
        defaultValue: {
          summary: false,
        },
        category: "Styling",
      },
    },
  },
};
export default meta;

export const Primary: ComponentStoryObj<typeof ProgressRadial> = {
  args: {
    value: 40,
    markerFormatter: (value) =>
      Intl.NumberFormat("en-US", {
        style: "percent",
      }).format(value / 100),
  },
};
