import { FunctionComponent } from "react";
import { SVGProps } from "@/types/svg";
import defaultProps from "./defaultProps";

const Chevron: FunctionComponent<SVGProps> = ({
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
      <polygon points="15.212 22.283 5.204 12 15.212 1.717 18.796 5.203 12.181 12 18.796 18.797 15.212 22.283" />
    </svg>
  );
};

Chevron.displayName = "SVG.Caret";

export default Chevron;
