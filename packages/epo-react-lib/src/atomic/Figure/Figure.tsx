import { FunctionComponent, ReactNode } from "react";
import * as Styled from "./styles";

interface FigureProps {
  children: ReactNode;
  caption?: string;
  withBackground?: boolean;
  className?: string;
}

const Figure: FunctionComponent<FigureProps> = ({
  children,
  caption,
  withBackground,
  className,
}) => (
  <Styled.Figure $withBackground={withBackground} className={className}>
    {children}
    {caption && (
      <Styled.FigCaption dangerouslySetInnerHTML={{ __html: caption }} />
    )}
  </Styled.Figure>
);

Figure.displayName = "Atomic.Figure";

export default Figure;
