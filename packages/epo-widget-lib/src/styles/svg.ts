import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  min-width: var(--BREAK_MOBILE_MIN, 280px);

  @media print {
    width: var(--BREAK_MOBILE_MIN, 280px);
  }
`;
