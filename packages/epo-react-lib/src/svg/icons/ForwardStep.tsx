import { FunctionComponent } from "react";
import { SVGProps } from "@/types/svg";
import defaultProps from "./defaultProps";

const ForwardStep: FunctionComponent<SVGProps> = ({
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

  return (
    <svg {...{ ...defaultProps, ...uniqueProps }}>
      <path
        d="M13.528,6.862v3.876L7.09,6.809A.226.226,0,0,0,6.75,7V15.5a.226.226,0,0,0,.34.194l6.438-3.929v3.876a.113.113,0,0,0,.113.113h2a.113.113,0,0,0,.113-.113V6.862a.113.113,0,0,0-.113-.112h-2A.113.113,0,0,0,13.528,6.862Z"
        transform="translate(-6.75 -6.75)"
      />
    </svg>
  );
};

ForwardStep.displayName = "SVG.ForwardStep";

export default ForwardStep;
