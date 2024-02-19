import styled from "styled-components";
import BaseDM15Display from "../DM15Display";

export const Container = styled.div`
  --light-curve-padding: var(--PADDING_SMALL, 20px);

  display: grid;
  gap: var(--light-curve-padding);
  grid-template-rows: 1fr min-content;
  grid-template-columns: 1fr;
`;

export const PlotContainer = styled.div`
  display: flex;
  flex-direction: column;
  container-type: inline-size;
  background-color: var(--white, #fff);
  border: 1px solid var(--turquoise55, #009fa1);
  gap: var(--light-curve-padding);
  padding: var(--light-curve-padding);
`;

export const PlotTitle = styled.h3`
  margin: 0;
`;

export const DM15Display = styled(BaseDM15Display)`
  background-color: var(--white, #fff);
  margin: 2px 1em;
  padding: 2px;
`;

export const Controls = styled.form`
  display: flex;
  flex-direction: column;
  gap: var(--light-curve-padding);
`;

export const ControlLabel = styled.span`
  display: block;
  margin-block-end: var(--light-curve-padding);
`;
