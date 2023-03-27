import { Band } from "@/types/astro";
import styled, { css } from "styled-components";

export const FilterContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: min-content;
  text-align: center;
  position: relative;
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
  line-height: 1.2;
  font-size: 80%;
`;
export const Wavelength = styled.span`
  font-size: 80%;
`;
export const FilterName = styled.th<{ band?: Band; isCondensed: boolean }>`
  font-size: 120%;
  font-weight: var(--FONT_WEIGHT_NORMAL, 400);

  ${({ band, isCondensed }) => css`
    border: ${band ? "solid #b2b2b2" : "none"};
    border-width: ${isCondensed ? "1px" : "3px"};
  `};
`;

export const SelectContainer = styled.div`
  min-width: 20ch;
  width: 50%;
  max-width: 30ch;
  margin-block-start: 1em;
  justify-self: center;
  text-align: left;
`;

export const SelectLabel = styled.label`
  font-size: 0.75em;
`;

export const SpectrumLabel = styled.text`
  font-size: 0.75em;
`;

export const ColorName = styled.tspan`
  font-size: 0.75em;
`;
export const ColorSpectrum = styled.tspan`
  font-size: 0.5em;
`;
export const ColorSpectrumUnit = styled.tspan`
  font-size: 0.4em;
`;

export const CondensedRangeRow = styled.ul`
  display: flex;
  justify-content: space-between;
  line-height: 1.2;
  font-size: 80%;
  margin: 0;
  padding: 0;
  list-style-type: none;
`;

export const CondensedRange = styled.li`
  list-style-type: none;
  margin: 0;
  padding: 0;

  &:before {
    content: "\200B";
  }
`;
