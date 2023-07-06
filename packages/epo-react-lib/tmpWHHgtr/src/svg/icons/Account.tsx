import { FunctionComponent } from "react";
import { SVGProps } from "@/types/svg";
import defaultProps from "./defaultProps";

const Account: FunctionComponent<SVGProps> = ({
  className,
  size = 20,
  fill = "currentColor",
}) => {
  const uniqueProps = {
    viewBox: "0 0 20 20",
    width: size,
    height: size,
    fill,
    className,
  };

  const mergedSvgProps = Object.assign(defaultProps, uniqueProps);

  return (
    <svg {...mergedSvgProps}>
      <title>Account icon</title>
      <path
        d="M10 0a10 10 0 1 0 10 10A10 10 0 0 0 10 0Zm0 3a3 3 0 1 1-3 3 3 3 0 0 1 3-3Zm0 14.2a7.2 7.2 0 0 1-6-3.22c.03-1.99 4-3.08 6-3.08s5.97 1.09 6 3.08a7.2 7.2 0 0 1-6 3.22Z"
        fill="currentColor"
      />
    </svg>
  );
};

Account.displayName = "SVG.Account";

export default Account;
