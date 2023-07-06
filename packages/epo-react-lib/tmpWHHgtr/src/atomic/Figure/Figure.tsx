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
    {caption && <Styled.FigCaption>{caption}</Styled.FigCaption>}
  </Styled.Figure>
);

Figure.displayName = "Atomic.Figure";

export default Figure;
