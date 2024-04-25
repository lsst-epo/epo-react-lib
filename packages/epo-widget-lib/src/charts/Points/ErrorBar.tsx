import { FunctionComponent } from "react";
import { ErrorRange, ScaleFunction } from "@/types/charts";
import defaults from "../defaults";

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
                y1={-defaults.errorBarCapWidth}
                y2={defaults.errorBarCapWidth}
                x1={x.max}
                x2={x.max}
                {...defaults.errorBarStyles}
              />
              <line
                y1={0}
                y2={0}
                x1={0}
                x2={x.max}
                {...defaults.errorBarStyles}
              />
            </>
          )}
          {x.min && (
            <>
              <line
                y1={-defaults.errorBarCapWidth}
                y2={defaults.errorBarCapWidth}
                x1={x.min}
                x2={x.min}
                {...defaults.errorBarStyles}
              />
              <line
                y1={0}
                y2={0}
                x1={x.min}
                x2={0}
                {...defaults.errorBarStyles}
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
                x1={-defaults.errorBarCapWidth}
                x2={defaults.errorBarCapWidth}
                y1={y.max}
                y2={y.max}
                {...defaults.errorBarStyles}
              />
              <line
                x1={0}
                x2={0}
                y1={0}
                y2={y.max}
                {...defaults.errorBarStyles}
              />
            </>
          )}
          {y.min && (
            <>
              <line
                x1={-defaults.errorBarCapWidth}
                x2={defaults.errorBarCapWidth}
                y1={y.min}
                y2={y.min}
                {...defaults.errorBarStyles}
              />
              <line
                x1={0}
                x2={0}
                y1={y.min}
                y2={0}
                {...defaults.errorBarStyles}
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
