import {
  FunctionComponent,
  PointerEvent,
  ReactNode,
  useId,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { Domain, ScaleFunction } from "@/types/charts";
import { invertLinearScale } from "@/lib/utils";
import { Box, Coordinates } from "../types";
import {
  EMPTY_BOX,
  getElBox,
  getMidPoint,
  getPointInSvg,
  getSlopeTerminus,
} from "./helpers";

/** Padding between the label's text and the edge of its box */
const LABEL_OFFSET = 5;

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

  const labelRef = useRef<SVGTextElement>(null);
  const [labelBox, setLabelBox] = useState<Box>(EMPTY_BOX);
  const [isDragging, setIsDragging] = useState(false);
  const markerId = `triangle-${useId()}`;

  const isSlope = props.variant === "slope";
  const slope = isSlope ? props.slope : undefined;

  /**
   * The label's box can only be sized once the text has been laid out, so
   * measure it after every paint. The measurement is only committed when it
   * changes, so this settles rather than looping.
   */
  useLayoutEffect(() => {
    const { x, y, width, height } = getElBox(labelRef.current);

    setLabelBox((previous) =>
      previous.x === x &&
      previous.y === y &&
      previous.width === width &&
      previous.height === height
        ? previous
        : { x, y, width, height },
    );
  });

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
      /** Centered on the line, halfway along it */
      labelX: midX - labelBox.width / 2,
      labelY: midY + labelBox.height / 2,
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
      /** Set beside the line so the box doesn't cover it */
      labelX: midX + LABEL_OFFSET,
      labelY: midY,
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
          <rect
            width={labelBox.width + 2 * LABEL_OFFSET}
            height={labelBox.height + 2 * LABEL_OFFSET}
            x={labelBox.x - LABEL_OFFSET}
            y={labelBox.y - LABEL_OFFSET}
            fill="#ffffff"
            strokeWidth="2"
            stroke="#000000"
            pointerEvents="none"
          />
          <text
            ref={labelRef}
            x={geometry.labelX}
            y={geometry.labelY}
            pointerEvents="none"
          >
            {typeof label === "function" ? label(slope ?? 0) : label}
          </text>
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
