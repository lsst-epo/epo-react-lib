import { token } from "@/styles/utils";
import { StyleToken } from "../abstracts";

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
  `padding-${Edges[edge]}: ${token(
    `PADDING_${size.toUpperCase()}` as StyleToken
  )};`;

export const margin = (edge: BoxEdge, size: SpacingSize) =>
  `margin-${Edges[edge]}: ${token(
    `MARGIN_${size.toUpperCase()}` as StyleToken
  )};`;
