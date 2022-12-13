import { FunctionComponent, ReactNode } from "react";
import * as Styled from "./styles";
import { SpacingSize } from "@/styles/mixins/layout";
import { colorTokens } from "@/styles/globalStyles";
import { useNestedContext } from "@/contexts/Nested";

interface SectionAttributes {
  role?: string;
  "aria-hidden"?: boolean;
  "aria-labelledby"?: string;
  id: string;
}
interface ContainerProps {
  bgColor?: keyof typeof colorTokens;
  children: ReactNode;
  className?: string;
  width?: Styled.ContainerWidth;
  /** Applies padding utility class of the same name.
   * Default is "large", "none" removes the class entirely */
  paddingSize?: SpacingSize | "none";
  elAttributes?: SectionAttributes;
}

const Container: FunctionComponent<ContainerProps> = ({
  bgColor = "white",
  children,
  className,
  width = "narrow",
  paddingSize = "large",
  elAttributes,
}) => {
  const nested = useNestedContext();
  return (
    <Styled.Section
      data-testid="container"
      $paddingSize={!nested && paddingSize !== "none" ? paddingSize : undefined}
      $bgColor={bgColor}
      {...(elAttributes as any)}
    >
      <Styled.Inner
        $className={!!className ? `${className}__inner` : undefined}
        $width={width}
        $nested={nested}
      >
        {children}
      </Styled.Inner>
    </Styled.Section>
  );
};

Container.displayName = "Layout.Container";

export default Container;
