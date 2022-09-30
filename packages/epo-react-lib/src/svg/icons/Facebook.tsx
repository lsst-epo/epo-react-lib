import { FunctionComponent } from "react";
import { SVGProps } from "@/types/svg";
import defaultProps from "./defaultProps";

const Facebook: FunctionComponent<SVGProps> = ({
  className,
  size = 48,
  fill = "currentColor",
}) => {
  const uniqueProps = {
    viewBox: "0 0 48 48",
    width: size,
    height: size,
    fill,
    className,
  };

  const mergedSvgProps = Object.assign(defaultProps, uniqueProps);
  return (
    <svg {...mergedSvgProps}>
      <title>Facebook icon</title>
      <path d="M24.0005.3695a23.6305,23.6305,0,1,0,23.63,23.631A23.63105,23.63105,0,0,0,24.0005.3695m6.624,13.791-2.756.001c-2.175,0-2.579,1.033-2.579,2.55v3.332h5.156l-.675,5.252h-4.481v13.421h-5.419V25.2955h-4.501v-5.252h4.501v-3.851c0-4.482,2.726-6.922,6.724-6.922a37.13957,37.13957,0,0,1,4.03.206Z" />
    </svg>
  );
};

Facebook.displayName = "SVG.Facebook";

export default Facebook;
