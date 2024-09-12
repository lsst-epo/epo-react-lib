import { FunctionComponent } from "react";
import { stripUnit } from "@castiron/style-mixins";
import { SVGProps } from "@/types/svg";
import defaultProps from "./defaultProps";

const CaretDown: FunctionComponent<SVGProps> = ({
  className,
  size = 18,
  fill = "currentColor",
}) => {
  const uniqueProps = {
    viewBox: "0 0 18 9",
    width: size,
    height: stripUnit(size) / 2,
    fill,
    className,
  };

  return (
    <svg {...{ ...defaultProps, ...uniqueProps }}>
      <path d="M0,0,9,9l9-9Z" />
    </svg>
  );
};

CaretDown.displayName = "SVG.CaretDown";

export default CaretDown;
