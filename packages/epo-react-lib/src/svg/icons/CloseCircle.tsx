import { FunctionComponent } from "react";
import { SVGProps } from "@/types/svg";
import defaultProps from "./defaultProps";

const CloseCircle: FunctionComponent<SVGProps> = ({
  size = 24,
  fill,
  className,
}) => {
  const uniqueProps = {
    viewBox: "0 0 20 20",
    width: size,
    height: size,
    fill,
    className,
  };

  return (
    <svg {...{ ...defaultProps, ...uniqueProps }}>
      <circle cx="10" cy="10" r="10" />
      <g transform="translate(5 5)">
        <path
          d="M10,.933,9.067,0,5,4.067.933,0,0,.933,4.067,5,0,9.067.933,10,5,5.933,9.067,10,10,9.067,5.933,5Z"
          transform="translate(0 0)"
          stroke="#ffffff"
          fill="#ffffff"
        />
      </g>
    </svg>
  );
};

CloseCircle.displayName = "SVG.CloseCircle";

export default CloseCircle;
