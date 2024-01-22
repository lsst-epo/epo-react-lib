import { FunctionComponent, MouseEvent, MouseEventHandler } from "react";
import { getLinearScale } from "../utilities";
import Points from "../Points";
import * as Styled from "../styles";
import { Source } from "@/types/astro";

export interface PointSelectorProps {
  width: number;
  height: number;
  id?: string;
  sources?: Source[];
  selectedSource?: string[];
  onSelectCallback: (id?: string) => void;
}

const PointSelector: FunctionComponent<PointSelectorProps> = ({
  width,
  height,
  id,
  sources,
  selectedSource,
  onSelectCallback,
}) => {
  return (
    <Styled.SVG
      preserveAspectRatio="xMidYMid meet"
      viewBox={`0 0 ${width} ${height}`}
      onClick={() => onSelectCallback && onSelectCallback(undefined)}
      id={id}
    >
      <Points
        onClickCallback={(id) => onSelectCallback && onSelectCallback(id)}
        xScale={getLinearScale([0, width], [0, width])}
        yScale={getLinearScale([0, height], [0, height])}
        {...{
          sources,
          selectedSource,
        }}
      />
    </Styled.SVG>
  );
};

PointSelector.displayName = "Widgets.PointSelector";

export default PointSelector;
