import { FunctionComponent } from "react";
import { SVGProps } from "@/types/svg";
import defaultProps from "./defaultProps";

const Mail: FunctionComponent<SVGProps> = ({
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

  return (
    <svg {...{ ...defaultProps, ...uniqueProps }}>
      <polygon points="24.942 26.726 23.057 26.726 20.522 25.018 7.929 33.5 40.07 33.5 27.477 25.014 24.942 26.726" />
      <polygon points="7.93 31.468 19.013 24.001 7.93 16.532 7.93 31.468" />
      <polygon points="28.987 24.001 40.071 31.468 40.071 16.532 28.987 24.001" />
      <polygon points="7.93 14.5 24 25.327 40.07 14.5 7.93 14.5" />
    </svg>
  );
};

Mail.displayName = "SVG.Mail";

export default Mail;
