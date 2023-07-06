import { FunctionComponent } from "react";
import { SVGProps } from "@/types/svg";
import defaultProps from "./defaultProps";

const Calendar: FunctionComponent<SVGProps> = ({
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
      <title>Calendar icon</title>
      <path d="m6.8 4.8c0.3 0 0.6-0.3 0.6-0.6v-3.5c0-0.3-0.2-0.6-0.5-0.6s-0.6 0.2-0.7 0.5v0.1 3.6c0 0.3 0.3 0.5 0.6 0.5" />
      <path d="m20.2 21.6h-16.2v-14.4h16.2v14.4zm0.6-20h-2.6v1.8c0.5 0.5 0.4 1.2 0 1.7-0.5 0.5-1.2 0.4-1.7 0-0.2-0.2-0.3-0.5-0.3-0.8s0.1-0.6 0.3-0.8v-1.9h-8.9v1.8c0.5 0.5 0.4 1.2 0 1.7-0.5 0.5-1.2 0.4-1.7 0-0.2-0.3-0.3-0.5-0.3-0.8s0.1-0.6 0.4-0.9v-1.8h-2.6c-0.8 0-1.4 0.6-1.4 1.4v19.2c0 0.8 0.6 1.4 1.4 1.4h17.4c0.8 0 1.4-0.6 1.4-1.4v-19.2c0-0.8-0.6-1.4-1.4-1.4" />
      <path d="m17.4 4.8c0.3 0 0.6-0.3 0.6-0.6v-3.5c0-0.3-0.2-0.6-0.5-0.6s-0.6 0.2-0.6 0.5v0.1 3.6c-0.1 0.3 0.2 0.5 0.5 0.5" />
    </svg>
  );
};

Calendar.displayName = "SVG.Calendar";

export default Calendar;
