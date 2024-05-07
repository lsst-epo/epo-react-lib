import { FunctionComponent, SVGProps } from "react";
import { Point } from "@/types/charts";

type Props = {
  points: Array<Point>;
  className?: string;
  svgProps?: SVGProps<SVGPathElement>;
};

const buildPath = (points: Array<Point>) =>
  points.reduce((prev, { x, y }, i) => {
    return (prev += `${i === 0 ? "M" : " L"}${x},${y}`);
  }, "");

const PathFromPoints: FunctionComponent<Props> = ({
  points,
  className,
  svgProps,
}) => {
  if (points.length === 0) return null;

  const defaultProps = {
    fill: "none",
    strokeWidth: 2,
    stroke: "var(--black,#000)",
    pointerEvents: "none",
  };

  const props = { ...defaultProps, ...svgProps };

  const d = buildPath(points);

  return <path {...{ ...props, className, d }} />;
};

PathFromPoints.displayName = "Charts.Path";

export default PathFromPoints;
