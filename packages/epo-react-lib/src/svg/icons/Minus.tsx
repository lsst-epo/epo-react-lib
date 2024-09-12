import { FunctionComponent } from "react";
import { SVGProps } from "@/types/svg";
import defaultProps from "./defaultProps";

const Minus: FunctionComponent<SVGProps> = ({
  className,
  size = 24,
  fill = "currentColor",
  stroke = "currentColor",
}) => {
  const uniqueProps = {
    viewBox: "0 0 16.971 16.971",
    width: size,
    height: size,
    fill,
    stroke,
    className,
  };

  return (
    <svg {...{ ...defaultProps, ...uniqueProps }}>
      <path
        d="M12,1.12,10.88,0,0,10.88,1.12,12Z"
        transform="translate(8.485 0) rotate(45)"
      />
    </svg>
  );
};

Minus.displayName = "SVG.Minus";

export default Minus;
