import { FunctionComponent, HTMLProps } from "react";
import * as Styled from "./styles";

interface MasonryGridProps {
  items: Array<{ id: string | number; element: JSX.Element }>;
  /** An integer to start counting from for the list items. */
  start?: number;
  reversed?: boolean;
  rowHeight?: string;
}

const MasonryGrid: FunctionComponent<MasonryGridProps> = ({
  items,
  start,
  reversed = false,
  rowHeight = "calc(var(--size-spacing-2xl-3xl) * 2)",
}) => {
  const isOrderedList = !!start || reversed;
  const listProps: HTMLProps<HTMLOListElement> | HTMLProps<HTMLUListElement> =
    isOrderedList
      ? {
          as: "ol",
          start,
          reversed,
        }
      : {};

  return (
    <Styled.BrickGrid style={{ "--size-height-row": rowHeight }} {...listProps}>
      {items.map(({ id, element }) => {
        return <li key={id}>{element}</li>;
      })}
    </Styled.BrickGrid>
  );
};

MasonryGrid.displayName = "Molecule.Masonry.Grid";

export default MasonryGrid;
