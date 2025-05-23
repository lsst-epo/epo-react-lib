import { FunctionComponent, PropsWithChildren, ReactNode } from "react";
import ConditionalWrapper from "@/utils/ConditionalWrapper";
import * as Styled from "./styles";

export interface FigureProps {
  layout?: "horizontal" | "vertical";
  caption?: ReactNode;
  withBackground?: boolean;
  className?: string;
}

const Figure: FunctionComponent<PropsWithChildren<FigureProps>> = ({
  children,
  caption,
  layout = "vertical",
  withBackground,
  className,
}) => {
  const isTextCaption = typeof caption === "string";
  const hasCaption = !!caption;
  return (
    <Styled.Figure
      data-layout={layout}
      data-with-background={withBackground}
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
      {isTextCaption && (
        <Styled.FigCaption
          data-layout={layout}
          dangerouslySetInnerHTML={{ __html: caption }}
        />
      )}
      {hasCaption && !isTextCaption && (
        <Styled.FigCaption data-layout={layout}>{caption}</Styled.FigCaption>
      )}
    </Styled.Figure>
  );
};

Figure.displayName = "Atomic.Figure";

export default Figure;
