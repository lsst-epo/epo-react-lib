import styled, { css } from "styled-components";
import { token } from "@rubin-epo/epo-react-lib/styles";

export const FilterContainer = styled.div`
  container-type: inline-size;
  container-name: camera-filter;

  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: min-content;
  text-align: center;
  position: relative;
`;

export const FilterTitle = styled.h3`
  margin-block: 1em;
`;

export const FilterTable = styled.table`
  border-collapse: collapse;
  text-align: center;
  margin-inline-start: var(--filter-table-margin-inline-start);
  width: var(--filter-table-width);
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
export const FilterName = styled.th`
  font-size: 120%;
  font-weight: var(--FONT_WEIGHT_NORMAL, 400);
  border: var(--filter-name-border);
  border-width: 1px;

  @container camera-filter (min-width: ${token("BREAK_TABLET")}) {
    border-width: 3px;
  }
`;

export const SelectContainer = styled.div`
  min-width: 20ch;
  width: 50%;
  max-width: 30ch;
  margin-block: 1em;
  justify-self: center;
  text-align: left;
`;

export const SelectLabel = styled.label`
  font-size: 0.75em;
`;

export const SpectrumLabel = styled.text`
  font-size: 2em;

  @container camera-filter (min-width: ${token("BREAK_MOBILE")}) {
    font-size: 1.25em;
  }

  @container camera-filter (min-width: ${token("BREAK_PHABLET_MIN")}) {
    font-size: 0.75em;
  }
`;

export const ColorName = styled.tspan`
  font-size: 2em;

  @container camera-filter (min-width: ${token("BREAK_MOBILE")}) {
    font-size: 1.25em;
  }

  @container camera-filter (min-width: ${token("BREAK_PHABLET_MIN")}) {
    font-size: 0.75em;
  }
`;
export const ColorSpectrum = styled.tspan`
  font-size: 1.5em;

  @container camera-filter (min-width: ${token("BREAK_MOBILE")}) {
    font-size: 1em;
  }

  @container camera-filter (min-width: ${token("BREAK_PHABLET_MIN")}) {
    font-size: 0.5em;
  }
`;
export const ColorSpectrumUnit = styled.tspan`
  font-size: 1.3em;

  @container camera-filter (min-width: ${token("BREAK_MOBILE")}) {
    font-size: 0.8em;
  }

  @container camera-filter (min-width: ${token("BREAK_PHABLET_MIN")}) {
    font-size: 0.4em;
  }
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
