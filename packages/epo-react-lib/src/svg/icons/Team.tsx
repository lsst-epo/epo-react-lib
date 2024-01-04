import { FunctionComponent } from "react";
import { SVGProps } from "@/types/svg";
import defaultProps from "./defaultProps";

const Team: FunctionComponent<SVGProps> = ({
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
      <path d="m11.9 12.2c1.2 0 2.1-0.9 2.1-2.1s-0.9-2.1-2.1-2.1-2.1 0.9-2.1 2.1 0.9 2.1 2.1 2.1z" />
      <path d="m19.7 12.3c1 0 1.8-0.8 1.8-1.8s-0.8-1.8-1.8-1.8-1.8 0.8-1.8 1.8 0.7 1.8 1.8 1.8z" />
      <path d="m23.4 16.4-0.5-1.8c-0.4-1.6-2.5-1.6-3.4-1.6s-3 0-3.4 1.6l-0.1 0.6-0.2-0.9c-0.5-1.8-2.8-1.8-3.9-1.8s-3.4 0-3.8 1.8l-0.2 0.9-0.2-0.7c-0.5-1.6-2.5-1.5-3.4-1.5s-3 0-3.4 1.6l-0.5 1.8h23z" />
      <path d="m4.2 12.3c1 0 1.8-0.8 1.8-1.8s-0.8-1.9-1.8-1.9-1.8 0.8-1.8 1.8 0.8 1.9 1.8 1.9z" />
    </svg>
  );
};

Team.displayName = "SVG.Team";

export default Team;
