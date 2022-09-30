import { FunctionComponent } from "react";
import { SVGProps } from "@/types/svg";
import defaultProps from "./defaultProps";

const Cloud: FunctionComponent<SVGProps> = ({
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
      <title>Cloud icon</title>
      <path d="m20.8 12.1h-1.1c-0.3-1.8-1.9-3.1-3.7-3.2-0.8 0-1.6 0.3-2.3 0.8-0.9-2.8-3.8-4.4-6.6-3.5-2.2 0.7-3.7 2.7-3.7 5-1.7 0.2-2.9 1.8-2.7 3.5 0.2 1.5 1.4 2.6 2.9 2.7h17.2c1.5 0 2.7-1.2 2.7-2.7s-1.2-2.6-2.7-2.6z" />
    </svg>
  );
};

Cloud.displayName = "SVG.Cloud";

export default Cloud;
