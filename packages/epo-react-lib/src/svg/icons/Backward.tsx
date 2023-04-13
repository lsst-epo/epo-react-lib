import { FunctionComponent } from "react";
import { SVGProps } from "@/types/svg";
import { useTranslation } from "react-i18next";
import defaultProps from "./defaultProps";

const Backward: FunctionComponent<SVGProps> = ({
  className,
  size = 24,
  fill = "currentColor",
}) => {
  const { t } = useTranslation();
  const uniqueProps = {
    viewBox: "0 0 15 9",
    width: size,
    height: size,
    fill,
    className,
  };

  const mergedSvgProps = Object.assign(defaultProps, uniqueProps);
  return (
    <svg {...mergedSvgProps} aria-labelledby="backwardTitle">
      <title id="backwardTitle">{t("svg.titles.backward")}</title>
      <path d="M4.5,0,9,8H0Z" transform="translate(7 9) rotate(-90)" />
      <path d="M4.5,0,9,8H0Z" transform="translate(0 9) rotate(-90)" />
    </svg>
  );
};

Backward.displayName = "SVG.Backward";

export default Backward;
