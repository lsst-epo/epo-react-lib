import styled from "styled-components";
import {
  containerNarrow,
  containerRegular,
  containerWide,
  tokens,
} from "@/styles/globalStyles";

interface SectionProps {
  $bgColor: string;
}

export type ContainerWidth = "narrow" | "regular" | "wide";

interface InnerProps {
  $width?: ContainerWidth;
  $nested: any;
}

export const Section = styled.section<SectionProps>`
  background-color: ${({ $bgColor }) => tokens[$bgColor]};

  + section {
    padding-top: 0;
  }
`;

export const Inner = styled.div<InnerProps>`
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
