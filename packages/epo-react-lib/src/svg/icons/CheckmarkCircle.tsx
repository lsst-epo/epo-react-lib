import { FunctionComponent } from "react";
import { SVGProps } from "@/types/svg";
import defaultProps from "./defaultProps";

const CheckmarkCircle: FunctionComponent<SVGProps> = ({
  className,
  size = 24,
  fill = "currentColor",
}) => {
  const uniqueProps = {
    viewBox: "0 0 15 15",
    width: size,
    height: size,
    fill,
    className,
  };

  return (
    <svg {...{ ...defaultProps, ...uniqueProps }}>
      <path
        d="M15.563,8.063a7.5,7.5,0,1,1-7.5-7.5A7.5,7.5,0,0,1,15.563,8.063ZM7.195,12.034l5.565-5.565a.484.484,0,0,0,0-.684L12.075,5.1a.484.484,0,0,0-.684,0L6.853,9.639,4.734,7.52a.484.484,0,0,0-.684,0L3.366,8.2a.484.484,0,0,0,0,.684l3.145,3.145a.484.484,0,0,0,.684,0Z"
        transform="translate(-0.563 -0.563)"
      />
    </svg>
  );
};

CheckmarkCircle.displayName = "SVG.CheckmarkCircle";

export default CheckmarkCircle;
