import { FunctionComponent } from "react";
import { SVGProps } from "@/types/svg";
import defaultProps from "./defaultProps";
import { stripUnit } from "@castiron/style-mixins";
<svg
  xmlns="http://www.w3.org/2000/svg"
  width="6.878"
  height="21.877"
  viewBox="0 0 6.878 21.877"
></svg>;

const ChevronLeftElongated: FunctionComponent<SVGProps> = ({
  className,
  size = 24,
  fill = "currentColor",
  stroke = "currentColor",
}) => {
  const uniqueProps = {
    viewBox: "0 0 6.878 21.877",
    width: stripUnit(size) / 2,
    height: size,
    fill,
    className,
    stroke,
  };

  const mergedSvgProps = Object.assign(defaultProps, uniqueProps);
  return (
    <svg {...mergedSvgProps}>
      <line y1="11" x2="6" transform="translate(0.439 0.239)" strokeWidth="1" />
      <line
        x2="6"
        y2="11"
        transform="translate(0.439 10.638)"
        strokeWidth="1"
      />
    </svg>
  );
};

ChevronLeftElongated.displayName = "SVG.ChevronLeftElongated";

export default ChevronLeftElongated;
