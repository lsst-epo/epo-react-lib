import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

import TimeStep from ".";

const meta: ComponentMeta<typeof TimeStep> = {
  argTypes: {
    year: {
      control: { type: "number", min: 0 },
      description: "Number of years in the current step, will be shown first.",
      table: {
        type: {
          summary: "number",
        },
      },
    },
    day: {
      control: { type: "number", min: 0 },
      description: "Number of days in the current step, will be shown second.",
      table: {
        type: {
          summary: "number",
        },
      },
    },
    hour: {
      control: { type: "number", min: 0 },
      description: "Number of hours in the current step, will be shown third.",
      table: {
        type: {
          summary: "number",
        },
      },
    },
    minute: {
      control: { type: "number", min: 0 },
      description:
        "Number of minutes in the current step, will be shown fourth.",
      table: {
        type: {
          summary: "number",
        },
      },
    },
    second: {
      control: { type: "number", min: 0 },
      description: "Number of seconds in the current step, will be shown last.",
      table: {
        type: {
          summary: "number",
        },
      },
    },
  },
  component: TimeStep,
};
export default meta;

export const Primary: ComponentStoryObj<typeof TimeStep> = {
  args: {
    year: 2,
    day: 158,
  },
};
