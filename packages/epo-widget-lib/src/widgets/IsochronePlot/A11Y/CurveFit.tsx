import { buildPath } from "@/lib/utils";
import { Point, ScaleFunction } from "@/types/charts";
import { FunctionComponent, useMemo } from "react";

type Props = {
  points: Array<Point>;
  isochrone: Array<Point>;
  offset: number;
  xScale: ScaleFunction;
  yScale: ScaleFunction;
  width: number;
  height: number;
};

const CurveFit: FunctionComponent<Props> = ({
  isochrone,
  points,
  offset,
  xScale,
  yScale,
  width,
  height,
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
      context.lineWidth = 40;
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

  // const getStatus = () => {
  //   console.log({ pointsOnCurve, previousPointsOnCurve });
  //   if (pointsOnCurve === previousPointsOnCurve) return "No change";

  //   return pointsOnCurve > previousPointsOnCurve ? "closer" : "farther";
  // };

  return <span>{pointsOnCurve}%</span>;
};

CurveFit.displayName = "IsochronePlot.A11Y.CurveFit";

export default CurveFit;
