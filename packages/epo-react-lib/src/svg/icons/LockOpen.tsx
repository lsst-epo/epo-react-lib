import { FunctionComponent } from "react";
import { SVGProps } from "@/types/svg";
import defaultProps from "./defaultProps";

const LockOpen: FunctionComponent<SVGProps> = ({
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
      <path d="m13.4 21.5h-2.8l0.5-2.6c-0.7-0.5-0.9-1.5-0.4-2.2s1.5-0.9 2.2-0.4 0.9 1.5 0.4 2.2c-0.1 0.2-0.2 0.3-0.4 0.4l0.5 2.6zm-9.2 2.4h15.6v-10.6h-15.6v10.6z" />
      <path d="m8.8 6.9c0-1.8 1.4-3.2 3.2-3.2s3.2 1.4 3.2 3.2v1.3h3.5v-1.3c0-3.7-3-6.7-6.7-6.7s-6.7 3-6.7 6.7v5.4h3.5v-5.4z" />
    </svg>
  );
};

LockOpen.displayName = "SVG.LockOpen";

export default LockOpen;
