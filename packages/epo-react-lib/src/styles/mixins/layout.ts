import { tokens } from "@/styles/globalStyles";

type BoxEdge = "top" | "right" | "bottom" | "left";
export type SpacingSize = "large" | "medium" | "small";

const Edges: {
  [key in BoxEdge]: string;
} = {
  top: "block-start",
  right: "inline-end",
  bottom: "block-end",
  left: "inline-start",
};

export const padding = (edge: BoxEdge, size: SpacingSize) =>
  `padding-${Edges[edge]}: ${tokens[`PADDING_${size.toUpperCase()}`]};`;

export const margin = (edge: BoxEdge, size: SpacingSize) =>
  `margin-${Edges[edge]}: ${tokens[`MARGIN_${size.toUpperCase()}`]};`;
