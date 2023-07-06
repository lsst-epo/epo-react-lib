import { FunctionComponent } from "react";
import { SVGProps } from "@/types/svg";
import defaultProps from "./defaultProps";

const Plus: FunctionComponent<SVGProps> = ({
  className,
  size = 24,
  fill = "currentColor",
  stroke = "currentColor",
}) => {
  const uniqueProps = {
    viewBox: "0 0 14.142 14.142",
    width: size,
    height: size,
    fill,
    stroke,
    className,
  };

  const mergedSvgProps = Object.assign(defaultProps, uniqueProps);
  return (
    <svg {...mergedSvgProps}>
      <title>Plus icon</title>
      <g transform="translate(7.071 0) rotate(45)">
        <path d="M10,.933,9.067,0,5,4.067.933,0,0,.933,4.067,5,0,9.067.933,10,5,5.933,9.067,10,10,9.067,5.933,5Z" />
      </g>
    </svg>
  );
};

Plus.displayName = "SVG.Plus";

export default Plus;
