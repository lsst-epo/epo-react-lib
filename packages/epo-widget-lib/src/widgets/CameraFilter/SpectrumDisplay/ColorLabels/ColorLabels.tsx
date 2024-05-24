import { useTranslation } from "react-i18next";
import { intersection } from "@/lib/utils";
import { FunctionComponent } from "react";
import { VisibleColor } from "../../data";
import * as Styled from "../../styles";

interface ColorLabelsProps {
  colors: VisibleColor[];
  activeRange: number[];
  isBandSelected: boolean;
  isCondensed: boolean;
}

const ColorLabels: FunctionComponent<ColorLabelsProps> = ({
  colors,
  activeRange,
  isBandSelected,
  isCondensed,
}) => {
  const {
    t,
    i18n: { language },
  } = useTranslation();
  const colorsMin = isCondensed ? 350 : colors[0].range[0];
  const colorsMax = isCondensed ? 1000 : 820;
  const totalRange = colorsMax - colorsMin;
  const labelDistance = Math.floor(totalRange / (colors.length - 1));
  return (
    <g role="list" data-testid="color-labels">
      {colors.map(({ name, range, color }, i) => {
        const textPosition = colorsMin + labelDistance * i;
        const isHidden =
          isBandSelected && intersection(range, activeRange) === null;
        const midpoint = (range[0] + range[1]) / 2;
        return (
          <g key={name}>
            <line
              strokeWidth={1}
              stroke="#b2b2b2"
              x1={midpoint}
              x2={midpoint}
              y1="100"
              y2={isCondensed ? "105" : "110"}
              role="presentation"
            />
            <line
              strokeWidth={1}
              stroke="#b2b2b2"
              x1={midpoint}
              x2={textPosition}
              y1={isCondensed ? "105" : "110"}
              y2={isCondensed ? "145" : "140"}
              role="presentation"
            />
            <circle
              cx={textPosition}
              cy={isCondensed ? "145" : "140"}
              r={isCondensed ? 15 : 10}
              fill={color}
              role="presentation"
            ></circle>
            <text
              x={textPosition}
              dominantBaseline="middle"
              textAnchor="middle"
              y="150"
              role="listitem"
              aria-hidden={isHidden}
            >
              <Styled.ColorName
                x={textPosition}
                dy="1.25em"
                textAnchor="middle"
              >
                {t(`filterTool.colors.${name}`).toLocaleLowerCase(language)}
              </Styled.ColorName>
              <Styled.ColorSpectrum
                x={textPosition}
                dy="1.25em"
                textAnchor="middle"
              >
                {range.join("–")}
              </Styled.ColorSpectrum>
              <Styled.ColorSpectrumUnit
                x={textPosition}
                dy="1.25em"
                textAnchor="middle"
              >
                nm
              </Styled.ColorSpectrumUnit>
            </text>
          </g>
        );
      })}
    </g>
  );
};

ColorLabels.displayName = `Widgets.CameraFilter.ColorLabels`;

export default ColorLabels;
