import { FunctionComponent } from "react";
import { SVGProps } from "@/types/svg";
import defaultProps from "./defaultProps";

const ShareTwitter: FunctionComponent<SVGProps> = ({
  className,
  size = 52,
  fill = "currentColor",
}) => {
  const uniqueProps = {
    viewBox: "0 0 52 52",
    width: size,
    height: size,
    fill,
    className,
  };

  return (
    <svg {...{ ...defaultProps, ...uniqueProps }}>
      <path
        d="M413.849,480.992q.014.336.014.676A14.85,14.85,0,0,1,391,494.179a10.539,10.539,0,0,0,7.731-2.163,5.228,5.228,0,0,1-4.878-3.626,5.231,5.231,0,0,0,2.357-.09,5.224,5.224,0,0,1-4.188-5.12v-.066a5.2,5.2,0,0,0,2.364.652,5.228,5.228,0,0,1-1.615-6.971,14.833,14.833,0,0,0,10.764,5.457,5.224,5.224,0,0,1,8.9-4.763,10.449,10.449,0,0,0,3.318-1.269,5.238,5.238,0,0,1-2.295,2.888,10.453,10.453,0,0,0,3-.822,10.619,10.619,0,0,1-2.607,2.7"
        transform="translate(-377.445 -459.339)"
      />
    </svg>
  );
};

ShareTwitter.displayName = "SVG.ShareTwitter";

export default ShareTwitter;
