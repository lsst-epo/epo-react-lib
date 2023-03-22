import { Band } from "@/types/astro";
import styled, { css } from "styled-components";

export const FilterContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: min-content;
  text-align: center;
`;

export const FilterTable = styled.table<{ range: number; offset: number }>`
  border-collapse: collapse;
  text-align: center;
  ${({ range, offset }) => css`
    margin-left: ${offset.toFixed(2)}%;
    width: ${range.toFixed(2)}%;
  `}
`;
export const FilterRanges = styled.tbody`
  display: table-header-group;
`;
export const FilterNames = styled.thead`
  display: table-row-group;
`;
export const FilterRange = styled.td`
  font-size: 80%;
`;
export const Wavelength = styled.span`
  font-size: 80%;
`;
export const FilterName = styled.th<{ band?: Band }>`
  border: ${({ band }) => (band ? "3px solid #b2b2b2" : "none")};
  font-size: 120%;
  font-weight: var(--FONT_WEIGHT_NORMAL, 400);
`;

export const ElectromagneticSpectrum = styled.svg`
  width: 100%;
`;

export const SelectContainer = styled.div`
  min-width: 20ch;
  width: 50%;
  margin-block-start: 4em;
  justify-self: center;
`;
