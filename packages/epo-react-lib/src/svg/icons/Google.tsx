import { FunctionComponent } from "react";
import { SVGProps } from "@/types/svg";
import defaultProps from "./defaultProps";

const Google: FunctionComponent<SVGProps> = ({
  className,
  size = 30,
  fill = "currentColor",
}) => {
  const uniqueProps = {
    viewBox: "0 0 30 30.492",
    width: size,
    height: size,
    fill,
    className,
  };

  const mergedSvgProps = Object.assign(defaultProps, uniqueProps);
  return (
    <svg {...mergedSvgProps}>
      <title>Google icon</title>
      <path d="M30 15.602c0 8.7-5.957 14.889-14.754 14.889a15.246 15.246 0 1 1 0-30.492 14.661 14.661 0 0 1 10.223 3.99l-4.15 3.99C15.891 2.737 5.8 6.676 5.8 15.245a9.55 9.55 0 0 0 9.449 9.627c6.037 0 8.3-4.328 8.656-6.572h-8.659v-5.243H29.76a13.365 13.365 0 0 1 .24 2.545Z" />
    </svg>
  );
};

Google.displayName = "SVG.Google";

export default Google;
