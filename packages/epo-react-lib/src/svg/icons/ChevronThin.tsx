import { FunctionComponent } from "react";
import { SVGProps } from "@/types/svg";
import defaultProps from "./defaultProps";

const ChevronThin: FunctionComponent<SVGProps> = ({
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

  return (
    <svg {...{ ...defaultProps, ...uniqueProps }}>
      <path d="M10.16326,12.004l6.123,6.119a1.151,1.151,0,0,1,.00525,1.62775l-.00525.00525a1.166,1.166,0,0,1-1.638,0l-6.937-6.933a1.154,1.154,0,0,1-.034-1.595l6.966-6.98a1.15647,1.15647,0,1,1,1.638,1.633h0Z" />
    </svg>
  );
};

ChevronThin.displayName = "SVG.ChevronThin";

export default ChevronThin;
