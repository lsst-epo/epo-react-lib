import { FunctionComponent, ReactNode } from "react";
import * as Styled from "./styles";

interface FigureProps {
  children: ReactNode;
  caption?: string;
  withBackground?: boolean;
}

const Figure: FunctionComponent<FigureProps> = ({
  children,
  caption,
  withBackground,
}) => (
  <Styled.Figure $withBackground={withBackground}>
    {children}
    {caption && <Styled.FigCaption>{caption}</Styled.FigCaption>}
  </Styled.Figure>
);

Figure.displayName = "Atomic.Figure";

export default Figure;
