"use client";
import styled from "styled-components";
import PlotWrapper from "@/atomic/PlotWrapper";
import BaseLoader from "@/atomic/Loader";
import defaults from "./defaults";

export const Title = styled.h2`
  margin-block-end: 20px;
`;

export const Plot = styled(PlotWrapper)`
  --active-point-scale: ${defaults.activePointScale};
`;

export const Loader = styled(BaseLoader)`
  position: absolute;
  inset: 0;
  z-index: 2;
`;
