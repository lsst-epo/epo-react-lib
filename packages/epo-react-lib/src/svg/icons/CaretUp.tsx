import { FunctionComponent } from "react";
import { stripUnit } from "@castiron/style-mixins";
import { SVGProps } from "@/types/svg";
import defaultProps from "./defaultProps";

const CaretUp: FunctionComponent<SVGProps> = ({
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
    <svg {...{ ...defaultProps, ...uniqueProps }} style={{ 
        transform: 'scaleY(-1)', 
        transformOrigin: 'center' 
      }}>
      <path d="M0,0,9,9l9-9Z" />
    </svg>
  );
};

CaretUp.displayName = "SVG.CaretDown";

export default CaretUp;
