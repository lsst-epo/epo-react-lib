import { FunctionComponent } from "react";
import { SVGProps } from "@/types/svg";
import { useTranslation } from "react-i18next";
import defaultProps from "./defaultProps";

const Forward: FunctionComponent<SVGProps> = ({
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
    <svg {...mergedSvgProps} aria-labelledby="forwardTitle">
      <title id="forwardTitle">{t("svg.titles.forward")}</title>
      <g transform="translate(-2737 -1072)">
        <path
          d="M4.5,0,9,8H0Z"
          transform="translate(2745 1072) rotate(90)"
          fill="#1f2121"
        />
        <path
          d="M4.5,0,9,8H0Z"
          transform="translate(2752 1072) rotate(90)"
          fill="#1f2121"
        />
      </g>
    </svg>
  );
};

Forward.displayName = "SVG.Forward";

export default Forward;
