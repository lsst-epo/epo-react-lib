"use client";
import styled from "styled-components";

/** Padding between the label's text and the edge of its box */
const LABEL_OFFSET = 5;

/**
 * Sized by its own content rather than by the zero-width `foreignObject` it
 * sits in, then shifted off the line's midpoint into place.
 */
export const Label = styled.div`
  width: max-content;
  padding: ${LABEL_OFFSET}px;
  background: var(--white, #fff);
  border: 2px solid var(--black, #000);

  &[data-placement="on"] {
    transform: translate(-50%, -50%);
  }

  &[data-placement="beside"] {
    transform: translate(${LABEL_OFFSET}px, -50%);
  }
`;
