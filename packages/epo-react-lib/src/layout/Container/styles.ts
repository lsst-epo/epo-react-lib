import styled from "styled-components";
import {
  containerNarrow,
  containerRegular,
  containerWide,
} from "@/styles/utils";
import { padding, SpacingSize } from "@/styles/mixins/layout";

interface SectionProps {
  $bgColor: string;
  $paddingSize?: SpacingSize;
}

export type ContainerWidth = "narrow" | "regular" | "wide";

interface InnerProps {
  $width?: ContainerWidth;
  $nested: any;
}

export const Section = styled.section<SectionProps>`
  background-color: var(--section-background-color);

  ${({ $paddingSize }: SectionProps) =>
    $paddingSize &&
    `${padding("top", $paddingSize)}${padding("bottom", $paddingSize)}`}

  + section {
    padding-top: 0;
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
