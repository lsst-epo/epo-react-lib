import {
  FunctionComponent,
  PointerEvent,
  ReactNode,
  useId,
  useState,
} from "react";
import { Domain, ScaleFunction } from "@/types/charts";
import { invertLinearScale } from "@/lib/utils";
import { Box, Coordinates } from "../types";
import { getMidPoint, getPointInSvg, getSlopeTerminus } from "./helpers";
import * as Styled from "./styles";

interface BaseProps {
  xScale: ScaleFunction;
  yScale: ScaleFunction;
  domain: [Domain, Domain];
  label: ReactNode | ((slope: number) => ReactNode);
}

/** A static arrow running along the chart's right edge */
interface AxisProps {
  variant: "axis";
  padding: number;
  pointUp?: boolean;
}

/** A line from the origin whose angle is set by `slope` */
interface SlopeProps {
  variant: "slope";
  slope?: number;
  isInteractable?: boolean;
  fractionDigits?: number;
  onSlopeChange?: (slope: number) => void;
  onSelect?: () => void;
  captureArea?: Box;
}

export type TrendlineProps = BaseProps & (AxisProps | SlopeProps);

/** `Omit` that preserves the variants of a union */
type DistributiveOmit<T, K extends PropertyKey> = T extends unknown
  ? Omit<T, K>
  : never;

/** The props a parent chart can't supply from its own scales */
export type TrendlineConfig = DistributiveOmit<
  TrendlineProps,
  "xScale" | "yScale" | "domain" | "captureArea"
>;

const Trendline: FunctionComponent<TrendlineProps> = (props) => {
  const { xScale, yScale, domain, label } = props;
  const [xDomain, yDomain] = domain;

  const [isDragging, setIsDragging] = useState(false);
  const markerId = `triangle-${useId()}`;

  const isSlope = props.variant === "slope";
  const slope = isSlope ? props.slope : undefined;

  const getAxisGeometry = ({ padding, pointUp }: AxisProps) => {
    const offset = padding / 2;
    const x = xScale(xDomain[1]) - offset;
    const start: Coordinates = [x, offset];
    const terminus: Coordinates = [x, yScale(yDomain[0]) - offset];
    const [midX, midY] = getMidPoint(start, terminus);

    return {
      start,
      terminus,
      transform: pointUp ? `rotate(180, ${midX}, ${midY})` : undefined,
      labelX: midX,
      labelY: midY,
      labelPlacement: "on" as const,
    };
  };

  const getSlopeGeometry = (slope: number) => {
    const start: Coordinates = [xScale(0), yScale(0)];
    const terminus = getSlopeTerminus(slope, domain, xScale, yScale);
    const [midX, midY] = getMidPoint(start, terminus);

    return {
      start,
      terminus,
      transform: undefined,
      labelX: midX,
      labelY: midY,
      labelPlacement: "beside" as const,
    };
  };

  const getGeometry = () => {
    if (!isSlope) return getAxisGeometry(props);

    return slope ? getSlopeGeometry(slope) : undefined;
  };

  const geometry = getGeometry();

  const handleDrag = (event: PointerEvent<SVGRectElement>) => {
    if (!isSlope) return;

    const { onSlopeChange, fractionDigits = 1 } = props;
    const point = getPointInSvg(event);

    if (!point || !onSlopeChange) return;

    const x = invertLinearScale(xScale, xDomain)(point[0]);
    const y = invertLinearScale(yScale, yDomain)(point[1]);

    if (x === 0) return;

    onSlopeChange(Number((y / x).toFixed(fractionDigits)));
  };

  const captureArea =
    isSlope && props.isInteractable ? props.captureArea : null;

  return (
    <svg>
      <defs>
        <marker
          id={markerId}
          viewBox="0 0 10 10"
          refX="1"
          refY="5"
          markerUnits="strokeWidth"
          markerWidth="15"
          markerHeight="15"
          orient="auto"
        >
          <path d="M 0 0 L 10 5 L 0 10 z" />
        </marker>
      </defs>
      {geometry && (
        <g>
          <line
            x1={geometry.start[0]}
            y1={geometry.start[1]}
            x2={geometry.terminus[0]}
            y2={geometry.terminus[1]}
            strokeWidth={2}
            stroke="#000000"
            strokeDasharray="10"
            markerEnd={`url(#${markerId})`}
            transform={geometry.transform}
            pointerEvents="none"
          />
          <foreignObject
            x={geometry.labelX}
            y={geometry.labelY}
            width={1}
            height={1}
            overflow="visible"
            pointerEvents="none"
          >
            <Styled.Label data-placement={geometry.labelPlacement}>
              {typeof label === "function" ? label(slope ?? 0) : label}
            </Styled.Label>
          </foreignObject>
        </g>
      )}
      {captureArea && (
        <rect
          {...captureArea}
          fill="transparent"
          style={{ cursor: "crosshair", touchAction: "none" }}
          onPointerDown={(event) => {
            event.currentTarget.setPointerCapture(event.pointerId);
            setIsDragging(true);
            handleDrag(event);
          }}
          onPointerMove={(event) => {
            if (isDragging) handleDrag(event);
          }}
          onPointerUp={(event) => {
            event.currentTarget.releasePointerCapture(event.pointerId);
            setIsDragging(false);

            if (isSlope) props.onSelect?.();
          }}
        />
      )}
    </svg>
  );
};

Trendline.displayName = "Charts.Trendline";

export default Trendline;
