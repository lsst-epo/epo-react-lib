import { FunctionComponent } from "react";
import { SVGProps } from "@/types/svg";
import defaultProps from "./defaultProps";

const Timer: FunctionComponent<SVGProps> = ({
  className,
  size = 47,
  fill = "currentColor",
}) => {
  const uniqueProps = {
    viewBox: "0 0 40.277 46.569",
    width: size,
    height: size,
    fill,
    className,
  };

  return (
    <svg {...{ ...defaultProps, ...uniqueProps }}>
      <g fill="#1d1d1b">
        <path d="M20.14 8.3a19.038 19.038 0 0 0-9.276 2.4L8.728 7.654 12 5.359 9.828 2.253 0 9.138l2.176 3.106 3.276-2.3L7.6 13.011A19.114 19.114 0 1 0 20.14 8.3Zm0 32.266a13.133 13.133 0 1 1 13.132-13.13A13.148 13.148 0 0 1 20.14 40.569Z" />
        <path d="M18.138 7.031h4V4.08h4V0h-12v4.08h4Z" />
        <path d="m30.2 9.572 3.277 2.3 1.345-1.92L38.1 12.24l2.175-3.107-9.83-6.881-2.174 3.107 3.277 2.293Z" />
      </g>
    </svg>
  );
};

Timer.displayName = "SVG.Timer";

export default Timer;
