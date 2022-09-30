import { FunctionComponent } from "react";
import { SVGProps } from "@/types/svg";
import defaultProps from "./defaultProps";

const Close: FunctionComponent<SVGProps> = ({
  size = 17.414,
  fill,
  className,
}) => {
  const uniqueProps = {
    viewBox: "0 0 17.414 17.414",
    width: size,
    height: size,
    fill,
    className,
  };

  const mergedSvgProps = Object.assign(defaultProps, uniqueProps);

  return (
    <svg {...mergedSvgProps}>
      <title>Close icon</title>
      <g data-name="Group 556055" fill="none" stroke="#000" strokeWidth={2}>
        <path data-name="Line 9407" d="m.707 16.707 16-16" />
        <path data-name="Line 9408" d="m.707.707 16 16" />
      </g>
    </svg>
  );
};

Close.displayName = "SVG.Close";

export default Close;
