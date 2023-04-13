import { FunctionComponent } from "react";
import { SVGProps } from "@/types/svg";
import defaultProps from "./defaultProps";

const CheckeredFlag: FunctionComponent<SVGProps> = ({
  className,
  size = 24,
  fill = "currentColor",
}) => {
  const uniqueProps = {
    viewBox: "0 0 14 14",
    width: size,
    height: size,
    fill,
    className,
  };

  const mergedSvgProps = Object.assign(defaultProps, uniqueProps);
  return (
    <svg {...mergedSvgProps}>
      <title>Checkered flag icon</title>
      <g transform="translate(-3 29)">
        <g transform="translate(7.169 -25.817)">
          <path
            d="M-6-5.558l-7-1.234.926-5.25,7,1.234Z"
            transform="translate(13 12.042)"
            fill="#f4f4f4"
          />
        </g>
        <g transform="translate(13.036 -24.891)">
          <path
            d="M0-1.5l1.75.309.309-1.75L.309-3.25Z"
            transform="translate(0 3.25)"
            fill="#1e2121"
          />
        </g>
        <g transform="translate(10.978 -23.45)">
          <path
            d="M0-1.5l1.75.309.309-1.75L.309-3.25Z"
            transform="translate(0 3.25)"
            fill="#1e2121"
          />
        </g>
        <g transform="translate(9.537 -25.508)">
          <path
            d="M0-1.5l1.75.309.309-1.75L.309-3.25Z"
            transform="translate(0 3.25)"
            fill="#1e2121"
          />
        </g>
        <g transform="translate(7.478 -24.067)">
          <path
            d="M0-1.5l1.75.309.309-1.75L.309-3.25Z"
            transform="translate(0 3.25)"
            fill="#1e2121"
          />
        </g>
        <g transform="translate(12.419 -21.391)">
          <path
            d="M0-1.5l1.75.309.309-1.75L.309-3.25Z"
            transform="translate(0 3.25)"
            fill="#1e2121"
          />
        </g>
        <g transform="translate(8.919 -22.008)">
          <path
            d="M0-1.5l1.75.309.309-1.75L.309-3.25Z"
            transform="translate(0 3.25)"
            fill="#1e2121"
          />
        </g>
        <g transform="translate(5.154 -27.001)">
          <path
            d="M0-9.9l1.081.191L3.036-20.8a.548.548,0,0,0-.445-.635h0a.549.549,0,0,0-.636.445Z"
            transform="translate(0 21.441)"
            fill="#1f2020"
          />
        </g>
      </g>
    </svg>
  );
};

CheckeredFlag.displayName = "SVG.CheckeredFlag";

export default CheckeredFlag;
