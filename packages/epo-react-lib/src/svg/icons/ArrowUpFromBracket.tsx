import { FunctionComponent } from "react";
import { SVGProps } from "@/types/svg";
import defaultProps from "./defaultProps";

const ArrowUpFromBracket: FunctionComponent<SVGProps> = ({
  className,
  size = 24,
  fill = "currentColor",
  stroke = "currentColor",
}) => {
  const uniqueProps = {
    viewBox: "0 0 16.306 19.883",
    width: size,
    height: size,
    fill,
    className,
    stroke,
  };

  const mergedSvgProps = Object.assign(defaultProps, uniqueProps);
  return (
    <svg {...mergedSvgProps}>
      <g transform="translate(1 1)">
        <path
          d="M6,18v7.153a1.788,1.788,0,0,0,1.788,1.788h10.73a1.788,1.788,0,0,0,1.788-1.788V18"
          transform="translate(-6 -9.059)"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          fill="none"
        />
        <path
          d="M19.153,6.577,15.577,3,12,6.577"
          transform="translate(-8.423 -3)"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          fill="none"
        />
        <path
          d="M18,3V14.624"
          transform="translate(-10.847 -3)"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          fill="none"
        />
      </g>
    </svg>
  );
};

ArrowUpFromBracket.displayName = "SVG.ArrowUpFromBracket";

export default ArrowUpFromBracket;
