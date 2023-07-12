import { FunctionComponent } from "react";
import { useTranslation, Trans } from "react-i18next";
import SelectListbox from "@rubin-epo/epo-react-lib/SelectListbox";
import ColorSwatch from "@rubin-epo/epo-react-lib/ColorSwatch";
import * as Styled from "./styles";

interface FilterToolProps {
  selectionCallback?: (color: FilterColor) => void;
  selectedColor?: FilterColor | "none";
  isDisabled?: boolean;
  id?: string;
  labelledById?: string;
}

type FilterColor = "violet" | "blue" | "green" | "yellow" | "orange" | "red";

const FilterTool: FunctionComponent<FilterToolProps> = ({
  selectedColor = "none",
  selectionCallback,
  isDisabled = false,
  id,
  labelledById,
}) => {
  const { t } = useTranslation();

  const prismColors: { [key in FilterColor | "none"]: string } = {
    violet: "#861cff",
    blue: "#0019ff",
    green: "#6bd853",
    yellow: "#ffdd15",
    orange: "#f18922",
    red: "#ec1c24",
    none: "transparent",
  };

  const rays: { [key in FilterColor]: string } = {
    violet:
      "M546.1,312.5l212.8,1.9h0.4l0.5,0.2L1396,522.8c6.9,2.3,10.7,9.7,8.5,16.7s-9.7,10.7-16.7,8.5l0,0l-0.4-0.1L757.8,320.4l0.9,0.2L546.1,312.5z",
    blue: "M546.1,312.4l206.5-4.4h0.4l0.4,0.1l641.1,164c7,1.8,11.2,8.9,9.4,15.9c-1.8,7-8.9,11.2-15.9,9.4l-0.4-0.1L751.8,313.8l0.8,0.1L546.1,312.4z",
    green:
      "M547.8,312l200.6-10.6h0.3l0.4,0.1l644.8,120.3c7,1.4,11.5,8.2,10.1,15.2c-1.4,6.9-8,11.4-14.9,10.2l-0.4-0.1L747.8,307.4l0.7,0.1L547.8,312z",
    yellow:
      "M546.1,312.5l205.8-17.3h0.3h0.4l640.4,75.3c7.1,0.8,12.2,7.2,11.3,14.3c-0.8,7.1-7.2,12.2-14.3,11.3l-0.4-0.1l-637.9-94.5h0.6L546.1,312.5z",
    orange:
      "M546.1,311l189.3-21.8h0.2h0.3l656.5,33.3c7,0.4,12.4,6.3,12,13.3s-6.3,12.4-13.3,12h-0.4l-655.2-52.9h0.5L546.1,311z",
    red: "M546.1,311L730,283.9h0.1h0.2l661.4-9.9c6.9-0.1,12.6,5.4,12.7,12.3s-5.4,12.6-12.3,12.7h-0.4l-661.4-9.8h0.4L546.1,311z",
  };

  const arrows: { [key in FilterColor]: number[][] } = {
    violet: [
      [1426.5, 547.9],
      [1353.2, 550.6],
      [1377.9, 530.1],
      [1372.3, 498.5],
    ],
    blue: [
      [1431.5, 496.4],
      [1358.6, 504.1],
      [1381.8, 482],
      [1374.1, 450.9],
    ],
    green: [
      [1437.9, 443.4],
      [1366.1, 458.4],
      [1387, 434.1],
      [1376.2, 403.9],
    ],
    yellow: [
      [1438.9, 389.7],
      [1368, 408.2],
      [1387.6, 382.8],
      [1375.4, 353.3],
    ],
    orange: [
      [1443.7, 340.3],
      [1373.9, 362.8],
      [1392.1, 336.4],
      [1378.2, 307.5],
    ],
    red: [
      [1441.9, 290],
      [1372.4, 313.2],
      [1390.3, 286.6],
      [1376.1, 257.9],
    ],
  };

  const prismOptions = Object.keys(prismColors).map((color) => {
    return {
      value: color,
      label: t(`filterTool.colors.${color}`),
      icon: <ColorSwatch color={color} size="small" />,
    };
  });

  const isArrowHidden = (color: FilterColor) =>
    selectedColor !== color && selectedColor !== "none";

  const selectLabel = t("filterTool.selectLabel");

  const isNoneSelected = selectedColor === "none";

  return (
    <Styled.Wrapper>
      <Styled.PrismSVG
        version="1.1"
        viewBox="0 0 1551.6 736.7"
        aria-labelledby={labelledById}
      >
        <defs>
          <linearGradient id="no-arrow-red">
            <stop offset="0%" stopColor={prismColors.red} />
            <stop offset="81%" stopColor={prismColors.red} />
            <stop offset="81%" stopColor="transparent" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
          <linearGradient id="no-arrow-orange">
            <stop offset="0%" stopColor={prismColors.orange} />
            <stop offset="80%" stopColor={prismColors.orange} />
            <stop offset="80%" stopColor="transparent" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
          <linearGradient id="no-arrow-yellow">
            <stop offset="0%" stopColor={prismColors.yellow} />
            <stop offset="79%" stopColor={prismColors.yellow} />
            <stop offset="79%" stopColor="transparent" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
          <linearGradient id="no-arrow-green">
            <stop offset="0%" stopColor={prismColors.green} />
            <stop offset="78%" stopColor={prismColors.green} />
            <stop offset="78%" stopColor="transparent" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
          <linearGradient id="no-arrow-blue">
            <stop offset="0%" stopColor={prismColors.blue} />
            <stop offset="77%" stopColor={prismColors.blue} />
            <stop offset="77%" stopColor="transparent" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
          <linearGradient id="no-arrow-violet">
            <stop offset="0%" stopColor={prismColors.violet} />
            <stop offset="77%" stopColor={prismColors.violet} />
            <stop offset="77%" stopColor="transparent" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>
        <radialGradient
          id="gradient_1_"
          cx="718.4264"
          cy="-294.6529"
          r="417.8"
          fx="638.9412"
          fy="-303.5418"
          gradientTransform="matrix(1 0 0 1 0 534)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.12" style={{ stopColor: "#FFFFFF" }} />
          <stop offset="1" style={{ stopColor: "#000000" }} />
        </radialGradient>
        <g>
          <Styled.WhiteLine
            id="white_ray"
            x1="108.2"
            y1="463.3"
            x2="546.1"
            y2="312.5"
          />
          <Styled.WhiteLine
            id="white_light_arrow_line"
            x1="376.8"
            y1="327.9"
            x2="430"
            y2="309.6"
          />
          <polygon
            id="white_light_arrow"
            points="420.7,325.4 428.1,310.3 413,302.9 422.5,299.7 437.6,307 430.2,322.1"
            fill="#ffffff"
          />
          <text
            transform="matrix(0.9446 -0.3282 0.3282 0.9446 152.0965 417.697)"
            fill="#ffffff"
          >
            <Trans i18nKey="filterTool.whiteLight" />
          </text>
        </g>
        <g>
          <text transform="matrix(1 0 0 1 598.2964 606.0872)" fill="#ffffff">
            <Trans i18nKey="filterTool.prism" />
          </text>
          <polygon
            id="gradient"
            points="653.2,127 867.4,498 438.9,498"
            fill="url(#gradient_1_)"
            style={{ opacity: 0.3 }}
          />
        </g>
        <Styled.PrismOutline
          id="outline"
          points="653.2,127 760.3,312.5 867.4,498 653.2,498 438.9,498 546.1,312.5 "
        />
        <g
          role="list"
          id="rays_out"
          aria-label={t("filterTool.light_out") as string}
        >
          {Object.keys(rays).map((key) => (
            <Styled.Ray
              key={key}
              id={`${key}_ray`}
              style={{
                "--ray-fill": isArrowHidden(key as FilterColor)
                  ? `url(#no-arrow-${key})`
                  : prismColors[key as FilterColor],
              }}
              d={rays[key as FilterColor]}
              role="listitem"
              aria-label={t(`filterTool.colors.${key}`)}
            />
          ))}
        </g>
        <g>
          <text transform="matrix(1 0 0 1 1206.5464 164.1372)" fill="#ffffff">
            <Trans i18nKey="filterTool.filter" />
          </text>
          <Styled.Filter
            id="filter"
            x1="1255.6"
            y1="235.7"
            x2="1193.1"
            y2="550.3"
            stroke={prismColors[selectedColor]}
            fill="#ffffff"
            aria-label={t(`filterTool.colors.${selectedColor}`)}
          />
        </g>
        <g
          role="list"
          id="rays_filtered"
          aria-label={t("filterTool.light_filtered") as string}
        >
          {Object.keys(arrows).map((key) => (
            <Styled.Arrow
              key={key}
              id={`${key}_arrow`}
              style={{
                "--arrow-opacity": isArrowHidden(key as FilterColor) && 0,
                "--arrow-fill": prismColors[key as FilterColor],
              }}
              points={arrows[key as FilterColor]
                .map((a) => a.join(","))
                .join(" ")}
              role={isNoneSelected ? "listitem" : "presentation"}
              aria-label={
                isNoneSelected ? t(`filterTool.colors.${key}`) : undefined
              }
            />
          ))}
          {!isNoneSelected && (
            <text
              role="listitem"
              x={arrows[selectedColor][3][0]}
              y={arrows[selectedColor][3][1]}
              fill="#ffffff"
              dy="-25"
            >
              <Trans i18nKey={`filterTool.colors.${selectedColor}`} />
            </text>
          )}
        </g>
      </Styled.PrismSVG>
      <Styled.SelectContainer>
        <SelectListbox
          options={prismOptions}
          isDisabled={isDisabled}
          value={selectedColor}
          onChangeCallback={(value: string | null) =>
            selectionCallback &&
            selectionCallback((value as FilterColor) || "none")
          }
          placeholder={selectLabel}
          maxWidth="100%"
          width="200px"
          id={id}
        />
      </Styled.SelectContainer>
    </Styled.Wrapper>
  );
};

FilterTool.displayName = "Widgets.FilterTool";

export default FilterTool;
