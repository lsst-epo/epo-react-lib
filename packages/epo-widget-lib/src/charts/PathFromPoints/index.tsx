import { FunctionComponent, SVGProps } from "react";
import { Point } from "@/types/charts";
import simplify from "simplify-js";

type Props = {
  points: Array<Point>;
  className?: string;
  svgProps?: SVGProps<SVGPathElement>;
  optimizePoints?: boolean;
};

const buildPath = (points: Array<Point>) =>
  points.reduce((prev, { x, y }, i) => {
    return (prev += `${i === 0 ? "M" : " L"}${x},${y}`);
  }, "");

const PathFromPoints: FunctionComponent<Props> = ({
  points,
  className,
  svgProps,
  optimizePoints = true,
}) => {
  const defaultProps = {
    fill: "none",
    strokeWidth: 2,
    stroke: "var(--black,#000)",
    pointerEvents: "none",
  };

  const props = { ...defaultProps, ...svgProps };

  const d = optimizePoints
    ? buildPath(simplify(points, 0.8))
    : buildPath(points);

  return <path {...{ ...props, className, d }} />;
};

PathFromPoints.displayName = "Charts.Path";

export default PathFromPoints;
