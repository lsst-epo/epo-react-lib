"use client";
import styled from "styled-components";

export const Mark = styled.span`
  box-sizing: border-box;
  border: 1px solid
    var(
      --color-border-mark,
      var(--color-background-slider, var(--neutral60, #6a6e6e))
    );
  background-color: var(--color-background-mark, var(--white));
  width: var(--size-height-thumb, 14px);
  height: var(--size-height-thumb, 14px);
  text-align: center;
  border-radius: 50%;
`;
