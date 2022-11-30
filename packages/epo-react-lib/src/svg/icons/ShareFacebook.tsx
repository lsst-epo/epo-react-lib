import { FunctionComponent } from "react";
import { SVGProps } from "@/types/svg";
import defaultProps from "./defaultProps";

const ShareFacebook: FunctionComponent<SVGProps> = ({
  className,
  size = 52,
  fill = "currentColor",
}) => {
  const uniqueProps = {
    viewBox: "0 0 52 52",
    width: size,
    height: size,
    fill,
    className,
  };

  const mergedSvgProps = Object.assign(defaultProps, uniqueProps);
  return (
    <svg {...mergedSvgProps}>
      <title>Share Facebook</title>
      <path
        d="M479.775,314.913V300.128H474.8v-5.762h4.975v-4.25c0-4.933,3.013-7.616,7.412-7.616a41.276,41.276,0,0,1,4.448.225v5.155h-3.051c-2.392,0-2.857,1.137-2.857,2.8v3.682h5.706l-.745,5.762h-4.961v14.785Z"
        transform="translate(-458.34 -272.707)"
      />
    </svg>
  );
};

ShareFacebook.displayName = "SVG.ShareFacebook";

export default ShareFacebook;
