import { PADDING_SMALL } from "@rubin-epo/epo-react-lib/dist/styles/globalStyles";
import styled from "styled-components";

export const Wrapper = styled.div`
  font-size: 42px;
  background-color: #000000;
`;

export const SelectContainer = styled.div`
  display: block;
  width: 150px;
  padding-bottom: ${PADDING_SMALL};
  margin: 0 auto;
  background-color: #000000;
`;

export const WhiteLine = styled.line`
  fill: none;
  stroke: #ffffff;
  stroke-miterlimit: 10;
  stroke-width: 7;
`;
