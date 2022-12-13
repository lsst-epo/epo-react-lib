import { FunctionComponent, ReactNode } from "react";
import * as Styled from "./styles";

interface GridProps extends Partial<Styled.GridProps> {
  children: ReactNode;
}

const Grid: FunctionComponent<GridProps> = ({
  children,
  showFeature = false,
  columns = 3,
  tablet = 1,
}) => {
  return (
    <Styled.Grid {...{ columns, showFeature, tablet }}>{children}</Styled.Grid>
  );
};

Grid.displayName = "Layout.Grid";

export default Grid;
