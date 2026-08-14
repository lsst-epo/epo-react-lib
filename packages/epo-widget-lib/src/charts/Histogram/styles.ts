"use client";
import styled from "styled-components";
import { default as BaseTooltip } from "@/charts/Tooltip";
import { default as BaseChart } from "@/charts/Base";
import { default as BaseBars } from "@/charts/Bars";

export const Base = styled(BaseChart)`
`;

export const Bars = styled(BaseBars)`
  &:hover {
    fill: var(--bar-hover, var(--turquoise55));
  }
  &[data-selected="true"] {
    fill: var(--bar-selected, var(--turquoise90));
  }
`;

export const YLabel = styled.text`
  dominant-baseline: text-before-edge;
  text-anchor: end;
`;

export const Tooltip = styled(BaseTooltip)`
  max-inline-size: var(--max-tooltip-width, 200px);
  padding: 6px;
`;
