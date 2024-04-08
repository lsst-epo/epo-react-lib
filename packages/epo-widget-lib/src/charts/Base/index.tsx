import { FunctionComponent, PropsWithChildren } from "react";
import * as Styled from "./styles";
import { Bounds } from "../types";

export interface BaseChartProps extends Partial<Bounds> {
  className?: string;
  title?: string;
  verticalLabel?: string;
  verticalLabelId?: string;
  horizontalLabel?: string;
  horizontalLabelId?: string;
}

const BaseChart: FunctionComponent<PropsWithChildren<BaseChartProps>> = ({
  width = 900,
  height = 300,
  xMin = 0,
  yMin = 0,
  verticalLabel,
  verticalLabelId,
  horizontalLabel,
  horizontalLabelId,
  title,
  children,
  className,
}) => {
  return (
    <Styled.ChartContainer>
      {title && (
        <Styled.TitleWrapper>
          <Styled.Title>{title}</Styled.Title>
        </Styled.TitleWrapper>
      )}
      {verticalLabel && (
        <>
          <Styled.VerticalLabelWrapper>
            <Styled.Label id={verticalLabelId} aria-hidden={!!verticalLabelId}>
              {verticalLabel}
            </Styled.Label>
          </Styled.VerticalLabelWrapper>
          <Styled.Filler />
        </>
      )}
      <Styled.SVG
        preserveAspectRatio="xMidYMid meet"
        viewBox={`${xMin} ${yMin} ${width} ${height}`}
        className={className}
        style={{
          "--aspect-ratio": `${width} / ${height}`,
        }}
        role="group"
      >
        {children}
      </Styled.SVG>

      {horizontalLabel && (
        <Styled.HorizontalLabelWrapper>
          <Styled.Label
            id={horizontalLabelId}
            aria-hidden={!!horizontalLabelId}
          >
            {horizontalLabel}
          </Styled.Label>
        </Styled.HorizontalLabelWrapper>
      )}
    </Styled.ChartContainer>
  );
};

BaseChart.displayName = "Charts.Base";

export default BaseChart;
