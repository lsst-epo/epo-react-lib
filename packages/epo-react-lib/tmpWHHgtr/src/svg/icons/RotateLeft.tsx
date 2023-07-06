import { FunctionComponent } from "react";
import { SVGProps } from "@/types/svg";
import defaultProps from "./defaultProps";

const RotateLeft: FunctionComponent<SVGProps> = ({
  className,
  size = 24,
  fill = "currentColor",
}) => {
  const uniqueProps = {
    viewBox: "0 0 15 17.5",
    width: size,
    height: size,
    fill,
    className,
  };

  const mergedSvgProps = Object.assign(defaultProps, uniqueProps);
  return (
    <svg {...mergedSvgProps}>
      <title>Rotate left icon</title>
      <path
        d="M10,4.5A7.5,7.5,0,0,0,2.5,12H0l3.333,3.333L6.667,12h-2.5a5.837,5.837,0,1,1,2.45,4.75l-1.183,1.2A7.5,7.5,0,1,0,10,4.5Z"
        transform="translate(19.5) rotate(90)"
      />
    </svg>
  );
};

RotateLeft.displayName = "SVG.RotateLeft";

export default RotateLeft;
