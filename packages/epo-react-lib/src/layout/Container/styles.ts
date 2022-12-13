import styled from "styled-components";
import {
  containerNarrow,
  containerRegular,
  containerWide,
  tokens,
} from "@/styles/globalStyles";
import { padding, SpacingSize } from "@/styles/mixins/layout";

interface SectionProps {
  $bgColor: string;
  $paddingSize?: SpacingSize;
}

export type ContainerWidth = "narrow" | "regular" | "wide";

interface InnerProps {
  $className?: string;
  $width?: ContainerWidth;
  $nested: any;
}

export const Section = styled.section<SectionProps>`
  background-color: ${({ $bgColor }) => tokens[$bgColor]};
  ${({ $paddingSize }) =>
    $paddingSize &&
    `${padding("top", $paddingSize)}${padding("bottom", $paddingSize)}`}

  + section {
    padding-top: 0;
  }
`;

export const Inner = styled.div.attrs<InnerProps>(({ $className }) => ({
  className: $className,
}))<InnerProps>`
  ${({ $width = "regular", $nested }) => {
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
