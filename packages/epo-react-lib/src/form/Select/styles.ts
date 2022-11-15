import styled from "styled-components";
import IconComposer from "@/svg/IconComposer";

export const Wrapper = styled.div`
  position: relative;
`;

export const Select = styled.select`
  width: 100%;
  padding-inline-start: 20px;
  padding-inline-end: 20px;
  padding-block-start: calc(var(--Input-padding-block, 18px) - 1px);
  padding-block-end: var(--Input-padding-block, 18px);
  appearance: none;
  border: 1px solid var(--turquoise70);
  border-radius: 6px;
  font: inherit;
  font-size: 20px;
`;

export const Icon = styled(IconComposer)`
  position: absolute;
  inset-block-start: 50%;
  inset-inline-end: 20px;
  transform: translateY(-50%);
  pointer-events: none;
`;
