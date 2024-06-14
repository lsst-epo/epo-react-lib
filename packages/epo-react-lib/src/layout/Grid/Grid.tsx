import { FunctionComponent, PropsWithChildren } from "react";
import * as Styled from "./styles";

export interface GridProps {
  columns: number;
  tablet: number;
  showFeature: boolean;
}

const Grid: FunctionComponent<PropsWithChildren<GridProps>> = ({
  children,
  showFeature = false,
  columns = 3,
  tablet = 1,
}) => {
  return (
    <Styled.Grid
      data-show-feature={showFeature}
      style={{
        "--count-columns-grid": columns,
        "--count-columns-grid-tablet": tablet,
      }}
    >
      {children}
    </Styled.Grid>
  );
};

Grid.displayName = "Layout.Grid";

export default Grid;
