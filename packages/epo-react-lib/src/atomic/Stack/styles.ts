"use client";
import styled from "styled-components";

export const Stack = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  &[data-recursive="true"] {
    * {
      margin-block: 0;
    }

    * + * {
      margin-block-start: var(--size-spacing-stack, 1.5em);
    }
  }

  &[data-recursive="false"] {
    > * {
      margin-block: 0;
    }

    > * + * {
      margin-block-start: var(--size-spacing-stack, 1.5em);
    }
  }
`;
