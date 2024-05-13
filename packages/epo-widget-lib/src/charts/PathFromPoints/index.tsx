import { FunctionComponent, SVGProps } from "react";
import { Point } from "@/types/charts";
import { buildPath } from "@/lib/utils";

type Props = {
  points: Array<Point>;
  className?: string;
  svgProps?: SVGProps<SVGPathElement>;
};

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

  return <path strokeLinejoin="round" {...{ ...props, className, d }} />;
};

PathFromPoints.displayName = "Charts.Path";

export default PathFromPoints;
