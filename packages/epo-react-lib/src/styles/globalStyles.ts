import { createGlobalStyle } from "styled-components";
import { baseFont } from "@/styles/mixins/font";
import { fluidScale } from "@/styles/utils";
import base from "@/styles/base";
import { tokens } from "@/styles/abstracts";

const {
  BREAK_MOBILE,
  BREAK_TABLET,
  FONT_SIZE_BASE_DESKTOP,
  FONT_SIZE_BASE_MOBILE,
} = tokens;

const createCSSGlobalStyles = () => {
  return Object.keys(tokens).map((k) => `--${k}: ${tokens[k]};`);
};

const GlobalStyles = createGlobalStyle<{ includeFonts?: boolean }>`
${({ includeFonts = true }) => (includeFonts ? baseFont : "")}
  html {
    font-size: ${fluidScale(
      FONT_SIZE_BASE_DESKTOP,
      FONT_SIZE_BASE_MOBILE,
      BREAK_TABLET,
      BREAK_MOBILE
    )}
  }
  body {
    font-family: var(--FONT_STACK_BASE);
    font-size: 1em;
    line-height: var(--LINE_HEIGHT_BASE);
  }
  :root {
      ${createCSSGlobalStyles()}
  }
  ${base}
`;

export default GlobalStyles;
