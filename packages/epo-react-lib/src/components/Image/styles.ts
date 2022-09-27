import styled from "styled-components";

export const Image = styled.img`
  display: block;
  width: 100%;
  height: auto;

  &[loading] {
    opacity: 0;
    transition: opacity 0.4s 0.1s;
  }
`;
