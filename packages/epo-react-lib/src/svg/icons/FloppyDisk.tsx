import { FunctionComponent } from "react";
import { SVGProps } from "@/types/svg";
import defaultProps from "./defaultProps";

const FloppyDisk: FunctionComponent<SVGProps> = ({
  className,
  size = 24,
  fill = "currentColor",
}) => {
  const uniqueProps = {
    viewBox: "0 0 16.191 16.191",
    width: size,
    height: size,
    fill,
    className,
  };

  const mergedSvgProps = Object.assign(defaultProps, uniqueProps);
  return (
    <svg {...mergedSvgProps}>
      <title>Floppy disk icon</title>
      <path
        d="M15.683,5.79,12.651,2.758a1.735,1.735,0,0,0-1.227-.508H1.735A1.735,1.735,0,0,0,0,3.985V16.706a1.735,1.735,0,0,0,1.735,1.735H14.456a1.735,1.735,0,0,0,1.735-1.735V7.016a1.735,1.735,0,0,0-.508-1.227ZM8.1,16.128a2.313,2.313,0,1,1,2.313-2.313A2.313,2.313,0,0,1,8.1,16.128ZM11.565,5.122V8.755a.434.434,0,0,1-.434.434H2.747a.434.434,0,0,1-.434-.434V5a.434.434,0,0,1,.434-.434h8.259a.434.434,0,0,1,.307.127l.126.126a.434.434,0,0,1,.127.307Z"
        transform="translate(0 -2.25)"
      />
    </svg>
  );
};

FloppyDisk.displayName = "SVG.FloppyDisk";

export default FloppyDisk;
