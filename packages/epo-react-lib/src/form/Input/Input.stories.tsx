import { Meta, StoryObj } from "@storybook/react";

import Input from ".";

const InputTypes = [
  "button",
  "checkbox",
  "color",
  "date",
  "datetime-local",
  "email",
  "file",
  "hidden",
  "image",
  "month",
  "number",
  "password",
  "radio",
  "range",
  "reset",
  "search",
  "submit",
  "tel",
  "text",
  "time",
  "url",
  "week",
];

const meta: Meta<typeof Input> = {
  component: Input,
  argTypes: {
    type: {
      control: { type: "select", options: InputTypes },
      description: "HTML `input` element type attribute.",
      table: {
        defaultValue: {
          summary: "'text'",
        },
        type: {
          summary: "string",
        },
      },
    },
  },
};
export default meta;

export const Primary: StoryObj<typeof Input> = {
  args: {},
};
