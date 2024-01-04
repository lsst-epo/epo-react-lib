import { FunctionComponent } from "react";
import { SVGProps } from "@/types/svg";
import defaultProps from "./defaultProps";

const Checkmark: FunctionComponent<SVGProps> = ({
  className,
  size = 24,
  fill = "currentColor",
}) => {
  const uniqueProps = {
    viewBox: "0 0 10 7.614",
    width: size,
    height: size,
    fill,
    className,
  };

  const mergedSvgProps = Object.assign(defaultProps, uniqueProps);
  return (
    <svg {...mergedSvgProps}>
      <path
        d="M8.282,14.423,5.9,12.036l-.8.8,3.182,3.182L15.1,9.2l-.8-.8Z"
        transform="translate(-5.1 -8.4)"
      />
    </svg>
  );
};

Checkmark.displayName = "SVG.Checkmark";

export default Checkmark;
