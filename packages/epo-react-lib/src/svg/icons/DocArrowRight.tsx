import { FunctionComponent } from "react";
import { SVGProps } from "@/types/svg";
import defaultProps from "./defaultProps";

const DocArrowRight: FunctionComponent<SVGProps> = ({
  className,
  size = 24,
  fill = "currentColor",
}) => {
  const uniqueProps = {
    viewBox: "0 0 18.124 15",
    width: size,
    height: size,
    fill,
    className,
  };

  const mergedSvgProps = Object.assign(defaultProps, uniqueProps);
  return (
    <svg {...mergedSvgProps}>
      <path d="M12.084,3.571a.677.677,0,0,0-.22-.5L8.783.205A.784.784,0,0,0,8.248,0H8.056V3.75h4.028Zm5.885,5.452L14.957,6.2a.51.51,0,0,0-.862.331V8.438H12.081v1.875h2.014v1.91a.51.51,0,0,0,.862.331l3.012-2.827A.475.475,0,0,0,17.968,9.023Zm-11.926.82V8.906a.488.488,0,0,1,.5-.469h5.538V4.688H7.8a.733.733,0,0,1-.755-.7V0H.755A.729.729,0,0,0,0,.7V14.3a.729.729,0,0,0,.755.7H11.329a.729.729,0,0,0,.755-.7V10.313H6.545A.488.488,0,0,1,6.042,9.844Z" />
    </svg>
  );
};

DocArrowRight.displayName = "SVG.DocArrowRight";

export default DocArrowRight;
