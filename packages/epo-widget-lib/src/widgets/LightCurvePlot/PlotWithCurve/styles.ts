import styled from "styled-components";
import BaseDM15Display from "./DM15Display";

export const Container = styled.div`
  display: grid;
  gap: var(--widget-padding);
  grid-template-rows: 1fr min-content;
  position: relative;
`;

export const PlotContainer = styled.div`
  display: flex;
  flex-direction: column;
  container-type: inline-size;
  background-color: var(--white, #fff);
  border: 1px solid var(--turquoise55, #009fa1);
  gap: var(--widget-padding);
  padding: var(--widget-padding);
  grid-template-columns: 1fr;
`;

export const PlotTitle = styled.h3`
  margin: 0;
`;

export const DM15Display = styled(BaseDM15Display)`
  background-color: var(--white, #fff);
  margin: 2px 1em;
  padding: 2px;
`;
