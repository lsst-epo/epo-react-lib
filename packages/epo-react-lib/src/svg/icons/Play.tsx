import { FunctionComponent } from "react";
import { useTranslation } from "react-i18next";
import { SVGProps } from "@/types/svg";
import defaultProps from "./defaultProps";

const Play: FunctionComponent<SVGProps> = ({
  className,
  size = 24,
  fill = "currentColor",
}) => {
  const { t } = useTranslation();
  const uniqueProps = {
    viewBox: "0 0 15 17",
    width: size,
    height: size,
    fill,
    className,
  };

  const mergedSvgProps = Object.assign(defaultProps, uniqueProps);
  return (
    <svg {...mergedSvgProps} aria-labelledby="playTitle">
      <title id="playTitle">{t("svg.titles.play")}</title>
      <path d="M8.5,0,17,15H0Z" transform="translate(15) rotate(90)" />
    </svg>
  );
};

Play.displayName = "SVG.Play";

export default Play;
