import { FunctionComponent } from "react";
import { SVGProps } from "@/types/svg";
import defaultProps from "./defaultProps";

const Thumbtack: FunctionComponent<SVGProps> = ({
  className,
  size = 24,
  fill = "currentColor",
}) => {
  const uniqueProps = {
    viewBox: "0 0 6.943 7.894",
    width: size,
    height: size,
    fill,
    className,
  };

  const mergedSvgProps = Object.assign(defaultProps, uniqueProps);
  return (
    <svg {...mergedSvgProps}>
      <title>Thumbtack icon</title>
      <g transform="translate(-1442.963 821.797)">
        <path
          d="M3.725,4.9h0L3.1,4.883,0,.452.408.166,2.067,2.534.408.166.646,0l3.44,4.914Z"
          transform="translate(1445.821 -818.816)"
          fill="#898c8c"
        />
        <path
          d="M2.411,4.826,1.259,2.785A2.627,2.627,0,0,1,0,2.569L3.318.246,3.67,0a2.627,2.627,0,0,1-.228,1.257L4.965,3.038A2.924,2.924,0,0,1,6.9,3.653L6.6,3.86,2.328,6.854A2.93,2.93,0,0,1,2.411,4.826ZM6.473,3.789a3.369,3.369,0,0,0-1.488-.36A3.369,3.369,0,0,1,6.473,3.789Zm-3.421-2.4L4.8,3.433l.078,0-.078,0L3.052,1.385Zm1.9,2.044h0Z"
          transform="translate(1442.963 -821.797)"
          fill="#ec4b4b"
        />
      </g>
    </svg>
  );
};

Thumbtack.displayName = "SVG.Thumbtack";

export default Thumbtack;
