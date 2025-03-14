import { InputType } from "storybook/internal/types";

export const children: InputType = {
  control: { type: "text" },
  defaultValue: "Rubin Observatory",
  description: "React child",
  table: {
    type: {
      summary: "ReactNode",
    },
  },
};
export const objChildren: InputType = {
  ...children,
  control: { type: "object" },
};
export const className = {
  control: { type: "text" },
  description: "CSS class to attach",
  table: {
    type: {
      summary: "string",
    },
  },
};
