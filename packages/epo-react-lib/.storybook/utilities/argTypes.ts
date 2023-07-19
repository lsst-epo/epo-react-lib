export const children = {
  description: "React child",
  table: {
    type: {
      summary: "ReactNode",
    },
  },
};
export const objChildren = {
  ...children,
  control: "none",
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
