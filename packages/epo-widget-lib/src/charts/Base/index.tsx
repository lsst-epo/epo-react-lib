import { FunctionComponent, PropsWithChildren } from "react";
import * as Styled from "./styles";

export interface BaseChartProps {
  width?: number;
  height?: number;
  minX?: number;
  minY?: number;
  className?: string;
  verticalLabel?: string;
  verticalLabelId?: string;
  horizontalLabel?: string;
  horizontalLabelId?: string;
}

const BaseChart: FunctionComponent<PropsWithChildren<BaseChartProps>> = ({
  width = 900,
  height = 300,
  minX = 0,
  minY = 0,
  verticalLabel,
  verticalLabelId,
  horizontalLabel,
  horizontalLabelId,
  children,
  className,
}) => {
  return (
    <Styled.ChartContainer>
      {verticalLabel && (
        <Styled.VerticalLabel id={verticalLabelId}>
          {verticalLabel}
        </Styled.VerticalLabel>
      )}
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
      {horizontalLabel && (
        <Styled.HorizontalLabel id={horizontalLabelId}>
          {horizontalLabel}
        </Styled.HorizontalLabel>
      )}
    </Styled.ChartContainer>
  );
};

BaseChart.displayName = "Charts.Base";

export default BaseChart;
