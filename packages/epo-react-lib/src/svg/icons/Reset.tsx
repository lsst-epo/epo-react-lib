import { FunctionComponent } from "react";
import { SVGProps } from "@/types/svg";
import defaultProps from "./defaultProps";

const Reset: FunctionComponent<SVGProps> = ({
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
      <title>Reset icon</title>
      <path
        d="M15.007,9.647a2.144,2.144,0,1,0-2.144,2.144A2.15,2.15,0,0,0,15.007,9.647ZM12.863,0A9.648,9.648,0,0,0,3.216,9.647H0l4.288,4.288L8.575,9.647H5.359a7.508,7.508,0,1,1,3.151,6.11L6.989,17.3A9.647,9.647,0,1,0,12.863,0Z"
        transform="translate(19.295) rotate(90)"
      />
    </svg>
  );
};

Reset.displayName = "SVG.Reset";

export default Reset;
