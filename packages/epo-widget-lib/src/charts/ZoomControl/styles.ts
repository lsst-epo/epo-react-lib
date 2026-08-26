"use client";
import styled from "styled-components";
import HorizontalSlider from "@rubin-epo/epo-react-lib/HorizontalSlider";

export const Wrapper = styled.div`
  position: absolute;
  right: 5%;
  bottom: 15%;
  z-index: 2;
  height: 40%;
`;

export const ZoomControl = styled(HorizontalSlider)`
  height: 100%;
`;

export const Label = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip-path: inset(50%);
  white-space: nowrap;
`;
