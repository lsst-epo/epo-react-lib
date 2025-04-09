"use client";
import { ComponentProps, FunctionComponent, PropsWithChildren } from "react";
import * as Styled from "./styles";
import { padding, SpacingSize } from "@/styles/mixins/layout";
import { palette } from "@/styles/abstracts";
import { useNestedContext } from "@/contexts/Nested";

export interface ContainerProps {
  bgColor?: keyof typeof palette;
  className?: string;
  width?: Styled.ContainerWidth;
  /** Applies padding utility class of the same name.
   * Default is "large", "none" removes the class entirely */
  paddingSize?: SpacingSize | "none";
  elAttributes?: ComponentProps<"section">;
}

const Container: FunctionComponent<PropsWithChildren<ContainerProps>> = ({
  bgColor = "white",
  children,
  className,
  width = "narrow",
  paddingSize: basePaddingSize = "large",
  elAttributes = {},
}) => {
  const { style, ...attributes } = elAttributes;
  const nested = useNestedContext();
  const paddingSize =
    !nested && basePaddingSize !== "none" ? basePaddingSize : undefined;

  return (
    <Styled.Section
      data-testid="container"
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
