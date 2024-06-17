import styled from "styled-components";
import AspectRatio from "@/layout/AspectRatio";

export const Wrapper = styled(AspectRatio)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: var(--black, #000);
`;

export const SelectContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 0 var(--PADDING_SMALL, 20px) var(--PADDING_SMALL, 20px);
  background-color: var(--black, #000);
  width: 100%;
`;

export const SelectLabel = styled.label`
  color: var(--white, #fff);
`;

export const PrismSVG = styled.svg`
  font-size: 42px;
`;

export const WhiteLine = styled.line`
  fill: none;
  stroke: #ffffff;
  stroke-miterlimit: 10;
  stroke-width: 7;
`;

export const Ray = styled.path`
  fill: var(--ray-fill);
`;

export const Arrow = styled.polygon`
  opacity: var(--arrow-opacity, 1);
  fill: var(--arrow-fill);
`;

export const PrismOutline = styled.polygon`
  fill: none;
  stroke: #ffffff;
  stroke-miterlimit: 10;
  stroke-width: 12;
`;

export const Filter = styled.line`
  fill: none;
  stroke-linecap: round;
  stroke-miterlimit: 10;
  stroke-width: 27.27;
`;
