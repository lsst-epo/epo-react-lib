import { FunctionComponent } from "react";
import { SVGProps } from "@/types/svg";
import defaultProps from "./defaultProps";

const LogOut: FunctionComponent<SVGProps> = ({
  className,
  size = 20,
  fill = "currentColor",
}) => {
  const uniqueProps = {
    viewBox: "0 0 20 15.241",
    width: size,
    height: size,
    fill,
    className,
  };

  return (
    <svg {...{ ...defaultProps, ...uniqueProps }}>
      <path
        d="m19.723 8.294-6.667 6.667a.954.954 0 0 1-1.627-.675v-3.81h-5.4a.95.95 0 0 1-.952-.952v-3.81a.95.95 0 0 1 .952-.952h5.4V.953a.955.955 0 0 1 1.627-.675l6.667 6.667a.961.961 0 0 1 0 1.349Zm-12.1 6.469v-1.587a.478.478 0 0 0-.476-.476H3.81a1.269 1.269 0 0 1-1.27-1.27V3.81a1.269 1.269 0 0 1 1.27-1.27h3.333a.478.478 0 0 0 .476-.476V.477a.478.478 0 0 0-.476-.476H3.81A3.811 3.811 0 0 0 0 3.81v7.619a3.811 3.811 0 0 0 3.81 3.81h3.333a.478.478 0 0 0 .476-.476Z"
        fill="currentColor"
      />
    </svg>
  );
};

LogOut.displayName = "SVG.LogOut";

export default LogOut;
