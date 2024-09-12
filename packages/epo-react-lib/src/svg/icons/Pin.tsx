import { FunctionComponent } from "react";
import { SVGProps } from "@/types/svg";
import defaultProps from "./defaultProps";

const Pin: FunctionComponent<SVGProps> = ({
  className,
  size = 24,
  fill = "currentColor",
}) => {
  const uniqueProps = {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill,
    className,
  };

  return (
    <svg {...{ ...defaultProps, ...uniqueProps }}>
      <path d="m12 12.7c-2.4 0-4.3-1.9-4.3-4.3s1.9-4.4 4.3-4.4 4.3 1.9 4.3 4.3c0 2.5-1.9 4.4-4.3 4.4m0-12.4c-4.4 0-8 3.6-8 8v0.2c0.1 8.8 8 15.3 8 15.3s7.9-6.5 8-15.3v-0.2c0-4.4-3.6-8-8-8" />
    </svg>
  );
};

Pin.displayName = "SVG.Pin";

export default Pin;
