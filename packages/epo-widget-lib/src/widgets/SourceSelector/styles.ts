import styled from "styled-components";
import Blinker from "@/atomic/Blinker";

export const SVG = styled.svg`
  cursor: pointer;
  position: absolute;
  bottom: 0;
  left: 0;
`;

export const BackgroundBlinker = styled(Blinker)`
  position: absolute;
  width: 100%;
  height: 100%;
`;
