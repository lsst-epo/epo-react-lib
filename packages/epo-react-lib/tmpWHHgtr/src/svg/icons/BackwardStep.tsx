import { FunctionComponent } from "react";
import { SVGProps } from "@/types/svg";
import defaultProps from "./defaultProps";

const BackwardStep: FunctionComponent<SVGProps> = ({
  className,
  size = 24,
  fill = "currentColor",
}) => {
  const uniqueProps = {
    viewBox: "0 0 9 9",
    width: size,
    height: size,
    fill,
    className,
  };

  const mergedSvgProps = Object.assign(defaultProps, uniqueProps);
  return (
    <svg {...mergedSvgProps}>
      <title>Backward step icon</title>
      <path
        d="M8.972,6.862v3.876L15.41,6.809A.226.226,0,0,1,15.75,7V15.5a.226.226,0,0,1-.34.194L8.972,11.762v3.876a.113.113,0,0,1-.113.113h-2a.113.113,0,0,1-.113-.113V6.862a.113.113,0,0,1,.113-.112h2A.113.113,0,0,1,8.972,6.862Z"
        transform="translate(-6.75 -6.75)"
      />
    </svg>
  );
};

BackwardStep.displayName = "SVG.BackwardStep";

export default BackwardStep;
