"use client";
import { ComponentProps, FunctionComponent, PropsWithChildren } from "react";
import { padding, SpacingSize } from "@/styles/mixins/layout";
import { palette } from "@/styles/abstracts";
import { useNestedContext } from "@/contexts/Nested";
import * as Styled from "./styles";

export interface ContainerProps {
  bgColor?: keyof typeof palette;
  className?: string;
  width?: Styled.ContainerWidth;
  /** Applies padding utility class of the same name.
   * Default is "large", "none" removes the class entirely */
  paddingSize?: SpacingSize | "none";
  elAttributes?: ComponentProps<"section">;
  /**
   * For now, configure if the color scheme is dark manually.
   * This may change in the future to be calculated from the background color
   */
  darkMode?: boolean;
}

const Container: FunctionComponent<PropsWithChildren<ContainerProps>> = ({
  bgColor = "white",
  children,
  className,
  width = "narrow",
  paddingSize: basePaddingSize = "large",
  elAttributes = {},
  darkMode = false,
}) => {
  const { style, ...attributes } = elAttributes;
  const nested = useNestedContext();
  const paddingSize =
    !nested && basePaddingSize !== "none" ? basePaddingSize : undefined;

  return (
    <Styled.Section
      data-testid="container"
      data-dark-mode={darkMode}
      style={{
        "--section-background-color": `var(--${bgColor})`,
        "--size-padding-container":
          paddingSize && `${padding(paddingSize)} 0 ${padding(paddingSize)}`,
        ...style,
      }}
      {...attributes}
    >
      <Styled.Inner
        className={className ? `${className} ${className}__inner` : undefined}
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
