import styled from "styled-components";
import { ptToEm } from "@/styles/utils";
import { BREAK_PHABLET } from "@/styles/abstracts";

export const Figure = styled.figure`
  --figcaption-gap: calc(var(--figure-padding, 20px) * 0.75);

  background-color: var(--figure-background-color);
  padding: var(--figure-padding);

  &:after {
    content: "";
    visibility: hidden;
    display: block;
    height: 0;
    clear: both;
  }
`;

export const FigCaption = styled.figcaption`
  font-size: ${ptToEm("14pt")};
  line-height: 1.428;
`;

export const FloatWrapper = styled.div`
  @media (min-width: ${BREAK_PHABLET}) {
    @supports (float: inline-start) {
      float: inline-start;
    }

    float: left;
    margin-inline-end: var(--figcaption-gap);
    max-inline-size: 50%;
  }
`;
