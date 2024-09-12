import { FunctionComponent } from "react";
import { SVGProps } from "@/types/svg";
import defaultProps from "./defaultProps";

const ShareToggle: FunctionComponent<SVGProps> = ({
  className,
  size = 36,
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
      <path d="M18.4985,15.2245a2.34071,2.34071,0,0,0-1.72.753l-8.936-3.831c.003-.049.008-.097.008-.147,0-.049-.005-.097-.008-.146l8.936-3.832a2.34555,2.34555,0,1,0-.629-1.595c0,.049.005.097.008.146l-8.936,3.832a2.3485,2.3485,0,1,0,0,3.191l8.936,3.832c-.003.048-.008.096-.008.146a2.349,2.349,0,1,0,2.349-2.349" />
    </svg>
  );
};

ShareToggle.displayName = "SVG.ShareToggle";

export default ShareToggle;
