import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: var(--black, #000);
`;

export const SelectContainer = styled.div`
  display: block;
  width: 20ch;
  padding-bottom: var(--PADDING_SMALL, 20px);
  margin: 0 auto;
  background-color: var(--black, #000);
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

export const Ray = styled.path.attrs<{ rayColor: string; isHidden: boolean }>(
  ({ isHidden }) => ({
    style: { opacity: isHidden ? 0 : 1 },
  })
)<{ rayColor: string; isHidden: boolean }>`
  fill: ${({ rayColor }) => rayColor};
`;

export const Arrow = styled.polygon.attrs<{
  arrowColor: string;
  isHidden: boolean;
}>(({ isHidden }) => ({
  style: { opacity: isHidden ? 0 : 1 },
}))<{ arrowColor: string; isHidden: boolean }>`
  fill: ${({ arrowColor }) => arrowColor};
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
