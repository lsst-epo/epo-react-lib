import styled from "styled-components";
import ReactEcharts from "echarts-for-react";

export const Chart = styled(ReactEcharts)`
  width: 100%;
  height: auto;

  &.loaded {
    visibility: visible;
    /* stylelint-disable-next-line declaration-no-important */
    opacity: 1 !important;
  }
`;
