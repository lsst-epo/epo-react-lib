import { css } from "styled-components";
import { colorTokens, ptToEm } from "@/styles/globalStyles";

export const cContentRte = css`
  > * + * {
    margin-top: 1rem;
  }

  > *:first-child {
    margin-block-start: 0;
  }

  a:not([class^="c-"]) {
    color: var(--link-color, ${colorTokens["turquoise80"]});
    text-decoration: underline;
  }

  ul {
    padding-left: 1em;
    list-style-type: disc;
  }

  ol {
    padding-left: 1em;
    list-style-type: decimal;
  }

  li {
    padding-left: 0.5em;
  }

  h1 {
    margin-block-start: ${ptToEm("144pt")};
  }

  h2 {
    margin-block-start: ${ptToEm("40pt")};
  }

  h3,
  h4 {
    margin-block-start: ${ptToEm("20pt")};
  }

  figcaption {
    font-size: 18px;
    padding-block-start: 1em;
    padding-block-end: 1em;
  }
`;
