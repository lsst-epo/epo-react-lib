import { FunctionComponent } from "react";
import { SVGProps } from "@/types/svg";
import defaultProps from "./defaultProps";

const UserInverted: FunctionComponent<SVGProps> = ({
  className,
  size = 64,
  fill = "currentColor",
}) => {
  const uniqueProps = {
    viewBox: "0 0 64 64",
    width: size,
    height: size,
    fill,
    className,
  };

  const mergedSvgProps = Object.assign(defaultProps, uniqueProps);
  return (
    <svg {...mergedSvgProps}>
      <title>Inverted User icon</title>
      <path d="M32 1.1C14.9 1.1 1.1 14.9 1.1 32c0 17.1 13.8 30.9 30.9 30.9 17.1 0 30.9-13.8 30.9-30.9C62.9 15 49.1 1.1 32 1.1zm0 12c6.1 0 11 4.9 11 11S38 35 32 35c-6.1 0-11-4.9-11-11 0-6 4.9-10.9 11-10.9zm0 42.8c-7 0-13.7-3.1-18.2-8.5C16.1 42.8 20.9 40 26 40c.3 0 .6 0 .9.1 1.6.6 3.4.8 5.1.9 1.7 0 3.5-.3 5.1-.9.3-.1.6-.1.9-.1 5.2 0 9.9 2.9 12.3 7.4-4.6 5.4-11.3 8.5-18.3 8.5z" />
    </svg>
  );
};

UserInverted.displayName = "SVG.UserInverted";

export default UserInverted;
