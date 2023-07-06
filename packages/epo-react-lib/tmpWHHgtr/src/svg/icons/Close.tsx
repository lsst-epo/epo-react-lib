import { FunctionComponent } from "react";
import { SVGProps } from "@/types/svg";
import defaultProps from "./defaultProps";

const Close: FunctionComponent<SVGProps> = ({
  size = 17.414,
  fill = "currentColor",
  stroke = "currentColor",
  className,
}) => {
  const uniqueProps = {
    viewBox: "0 0 17.414 17.414",
    width: size,
    height: size,
    fill,
    stroke,
    className,
  };

  const mergedSvgProps = Object.assign(defaultProps, uniqueProps);

  return (
    <svg {...mergedSvgProps}>
      <title>Close icon</title>
      <g strokeWidth={2}>
        <path d="m.707 16.707 16-16" />
        <path d="m.707.707 16 16" />
      </g>
    </svg>
  );
};

Close.displayName = "SVG.Close";

export default Close;
