import { FunctionComponent } from "react";
import { SVGProps } from "@/types/svg";
import defaultProps from "./defaultProps";

const YouTube: FunctionComponent<SVGProps> = ({
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
      <title>YouTube icon</title>
      <path d="M46.6435,12.551a5.939,5.939,0,0,0-4.179-4.206c-3.685-.994-18.465-.994-18.465-.994s-14.778,0-18.464.994a5.93764,5.93764,0,0,0-4.178,4.206C.3695,16.26.3695,24,.3695,24s0,7.74.988,11.449a5.93764,5.93764,0,0,0,4.178,4.206c3.686.994,18.464.994,18.464.994s14.78,0,18.465-.994a5.939,5.939,0,0,0,4.179-4.206c.987-3.709.987-11.449.987-11.449s0-7.74-.987-11.449M19.1665,31.027V16.973L31.5185,24Z" />
    </svg>
  );
};

YouTube.displayName = "SVG.YouTube";

export default YouTube;
