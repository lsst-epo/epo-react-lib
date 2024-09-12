import { FunctionComponent } from "react";
import { SVGProps } from "@/types/svg";
import defaultProps from "./defaultProps";

const Forward: FunctionComponent<SVGProps> = ({
  className,
  size = 24,
  fill = "currentColor",
}) => {
  const uniqueProps = {
    viewBox: "0 0 15 9",
    width: size,
    height: size,
    fill,
    className,
  };

  return (
    <svg {...{ ...defaultProps, ...uniqueProps }}>
      <g transform="translate(-2737 -1072)">
        <path
          d="M4.5,0,9,8H0Z"
          transform="translate(2745 1072) rotate(90)"
          fill="#1f2121"
        />
        <path
          d="M4.5,0,9,8H0Z"
          transform="translate(2752 1072) rotate(90)"
          fill="#1f2121"
        />
      </g>
    </svg>
  );
};

Forward.displayName = "SVG.Forward";

export default Forward;
