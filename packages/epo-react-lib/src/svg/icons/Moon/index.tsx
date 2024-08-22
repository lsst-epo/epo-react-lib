import { FunctionComponent } from "react";
import { SVGProps } from "@/types/svg";
import defaultProps from "../defaultProps";

import phases from "./parts";

const Moon: FunctionComponent<SVGProps> = ({
  phase = 0,
  className,
  size = 46,
  fill = "currentColor",
  svgProps,
}) => {
  const uniqueProps = {
    ...svgProps,
    viewBox: "0 0 46 46",
    width: size,
    height: size,
    fill,
    className,
  };

  const pathProps =
    phases[Math.min(Math.floor(phase * phases.length), phases.length - 1)];

  return (
    <svg {...{ ...defaultProps, ...uniqueProps }}>
      <ellipse cx="23" cy="23" rx="23" ry="23" fill="#dce0e3" />
      <path
        d="M16,36.5a2.486,2.486,0,0,1,.178-.928A3.5,3.5,0,0,1,11.035,33H11a8.962,8.962,0,0,1-5.534-1.9,23.134,23.134,0,0,1-.84-13.452A9.026,9.026,0,0,1,7,15.938a7.949,7.949,0,0,1-1.75-.425A23.066,23.066,0,0,1,14.67,3.581,7.963,7.963,0,0,1,16,8c0,.115,0,.23-.007.344a6,6,0,1,1,3.028,11.569,8.919,8.919,0,0,1,.758,2.093C19.851,22,19.925,22,20,22a4,4,0,1,1-1.894,7.524,9,9,0,0,1-.794.892,3.506,3.506,0,0,1,.26,3.763A2.479,2.479,0,0,1,18.5,34a2.5,2.5,0,1,1,2,1A2.5,2.5,0,1,1,16,36.5ZM11.81,15.036c.1.008.19.018.284.03-.011-.058-.02-.116-.029-.175C11.982,14.942,11.9,14.99,11.81,15.036ZM40,28a3,3,0,1,1,3,3A3,3,0,0,1,40,28Zm-9-3.5a4.545,4.545,0,0,1,.058-.723,5.512,5.512,0,0,1-5.074-1.049A1.5,1.5,0,1,1,24.5,21c.034,0,.068,0,.1,0a5.5,5.5,0,1,1,10.175-.946A4.5,4.5,0,0,1,40,24.5a4.5,4.5,0,1,1-9,0ZM41,20a3,3,0,1,1,3,3A3,3,0,0,1,41,20ZM23,9a1,1,0,1,1,1,1A1,1,0,0,1,23,9ZM38,5.5a1.5,1.5,0,0,1,2.274-1.286l.192.137A1.5,1.5,0,1,1,38,5.5Z"
        transform="translate(-4 0)"
        fill="#babfbf"
      />
      <path
        d="M11.088,42.679a6.714,6.714,0,1,1,12.969,3.3Q23.531,46,23,46A22.891,22.891,0,0,1,11.088,42.679Zm23.666-2.514a5.166,5.166,0,0,1,7.514-4.6,23.124,23.124,0,0,1-6.983,6.883A5.144,5.144,0,0,1,34.754,40.164Z"
        fill="#e9edf0"
      />
      <path fill="#000000" {...pathProps} />
    </svg>
  );
};

Moon.displayName = "SVG.Moon";

export default Moon;
