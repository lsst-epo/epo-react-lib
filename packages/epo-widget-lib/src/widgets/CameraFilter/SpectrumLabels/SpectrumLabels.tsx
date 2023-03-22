import { FunctionComponent } from "react";
import { useTranslation } from "react-i18next";
import { Band } from "@/types/astro";
import * as Styled from "../styles";
import ColorLabels from "../ColorLabels";
import { Spectrum } from "../data";
import { intersection } from "@/lib/utils";

interface SpectrumLabelsProps {
  spectrums: Spectrum[];
  activeBand?: Band;
  min: number;
  max: number;
  activeMin?: number;
  activeMax?: number;
}

const SpectrumLabels: FunctionComponent<SpectrumLabelsProps> = ({
  spectrums,
  activeBand,
  min,
  max,
  activeMin = 0,
  activeMax = 0,
}) => {
  const { t } = useTranslation();
  return (
    <g
      role="list"
      aria-label={t("camera_filter.labels.captured_range", {
        context: activeBand ? "" : "no_filter",
        filter: activeBand,
      })}
      aria-live="polite"
    >
      {spectrums.map(({ name, upper, lower, colors }) => {
        const safeUpper = upper || max;
        const safeLower = lower || min;
        const isHidden =
          activeBand &&
          intersection([safeLower, safeUpper], [activeMin, activeMax]) === null;
        return (
          <g role="listitem" aria-hidden={isHidden}>
            <Styled.SpectrumLabel
              key={name}
              x={(safeUpper - safeLower) / 2 + safeLower}
              y="25%"
              dominantBaseline="middle"
              textAnchor="middle"
            >
              {t(`camera_filter.labels.${name}`)}
            </Styled.SpectrumLabel>
            {colors && (
              <ColorLabels
                colors={colors}
                isBandSelected={!!activeBand}
                activeRange={[activeMin, activeMax]}
              />
            )}
          </g>
        );
      })}
    </g>
  );
};

SpectrumLabels.displayName = "Widgets.CameraFilter.SpectrumLabels";

export default SpectrumLabels;
