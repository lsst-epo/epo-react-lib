import { FunctionComponent } from "react";
import { SVGProps } from "@/types/svg";
import defaultProps from "./defaultProps";

const Page: FunctionComponent<SVGProps> = ({
  className,
  size = 24,
  fill = "currentColor",
}) => {
  const uniqueProps = {
    viewBox: "0 0 14.297 18.117",
    width: size,
    height: size,
    fill,
    className,
  };

  const mergedSvgProps = Object.assign(defaultProps, uniqueProps);
  return (
    <svg {...mergedSvgProps}>
      <path
        d="M14.936,3H7.787A1.8,1.8,0,0,0,6.009,4.812L6,19.305a1.8,1.8,0,0,0,1.778,1.812H18.51A1.8,1.8,0,0,0,20.3,19.305V8.435Z"
        transform="translate(-6 -3)"
      />
    </svg>
  );
};

Page.displayName = "SVG.Page";

export default Page;
