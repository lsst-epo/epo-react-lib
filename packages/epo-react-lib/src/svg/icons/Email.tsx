import { FunctionComponent } from "react";
import { SVGProps } from "@/types/svg";
import defaultProps from "./defaultProps";

const Email: FunctionComponent<SVGProps> = ({
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
      <path d="M21.2026,24.0003l-9.018,7.297V16.7023Zm3.3302,1.8315a.84747.84747,0,0,1-1.067,0l-.915-.74-9.017,7.297h20.932l-9.017-7.298ZM23.9995.3695a23.6305,23.6305,0,1,1-23.63,23.63,23.63084,23.63084,0,0,1,23.63-23.63m14.561,15.241a2.745,2.745,0,0,0-2.745-2.745H12.1845a2.745,2.745,0,0,0-2.745,2.745v16.778a2.745,2.745,0,0,0,2.745,2.745h23.631a2.745,2.745,0,0,0,2.745-2.745Zm-4.094.0003H13.5335l10.466,8.47Zm1.3486,15.6864V16.7022l-9.018,7.297Z" />
    </svg>
  );
};

Email.displayName = "SVG.Email";

export default Email;
