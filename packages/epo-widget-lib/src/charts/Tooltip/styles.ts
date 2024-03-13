import styled from "styled-components";
import ForeignObject from "../ForeignObject";

export const TooltipContainer = styled(ForeignObject)`
  overflow: visible;
`;

export const Tooltip = styled.div`
  background-color: #dce0e3;
  border-radius: 4px;
  font-size: 0.5em;
  line-height: 1;
  padding: 2px 4px;
  text-align: center;
  position: fixed;
`;

export const Arrow = styled.div`
  width: 0;
  height: 0;
  border-left: var(--arrow-width, 6px) solid transparent;
  border-right: var(--arrow-width, 6px) solid transparent;

  border-top: var(--arrow-width, 6px) solid #dce0e3;

  position: absolute;
  left: 0;
`;
