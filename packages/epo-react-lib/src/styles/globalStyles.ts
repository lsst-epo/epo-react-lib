"use client";

import { createGlobalStyle } from "styled-components";
import kebabCase from "lodash/kebabCase";
import * as rubinTokens from "@rubin-epo/epo-style-dictionary/rubin";
import { baseFont } from "@/styles/mixins/font";
import { fluidScale } from "@/styles/utils";
import base from "@/styles/base";
import { tokens } from "@/styles/abstracts";
import { calculateClamp, calculateSpaceScale } from "utopia-core";

const { FONT_SIZE_BASE_DESKTOP, FONT_SIZE_BASE_MOBILE } = tokens;

const rubinTokensAsCssVariables = Object.entries(rubinTokens).reduce<
  Record<string, string | number>
>((prev, [key, value]) => {
  const newKey = kebabCase(key);

  prev[newKey] = value;

  return prev;
}, {});

const createCSSGlobalStyles = () => {
  return Object.entries({ ...tokens, ...rubinTokensAsCssVariables }).map(
    ([k, v]) => `--${k}: ${v};`
  );
};

const createCSSGlobalSizes = () => {
  return Object.values(
    calculateSpaceScale({
      minSize: parseInt(FONT_SIZE_BASE_MOBILE),
      maxSize: parseInt(FONT_SIZE_BASE_DESKTOP),
      minWidth: 320,
      maxWidth: 1240,
      positiveSteps: [1.5, 2, 3, 4, 6, 8],
      negativeSteps: [0.75, 0.5, 0.25],
      customSizes: ["s-l"],
      relativeTo: "viewport-width",
    })
  )
    .flat()
    .map(({ label, clamp }) => {
      return `--size-spacing-${label}: ${clamp};`;
    });
};

const GlobalStyles = createGlobalStyle<{ includeFonts?: boolean }>`
${({ includeFonts = true }) => (includeFonts ? baseFont : "")}
  html {
    font-size: ${calculateClamp({
      minSize: parseInt(FONT_SIZE_BASE_MOBILE),
      maxSize: parseInt(FONT_SIZE_BASE_DESKTOP),
      minWidth: 320,
      maxWidth: 1240,
    })};
  }  
  body {  
    font-family: var(--FONT_STACK_BASE);
    line-height: var(--LINE_HEIGHT_BASE);
  }
  :root {
      ${createCSSGlobalStyles()}
      ${createCSSGlobalSizes()}
  }
  ${base}
`;

export default GlobalStyles;
