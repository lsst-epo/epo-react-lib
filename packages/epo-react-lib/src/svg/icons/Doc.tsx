import { FunctionComponent } from "react";
import { SVGProps } from "@/types/svg";
import defaultProps from "./defaultProps";

const Doc: FunctionComponent<SVGProps> = ({
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
      <path d="m4.6 21.6v-19.3h9.4v5.4h5.4v14l-14.8-0.1zm16.8-14c0-0.5-0.2-1.1-0.6-1.5l-5.4-5.4c-0.4-0.4-0.9-0.6-1.5-0.6h-9.3c-1.1 0-2.1 0.9-2.1 2.1v19.4c0 1.1 0.9 2.1 2.1 2.1h14.7c1.1 0 2.1-0.9 2.1-2.1v-14z" />
    </svg>
  );
};

Doc.displayName = "SVG.Doc";

export default Doc;
