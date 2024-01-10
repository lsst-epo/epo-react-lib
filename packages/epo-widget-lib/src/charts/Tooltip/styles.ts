import styled from "styled-components";

export const Tooltip = styled.g`
  cursor: default;
`;

export const TooltipBackground = styled.rect`
  fill: #dce0e3;
`;

export const TooltipText = styled.text`
  font-size: 12px;
  color: var(--black, #000);
  dominant-baseline: central;
  text-anchor: middle;
  fill: var(--black, #000);
`;

export const TooltipArrow = styled.polygon`
  fill: #dce0e3;
`;
