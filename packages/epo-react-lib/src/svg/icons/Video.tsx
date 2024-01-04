import { FunctionComponent } from "react";
import { SVGProps } from "@/types/svg";
import defaultProps from "./defaultProps";

const Video: FunctionComponent<SVGProps> = ({
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
      <path d="m11.8 14.9c2.7 0 5-2.2 5-5 0-2.7-2.2-5-5-5-2.7 0-5 2.2-5 5s2.2 5 5 5zm-1.7-7.5 4.6 2.6-4.6 2.6v-5.2z" />
      <path d="M1.5,0.8v22.8h20.6V0.8H1.5z M20.1,16.7H3.4V2.8h16.7V16.7z" />
    </svg>
  );
};

Video.displayName = "SVG.Video";

export default Video;
