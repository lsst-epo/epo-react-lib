"use client";
import { FunctionComponent, PropsWithChildren } from "react";
import * as Styled from "./styles";
import { SpacingSize } from "@/styles/mixins/layout";
import { palette } from "@/styles/abstracts";
import { useNestedContext } from "@/contexts/Nested";

export interface ContainerProps {
  bgColor?: keyof typeof palette;
  className?: string;
  width?: Styled.ContainerWidth;
  /** Applies padding utility class of the same name.
   * Default is "large", "none" removes the class entirely */
  paddingSize?: SpacingSize | "none";
  elAttributes?: Partial<HTMLElement>;
}

const Container: FunctionComponent<PropsWithChildren<ContainerProps>> = ({
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
      style={{ "--section-background-color": `var(--${bgColor})` }}
      $paddingSize={!nested && paddingSize !== "none" ? paddingSize : undefined}
      {...(elAttributes as any)}
    >
      <Styled.Inner
        className={!!className ? `${className} ${className}__inner` : undefined}
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
