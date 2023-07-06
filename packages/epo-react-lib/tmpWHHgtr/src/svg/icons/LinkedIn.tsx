import { FunctionComponent } from "react";
import { SVGProps } from "@/types/svg";
import defaultProps from "./defaultProps";

const LinkedIn: FunctionComponent<SVGProps> = ({
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

  const mergedSvgProps = Object.assign(defaultProps, uniqueProps);
  return (
    <svg {...mergedSvgProps}>
      <title>LinkedIn icon</title>
      <path d="M40.685,4.4175H7.307a2.85782,2.85782,0,0,0-2.889,2.824v33.515a2.8595,2.8595,0,0,0,2.889,2.826H40.685a2.86454,2.86454,0,0,0,2.897-2.826V7.2415a2.86287,2.86287,0,0,0-2.897-2.824M16.036,37.7905H10.221v-18.69h5.815ZM13.13,16.5465a3.3685,3.3685,0,1,1,3.367-3.369,3.36684,3.36684,0,0,1-3.367,3.369m24.662,21.244H31.984v-9.089c0-2.167-.038-4.956-3.019-4.956-3.022,0-3.483,2.363-3.483,4.801v9.244H19.68v-18.69h5.568v2.555h.08a6.1005,6.1005,0,0,1,5.495-3.019c5.882,0,6.969,3.87,6.969,8.904Z" />
    </svg>
  );
};

LinkedIn.displayName = "SVG.LinkedIn";

export default LinkedIn;
