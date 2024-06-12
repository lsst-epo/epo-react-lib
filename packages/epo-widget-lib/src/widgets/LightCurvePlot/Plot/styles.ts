"use client";
import styled from "styled-components";

export const SliderOuterWrapper = styled.div`
  position: absolute;
  width: calc(100% - calc(var(--label-height) * 2));
  height: calc(100% - calc(var(--label-height) * 2));
  top: var(--label-height);
  left: var(--label-height);
  pointer-events: none;
`;

export const SliderInnerWrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  position: relative;
`;

export const TooltipWrapper = styled.span`
  white-space: nowrap;
`;
