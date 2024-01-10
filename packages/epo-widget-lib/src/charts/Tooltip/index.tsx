import { FunctionComponent } from "react";
import * as Styled from "./styles";

export interface TooltipProps {
  value: number | string;
  x: number;
  y: number;
  height?: number;
  className?: string;
}

const Tooltip: FunctionComponent<TooltipProps> = ({
  value,
  x,
  y,
  height = 16,
  className,
}) => {
  const label = String(value);
  const width = Math.max(label.length * 8, 20);
  const arrowWidth = 6;
  const xCenter = x + width / 2;

  return (
    <Styled.Tooltip
      transform={`translate(-${width / 2} -${height * 1.5})`}
      className={className}
    >
      <Styled.TooltipBackground
        rx={4}
        width={width}
        height={height}
        {...{ x, y }}
      />
      <Styled.TooltipArrow
        points={`${xCenter - arrowWidth} ${y + height} ${
          xCenter + arrowWidth
        } ${y + height} ${xCenter} ${y + height + arrowWidth}`}
      />
      <Styled.TooltipText
        width={width}
        height={height}
        x={xCenter}
        y={y + height / 2}
      >
        {label}
      </Styled.TooltipText>
    </Styled.Tooltip>
  );
};

Tooltip.displayName = "Charts.Tooltip";

export default Tooltip;
