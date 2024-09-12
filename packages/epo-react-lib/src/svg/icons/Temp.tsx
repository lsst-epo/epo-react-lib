import { FunctionComponent } from "react";
import { SVGProps } from "@/types/svg";
import defaultProps from "./defaultProps";

const Temp: FunctionComponent<SVGProps> = ({
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
      <path d="m14.6 16.6v-13.6c0-1.7-1.4-3-3-3s-3 1.4-3 3v13.5c-1.6 1.7-1.6 4.3 0.1 5.9s4.3 1.6 5.9-0.1c1.5-1.5 1.5-4.1 0-5.7zm-3 6c-1.7 0-3.1-1.4-3.1-3.2 0-0.9 0.4-1.8 1.2-2.4v-14c0-1.1 0.9-2 2-2s2 0.9 2 2v14c1.3 1.1 1.5 3.1 0.4 4.4-0.7 0.8-1.6 1.2-2.5 1.2z" />
      <path d="m12.3 17.7v-6.1h-1.6v6.1c-1 0.4-1.5 1.6-1 2.6 0.4 1 1.6 1.5 2.6 1 1-0.4 1.5-1.6 1-2.6-0.1-0.5-0.5-0.8-1-1z" />
    </svg>
  );
};

Temp.displayName = "SVG.Temp";

export default Temp;
