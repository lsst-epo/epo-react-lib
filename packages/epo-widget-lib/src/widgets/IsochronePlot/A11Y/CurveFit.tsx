import { buildPath } from "@/lib/utils";
import { Point, ScaleFunction } from "@/types/charts";
import { FunctionComponent, useMemo } from "react";
import { IsochroneValue } from "..";

type Props = {
  points: Array<Point>;
  isochrone: Array<Point>;
  offset: number;
  xScale: ScaleFunction;
  yScale: ScaleFunction;
  width: number;
  height: number;
  value: IsochroneValue;
};

const fitFeedback = (fit: number) => {
  if (fit < 25) {
  }
  if (fit < 50) {
  }
  if (fit < 70) {
  }
  if (fit < 85) {
  }
};

const CurveFit: FunctionComponent<Props> = ({
  isochrone,
  points,
  offset,
  xScale,
  yScale,
  width,
  height,
  value,
}) => {
  const isochronePath = buildPath(isochrone, [0, offset]);
  const pointsOnCurve = useMemo(() => {
    const filteredPoints = points.filter(({ y }) => y < 16);
    const canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;
    const context = canvas.getContext("2d");

    if (context) {
      context.clearRect(0, 0, width, height);

      const path = new Path2D(isochronePath);
      context.lineWidth = 15;
      context.stroke(path);

      const pointsInStroke = filteredPoints.filter((point) => {
        const x = xScale(point.x);
        const y = yScale(point.y);

        return context.isPointInStroke(path, x, y);
      });

      return Math.floor((pointsInStroke.length / filteredPoints.length) * 100);
    }

    return 0;
  }, [isochrone, xScale, yScale]);

  return <></>;
};

CurveFit.displayName = "IsochronePlot.A11Y.CurveFit";

export default CurveFit;
