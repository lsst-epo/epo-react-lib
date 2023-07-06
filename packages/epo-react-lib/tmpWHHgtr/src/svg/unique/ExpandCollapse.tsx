import { FunctionComponent } from "react";
import { SVGProps } from "@/types/svg";
import defaultProps from "@/svg/icons/defaultProps";

interface ExpandCollapseProps extends SVGProps {
  isOpen: boolean;
}

const ExpandCollapse: FunctionComponent<ExpandCollapseProps> = ({
  className,
  size = 31,
  fill,
  isOpen = false,
}) => {
  const uniqueProps = {
    viewBox: "0 0 31 31",
    width: size,
    height: size,
    fill,
    className,
  };

  const mergedSvgProps = Object.assign(defaultProps, uniqueProps);
  return (
    <svg {...mergedSvgProps}>
      <title>{isOpen ? "Collapse" : "Expand"}</title>
      <rect
        data-name="Rectangle 3703"
        width={31}
        height={31}
        rx={2}
        fill={fill}
      />
      <path
        data-name="Line 8913"
        fill="none"
        stroke="#fff"
        strokeWidth={2}
        d="M8.5 15.5h14"
      />
      <path
        data-name="Line 8914"
        fill="none"
        stroke="#fff"
        strokeWidth={2}
        d="M15.5 8.5v14"
        style={{ visibility: isOpen ? "hidden" : "visible" }}
      />
    </svg>
  );
};

ExpandCollapse.displayName = "SVG.ExpandCollapse";

export default ExpandCollapse;
