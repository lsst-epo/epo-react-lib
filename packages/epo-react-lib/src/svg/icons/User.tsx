import { FunctionComponent } from "react";
import { SVGProps } from "@/types/svg";
import defaultProps from "./defaultProps";

const User: FunctionComponent<SVGProps> = ({
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
      <path d="M32.084,18.41269a8.08345,8.08345,0,0,1-16.1669-.00284v-.001a8.08345,8.08345,0,1,1,16.1669.00382ZM46.5,24A22.5,22.5,0,1,1,24,1.5,22.52495,22.52495,0,0,1,46.5,24Zm-2.31577,0A20.18425,20.18425,0,1,0,8.55377,36.96708l.68755-2.5573c1.88-6.99547,10.802-6.82949,14.75827-6.82949,3.95638,0,12.87834-.16407,14.75834,6.82949l.6872,2.55846A20.08472,20.08472,0,0,0,44.18423,24Z" />
    </svg>
  );
};

User.displayName = "SVG.User";

export default User;
