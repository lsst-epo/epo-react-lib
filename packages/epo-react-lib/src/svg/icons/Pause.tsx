import { FunctionComponent } from "react";
import { SVGProps } from "@/types/svg";
import { useTranslation } from "react-i18next";
import defaultProps from "./defaultProps";

const Pause: FunctionComponent<SVGProps> = ({
  className,
  size = 24,
  fill = "currentColor",
}) => {
  const { t } = useTranslation();
  const uniqueProps = {
    viewBox: "0 0 13 15",
    width: size,
    height: size,
    fill,
    className,
  };

  const mergedSvgProps = Object.assign(defaultProps, uniqueProps);
  return (
    <svg {...mergedSvgProps} aria-labelledby="pauseTitle">
      <title id="pauseTitle">{t("svg.titles.pause")}</title>
      <g transform="translate(-2739 -1064)">
        <rect width="4" height="15" transform="translate(2739 1064)" />
        <rect width="4" height="15" transform="translate(2748 1064)" />
      </g>
    </svg>
  );
};

Pause.displayName = "SVG.Pause";

export default Pause;
