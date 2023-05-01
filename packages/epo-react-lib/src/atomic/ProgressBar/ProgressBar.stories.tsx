import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

import ProgressBar from ".";

const meta: ComponentMeta<typeof ProgressBar> = {
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
    displayValue: {
      control: "text",
      description:
        "An alternative display-only value that can be used to show a different value than the model, for example if this progress bar is part of a group of progress bars that show a cumulative progress.",
      table: {
        type: {
          summary: "string",
        },
        category: "Display",
      },
    },
    isActive: {
      control: "boolean",
      description:
        "Determines if the progress bar is currently active, will make the progress marker hoverable if active. If inactive, the progress marker will be filled.",
      table: {
        type: {
          summary: "boolean",
        },
        defaultValue: {
          summary: true,
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

export const Primary: ComponentStoryObj<typeof ProgressBar> = {
  args: { value: 40 },
};
