import { fluidScale } from "@/styles/utils";
import styled from "styled-components";

const toggleWidth = "1.333em";
const togglePadding = `calc(${toggleWidth} + 1em)`;

export const Summary = styled.summary`
  position: relative;
  display: flex;
  align-self: baseline;
  padding-left: ${togglePadding};
  font-size: ${fluidScale("24px", "18px")};
  cursor: pointer;

  &::-webkit-details-marker {
    display: none;
  }

  &:focus {
    outline: none;
  }

  &:hover,
  &:focus-visible {
    --Icon-background-color: var(--turquoise85);
  }
`;

export const Icon = styled.span`
  &::before {
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    width: ${toggleWidth};
    height: ${toggleWidth};
    font-size: 1.25em;
    font-weight: 800;
    line-height: ${toggleWidth};
    color: var(--white);
    content: "+";
    background-color: var(--Icon-background-color, var(--turquoise85));
    transition: background-color 0.2s;
    place-content: center;

    details[open] & {
      content: "–";
      line-height: 1.15em;
    }
  }
`;

export const Details = styled.div`
  padding-left: ${togglePadding};
  margin-top: 1.5em;
`;
