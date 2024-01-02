import { FunctionComponent, ReactNode } from "react";
import * as Styled from "./styles";

interface FigureProps {
  children: ReactNode;
  layout?: "horizontal" | "vertical";
  caption?: string;
  withBackground?: boolean;
  className?: string;
}

const Figure: FunctionComponent<FigureProps> = ({
  children,
  caption,
  layout = "vertical",
  withBackground,
  className,
}) => (
  <Styled.Figure
    style={{
      "--figure-background-color":
        withBackground && "var(--neutral10, #f5f5f5)",
      "--figure-padding": withBackground && "var(--PADDING_SMALL, 20px)",
    }}
    className={className}
  >
    {layout === "horizontal" ? (
      <Styled.FloatWrapper>{children}</Styled.FloatWrapper>
    ) : (
      children
    )}
    {caption && (
      <Styled.FigCaption
        style={{
          marginBlockStart:
            layout === "vertical" ? "var(--figcaption-gap)" : undefined,
        }}
      >
        {caption}
      </Styled.FigCaption>
    )}
  </Styled.Figure>
);

Figure.displayName = "Atomic.Figure";

export default Figure;
