import styled from "styled-components";
import {
  containerNarrow,
  containerRegular,
  containerWide,
} from "@/styles/utils";
import { palette } from "@/styles/abstracts";

export type ContainerWidth = "narrow" | "regular" | "wide";

interface InnerProps {
  $width?: ContainerWidth;
  $nested: any;
}

const BG_COLORS = Object.keys(palette);

export const Section = styled.section`
  background-color: var(--section-background-color);
  padding: var(--size-padding-container);
  color: var(--color-font-primary);
  color: light-dark(var(--color-font-primary), var(--color-font-invert));

  /* remove the top padding if sibling containers have the same bg color */
  ${BG_COLORS.map((color) => `&[data-bg-color="${color}"] + section[data-bg-color="${color}"]`).join(",")} {
    padding-block-start: 0;
  }

  &[data-dark-mode="true"] {
    color-scheme: dark;

    color: var(--color-font-invert);
  }
`;

export const Inner = styled.div<InnerProps>`
  ${({ $width = "regular", $nested }: InnerProps) => {
    if ($nested) return ``;

    switch ($width) {
      case "narrow":
        return containerNarrow();
      case "wide":
        return containerWide();
      default:
        return containerRegular();
    }
  }}
`;
