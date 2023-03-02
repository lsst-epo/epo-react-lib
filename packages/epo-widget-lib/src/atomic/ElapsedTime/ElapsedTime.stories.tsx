import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

import ElapsedTime from ".";

const meta: ComponentMeta<typeof ElapsedTime> = {
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
  component: ElapsedTime,
};
export default meta;

export const Primary: ComponentStoryObj<typeof ElapsedTime> = {
  args: {
    year: 2,
    day: 158,
  },
};
