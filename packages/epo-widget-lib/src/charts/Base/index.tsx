import { FunctionComponent, PropsWithChildren } from "react";
import * as Styled from "./styles";

interface BaseChartProps {
  width?: number;
  height?: number;
  minX?: number;
  minY?: number;
  className?: string;
}

const BaseChart: FunctionComponent<PropsWithChildren<BaseChartProps>> = ({
  width = 900,
  height = 300,
  minX = 0,
  minY = 0,
  children,
  className,
}) => {
  return (
    <Styled.SVG
      preserveAspectRatio="xMidYMid meet"
      viewBox={`${minX} ${minY} ${width} ${height}`}
      className={className}
      style={{
        "--aspect-ratio": `${width} / ${height}`,
        "--min-width": `${width}px`,
      }}
      role="group"
    >
      {children}
    </Styled.SVG>
  );
};

BaseChart.displayName = "Charts.Base";

export default BaseChart;
