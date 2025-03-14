import { InputType } from "storybook/internal/types";

export const children: InputType = {
  description: "React child",
  table: {
    type: {
      summary: "ReactNode",
    },
  },
};
export const objChildren: InputType = {
  ...children,
};
export const className: InputType = {
  control: "text",
  description: "CSS class to attach",
  table: {
    type: {
      summary: "string",
    },
  },
};
