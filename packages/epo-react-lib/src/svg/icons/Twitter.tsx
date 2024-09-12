import { FunctionComponent } from "react";
import { SVGProps } from "@/types/svg";
import defaultProps from "./defaultProps";

const Twitter: FunctionComponent<SVGProps> = ({
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

  return (
    <svg {...{ ...defaultProps, ...uniqueProps }}>
      <path d="M24.0005.3695a23.6305,23.6305,0,1,0,23.63,23.631A23.63105,23.63105,0,0,0,24.0005.3695m9.454,19.679c.009.204.014.408.014.614a13.49893,13.49893,0,0,1-20.78,11.372,9.59528,9.59528,0,0,0,7.027-1.965,4.75253,4.75253,0,0,1-4.434-3.297,4.72717,4.72717,0,0,0,2.143-.081,4.74886,4.74886,0,0,1-3.807-4.654v-.06a4.72689,4.72689,0,0,0,2.15.594,4.75353,4.75353,0,0,1-1.469-6.337,13.473,13.473,0,0,0,9.783,4.959,4.74928,4.74928,0,0,1,8.088-4.329,9.48,9.48,0,0,0,3.014-1.151,4.75657,4.75657,0,0,1-2.087,2.625,9.44836,9.44836,0,0,0,2.726-.747,9.63828,9.63828,0,0,1-2.368,2.457" />
    </svg>
  );
};

Twitter.displayName = "SVG.Twitter";

export default Twitter;
