import { FunctionComponent } from "react";
import { SVGProps } from "@/types/svg";
import defaultProps from "./defaultProps";

const Expand: FunctionComponent<SVGProps> = ({
  className,
  size = 17,
  fill = "currentColor",
}) => {
  const uniqueProps = {
    viewBox: "0 0 17 17",
    width: size,
    height: size,
    fill,
    className,
  };

  const mergedSvgProps = Object.assign(defaultProps, uniqueProps);
  return (
    <svg {...mergedSvgProps}>
      <title>Expand icon</title>
      <path
        d="M10.94,16V13.538h2.6v-2.6H16V16ZM0,16V10.94H2.462v2.6h2.6V16ZM13.538,5.06v-2.6h-2.6V0H16V5.06ZM0,5.06V0H5.06V2.462h-2.6v2.6Z"
        transform="translate(0.5 0.5)"
        strokeMiterlimit={10}
        strokeWidth={1}
      />
    </svg>
  );
};

Expand.displayName = "SVG.Expand";

export default Expand;
