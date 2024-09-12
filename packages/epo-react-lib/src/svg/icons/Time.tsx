import { FunctionComponent } from "react";
import { SVGProps } from "@/types/svg";
import defaultProps from "./defaultProps";

const Time: FunctionComponent<SVGProps> = ({
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
      <path d="m11.8 1c-6 0-10.8 4.8-10.8 10.8s4.8 10.8 10.8 10.8 10.8-4.8 10.8-10.8-4.8-10.8-10.8-10.8zm0 19.8c-4.9 0-8.9-4-8.9-8.9s4-8.9 8.9-8.9 8.9 4 8.9 8.9c0.1 4.9-3.9 8.9-8.9 8.9z" />
      <path d="m17 15.4-5.4-3.1v-5.2c0-0.4-0.3-0.6-0.6-0.6-0.4 0-0.6 0.3-0.6 0.6v5.9l6 3.4c0.1 0.1 0.2 0.1 0.3 0.1 0.2 0 0.4-0.1 0.6-0.3 0.1-0.2 0-0.6-0.3-0.8z" />
    </svg>
  );
};

Time.displayName = "SVG.Time";

export default Time;
