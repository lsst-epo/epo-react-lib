import styled from "styled-components";
import {
  containerNarrow,
  containerRegular,
  containerWide,
} from "@/styles/utils";

export type ContainerWidth = "narrow" | "regular" | "wide";

interface InnerProps {
  $width?: ContainerWidth;
  $nested: any;
}

export const Section = styled.section`
  background-color: var(--section-background-color);
  padding: var(--size-padding-container);
  color: light-dark(var(--color-font-primary), var(--color-font-invert));

  + section {
    padding-block-start: 0;
  }

  &[data-dark-mode="true"] {
    color-scheme: dark;
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
