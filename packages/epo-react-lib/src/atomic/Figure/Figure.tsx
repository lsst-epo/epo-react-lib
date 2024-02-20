import { FunctionComponent, PropsWithChildren, ReactNode } from "react";
import * as Styled from "./styles";
import ConditionalWrapper from "@/utils/ConditionalWrapper";

export interface FigureProps {
  layout?: "horizontal" | "vertical";
  caption?: string;
  withBackground?: boolean;
  className?: string;
}

const Figure: FunctionComponent<PropsWithChildren<FigureProps>> = ({
  children,
  caption,
  layout = "vertical",
  withBackground,
  className,
}) => (
  <Styled.Figure
    data-layout={layout}
    style={
      withBackground
        ? {
            "--figure-background-color": "var(--neutral10, #f5f5f5)",
            "--figure-padding": "var(--PADDING_SMALL, 20px)",
          }
        : undefined
    }
    className={className}
  >
    <ConditionalWrapper
      condition={layout === "horizontal"}
      wrapper={(children) => (
        <Styled.FloatWrapper>{children}</Styled.FloatWrapper>
      )}
    >
      {children}
    </ConditionalWrapper>
    {caption && (
      <Styled.FigCaption
        data-layout={layout}
        dangerouslySetInnerHTML={{ __html: caption }}
      />
    )}
  </Styled.Figure>
);

Figure.displayName = "Atomic.Figure";

export default Figure;
