import styled from "styled-components";

export const Container = styled.div`
  --light-curve-padding: var(--PADDING_SMALL, 20px);

  container-type: inline-size;
  display: grid;
  gap: var(--light-curve-padding);
  grid-template-rows: 1fr min-content min-content min-content;
  grid-template-columns: 1fr;
`;

export const PlotContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--white, #fff);
  border: 1px solid var(--turquoise55, #009fa1);
  gap: var(--light-curve-padding);
  padding: var(--light-curve-padding);
`;

export const PlotTitle = styled.h3`
  margin: 0;
`;
