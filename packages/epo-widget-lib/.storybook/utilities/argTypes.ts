export const children = {
  control: "text",
  defaultValue: "Rubin Observatory",
  description: "React child",
  table: {
    type: {
      summary: "ReactNode",
    },
  },
};
export const objChildren = {
  ...children,
  control: "object",
};
export const className = {
  control: "text",
  description: "CSS class to attach",
  table: {
    type: {
      summary: "string",
    },
  },
};
