import styled from "styled-components";

export const ControlsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;
  gap: 0.5em;
  color: var(--white, #fff);
  align-items: center;
  justify-items: center;
  width: fit-content;
  font-size: 0.75em;
  text-align: center;
  z-index: 1;
`;
