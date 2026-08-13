"use client";
import styled from "styled-components";

/** The four arrows sit around an empty middle cell, over the selected point */
export const Grid = styled.div`
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: repeat(3, 1fr);
  width: 100%;
  height: 100%;
`;

export const Arrow = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  margin: 0;
  cursor: pointer;
  background: var(--white, #fff);
  border: 1px solid var(--neutral70, #555);
  touch-action: none;

  &[data-direction="ArrowUp"] {
    grid-area: 1 / 2;
    border-bottom-width: 0;
  }

  &[data-direction="ArrowRight"] {
    grid-area: 2 / 3;
    border-left-width: 0;
  }

  &[data-direction="ArrowDown"] {
    grid-area: 3 / 2;
    border-top-width: 0;
  }

  &[data-direction="ArrowLeft"] {
    grid-area: 2 / 1;
    border-right-width: 0;
  }
`;

export const ArrowIcon = styled.svg`
  width: 50%;
  height: 50%;
  fill: none;
  stroke: var(--neutral95, #1f2121);
  stroke-width: 2;
`;
