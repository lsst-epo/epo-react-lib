import { FunctionComponent } from "react";
import { ErrorRange, ScaleFunction } from "@/types/charts";
import { errorBarCapWidth, defaultErrorBarStyles } from "../defaults";

interface ErrorBarProps {
  error: Record<string, ErrorRange>;
  xScale: ScaleFunction;
  yScale: ScaleFunction;
}

const ErrorBar: FunctionComponent<ErrorBarProps> = ({
  error,
  xScale,
  yScale,
}) => {
  const scaledErrors: Record<string, ErrorRange> = {};

  Object.keys(error).forEach((k) => {
    const { min, max } = error[k];
    if (k === "x") {
      scaledErrors[k] = {
        min: min ? xScale(0) - xScale(min) : undefined,
        max: max ? xScale(max) - xScale(0) : undefined,
      };
    } else {
      scaledErrors[k] = {
        min: min ? yScale(min) - yScale(0) : undefined,
        max: max ? yScale(0) - yScale(max) : undefined,
      };
    }
  });

  const { x, y } = scaledErrors;

  return (
    <g>
      {x && (
        <>
          {x.max && (
            <>
              <line
                y1={-errorBarCapWidth}
                y2={errorBarCapWidth}
                x1={x.max}
                x2={x.max}
                {...defaultErrorBarStyles}
              />
              <line
                y1={0}
                y2={0}
                x1={0}
                x2={x.max}
                {...defaultErrorBarStyles}
              />
            </>
          )}
          {x.min && (
            <>
              <line
                y1={-errorBarCapWidth}
                y2={errorBarCapWidth}
                x1={x.min}
                x2={x.min}
                {...defaultErrorBarStyles}
              />
              <line
                y1={0}
                y2={0}
                x1={x.min}
                x2={0}
                {...defaultErrorBarStyles}
              />
            </>
          )}
        </>
      )}
      {y && (
        <>
          {y.max && (
            <>
              <line
                x1={-errorBarCapWidth}
                x2={errorBarCapWidth}
                y1={y.max}
                y2={y.max}
                {...defaultErrorBarStyles}
              />
              <line
                x1={0}
                x2={0}
                y1={0}
                y2={y.max}
                {...defaultErrorBarStyles}
              />
            </>
          )}
          {y.min && (
            <>
              <line
                x1={-errorBarCapWidth}
                x2={errorBarCapWidth}
                y1={y.min}
                y2={y.min}
                {...defaultErrorBarStyles}
              />
              <line
                x1={0}
                x2={0}
                y1={y.min}
                y2={0}
                {...defaultErrorBarStyles}
              />
            </>
          )}
        </>
      )}
    </g>
  );
};

ErrorBar.displayName = "Charts.Points.ErrorBar";

export default ErrorBar;
