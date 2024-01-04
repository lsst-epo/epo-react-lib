import { FunctionComponent } from "react";
import { SVGProps } from "@/types/svg";
import defaultProps from "./defaultProps";

const Cancel: FunctionComponent<SVGProps> = ({
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
      <path
        fill="#ed4c4c"
        transform="translate(-.57 -.57)"
        d="M12,23.46A11.45,11.45,0,1,0,.57,12,11.44,11.44,0,0,0,12,23.46"
      />
      <path
        fill="white"
        transform="translate(-.57 -.57)"
        d="M10.73,12,7.44,8.72,8.7,7.45,12,10.73l3.32-3.28L16.6,8.69,13.27,12l3.29,3.3-1.25,1.27L12,13.3,8.75,16.59,7.48,15.32Z"
      />
    </svg>
  );
};

Cancel.displayName = "SVG.Cancel";

export default Cancel;
