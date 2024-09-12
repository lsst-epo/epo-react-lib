import { FunctionComponent } from "react";
import { SVGProps } from "@/types/svg";
import defaultProps from "./defaultProps";

const InfoCircle: FunctionComponent<SVGProps> = ({
  className,
  size = 24,
  fill = "currentColor",
}) => {
  const uniqueProps = {
    viewBox: "-1 -1 20 20",
    width: size,
    height: size,
    fill,
    className,
    stroke: "currentColor",
  };

  return (
    <svg {...{ ...defaultProps, ...uniqueProps }}>
      <path
        d="M20.883,11.941A8.941,8.941,0,1,1,11.941,3a8.941,8.941,0,0,1,8.941,8.941Z"
        transform="translate(-3 -3)"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M18,21.577V18"
        transform="translate(-9.059 -9.059)"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M18,12h0"
        transform="translate(-9.059 -6.635)"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
};

InfoCircle.displayName = "SVG.InfoCircle";

export default InfoCircle;
