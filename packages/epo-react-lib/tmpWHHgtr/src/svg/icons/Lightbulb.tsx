import { FunctionComponent } from "react";
import { SVGProps } from "@/types/svg";
import defaultProps from "./defaultProps";

const Lightbulb: FunctionComponent<SVGProps> = ({
  className,
  size = 24,
  fill = "currentColor",
}) => {
  const uniqueProps = {
    viewBox: "0 0 15 21",
    width: size,
    height: size,
    fill,
    className,
  };

  const mergedSvgProps = Object.assign(defaultProps, uniqueProps);
  return (
    <svg {...mergedSvgProps}>
      <title>Lightbulb icon</title>
      <path d="M4.093,18.635a1.278,1.278,0,0,0,.228.726l.728,1.054A1.378,1.378,0,0,0,6.185,21h2.63a1.378,1.378,0,0,0,1.135-.586l.728-1.054a1.277,1.277,0,0,0,.228-.726l0-1.573H4.091ZM0,7.219a7.026,7.026,0,0,0,1.856,4.749,11.687,11.687,0,0,1,2.225,3.751l0,.032h6.828l0-.032a11.687,11.687,0,0,1,2.225-3.751A7.026,7.026,0,0,0,15,7.219,7.364,7.364,0,0,0,7.477,0,7.329,7.329,0,0,0,0,7.219Z" />
    </svg>
  );
};

Lightbulb.displayName = "SVG.Info";

export default Lightbulb;
