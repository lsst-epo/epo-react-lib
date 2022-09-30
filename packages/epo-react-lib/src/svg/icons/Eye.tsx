import { FunctionComponent } from "react";
import { SVGProps } from "@/types/svg";
import defaultProps from "./defaultProps";

const Eye: FunctionComponent<SVGProps> = ({
  className,
  size = 40,
  fill = "currentColor",
}) => {
  const uniqueProps = {
    viewBox: "0 0 40.5 27",
    width: size,
    height: size,
    fill,
    className,
  };

  const mergedSvgProps = Object.assign(defaultProps, uniqueProps);
  return (
    <svg {...mergedSvgProps}>
      <path
        d="M40.255 12.473A22.552 22.552 0 0 0 20.25 0 22.555 22.555 0 0 0 .245 12.474a2.275 2.275 0 0 0 0 2.052A22.552 22.552 0 0 0 20.25 27a22.555 22.555 0 0 0 20.005-12.474 2.275 2.275 0 0 0 0-2.053ZM20.25 23.625A10.125 10.125 0 1 1 30.375 13.5 10.125 10.125 0 0 1 20.25 23.625Zm0-16.875a6.7 6.7 0 0 0-1.78.266 3.364 3.364 0 0 1-4.7 4.7 6.735 6.735 0 1 0 6.484-4.97Z"
        fill="currentColor"
      />
    </svg>
  );
};

Eye.displayName = "SVG.Eye";

export default Eye;
