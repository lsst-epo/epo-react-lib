import { FunctionComponent } from "react";
import { SVGProps } from "@/types/svg";
import defaultProps from "./defaultProps";

const Play: FunctionComponent<SVGProps> = ({
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
      <title>Play icon</title>
      <path d="M12,0.3C5.5,0.3,0.3,5.5,0.3,12S5.5,23.7,12,23.7S23.7,18.5,23.7,12S18.5,0.3,12,0.3z M8.4,18V6l10.3,6L8.4,18z  " />
    </svg>
  );
};

Play.displayName = "SVG.Play";

export default Play;
