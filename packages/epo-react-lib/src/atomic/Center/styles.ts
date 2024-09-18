"use client";
import styled from "styled-components";

export const Center = styled.div`
  box-sizing: content-box;
  margin-inline: auto;
  max-inline-size: var(--size-width-center);
  padding-inline: var(--size-gutters);

  &[data-center-text="true"] {
    text-align: center;
  }

  &[data-intrinsic="true"] {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
