import { FunctionComponent } from "react";
import { SVGProps } from "@/types/svg";
import defaultProps from "./defaultProps";

const LockClosed: FunctionComponent<SVGProps> = ({
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

  const mergedSvgProps = Object.assign(defaultProps, uniqueProps);
  return (
    <svg {...mergedSvgProps}>
      <path d="m13.6 21.3h-3.3l0.6-3c-0.8-0.6-1-1.7-0.4-2.5s1.7-1 2.5-0.4 1 1.7 0.4 2.5c-0.1 0.2-0.3 0.3-0.4 0.4l0.6 3zm-10.6 2.7h18v-12.2h-18v12.2z" />
      <path d="m8.3 8.3c0-2 1.7-3.7 3.7-3.7s3.7 1.7 3.7 3.7v2.6h4.1v-2.6c0-4.3-3.5-7.8-7.8-7.8s-7.8 3.5-7.8 7.8v2.6h4.1v-2.6z" />
    </svg>
  );
};

LockClosed.displayName = "SVG.LockClosed";

export default LockClosed;
