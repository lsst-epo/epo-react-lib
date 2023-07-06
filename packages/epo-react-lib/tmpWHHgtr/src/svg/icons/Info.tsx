import { FunctionComponent } from "react";
import { SVGProps } from "@/types/svg";
import defaultProps from "./defaultProps";

const Info: FunctionComponent<SVGProps> = ({
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
      <title>Info icon</title>
      <path d="m15.6 7.1c-0.3 1.1-1.4 1.7-2.5 1.4s-1.7-1.4-1.4-2.5 1.4-1.7 2.5-1.4c1 0.3 1.7 1.4 1.4 2.5m-1.9 11.2-0.3 0.7c-4 1.5-5.3-0.7-4.5-2.7l1.7-4.1c0.3-0.8 0.2-1.7-1.8-1.7l0.3-0.7c4-1.5 5.3 0.7 4.5 2.7l-1.7 4.1c-0.4 0.8-0.3 1.6 1.8 1.7m-1.8-17.4c-6.1 0-11 4.9-11 11s4.9 11 11 11 11-4.9 11-11-4.9-11-11-11" />
    </svg>
  );
};

Info.displayName = "SVG.Info";

export default Info;
