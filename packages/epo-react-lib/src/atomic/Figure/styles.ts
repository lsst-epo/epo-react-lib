import styled from "styled-components";
import { BREAK_PHABLET } from "@/styles/abstracts";

export const Figure = styled.figure`
  --figcaption-gap: var(--figure-padding, var(--size-spacing-s, 1rem));

  background-color: var(--figure-background-color);
  padding: var(--figure-padding);

  &[data-layout="horizontal"] {
    &:after {
      content: "";
      visibility: hidden;
      display: block;
      height: 0;
      clear: both;
    }
  }
`;

export const FigCaption = styled.figcaption`
  font-size: var(--size-font-14-14, 0.875rem);
  line-height: 1.428;

  &[data-layout="vertical"] {
    margin-block-start: var(--figcaption-gap);
  }
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
