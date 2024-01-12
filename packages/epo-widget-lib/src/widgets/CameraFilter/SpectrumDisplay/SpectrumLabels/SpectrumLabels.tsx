import { FunctionComponent } from "react";
import { useTranslation } from "react-i18next";
import { Band } from "@/types/astro";
import * as Styled from "../../styles";
import ColorLabels from "../ColorLabels";
import { Spectrum } from "../../data";
import { intersection } from "@/lib/utils";

interface SpectrumLabelsProps {
  spectrums: Spectrum[];
  activeBand?: Band;
  min: number;
  max: number;
  activeMin?: number;
  activeMax?: number;
  isCondensed: boolean;
}

const SpectrumLabels: FunctionComponent<SpectrumLabelsProps> = ({
  spectrums,
  activeBand,
  min,
  max,
  activeMin = 0,
  activeMax = 0,
  isCondensed,
}) => {
  const { t } = useTranslation();
  const spectrumLabel = t("camera_filter.labels.captured_range", {
    context: activeBand ? "" : "no_filter",
    filter: activeBand,
  });
  return (
    <g
      role="list"
      aria-label={spectrumLabel}
      aria-live="polite"
      data-testid="spectrum-labels"
    >
      {spectrums.map(({ name, upper, lower, colors }, i) => {
        const safeUpper = upper || max;
        const safeLower = lower || min;
        const isHidden =
          activeBand &&
          intersection([safeLower, safeUpper], [activeMin, activeMax]) === null;
        return (
          <g role="listitem" aria-hidden={isHidden} key={name}>
            <Styled.SpectrumLabel
              key={name}
              x={
                isCondensed && i === 0
                  ? safeLower
                  : (safeUpper - safeLower) / 2 + safeLower
              }
              y="50"
              dominantBaseline="middle"
              textAnchor={isCondensed && i === 0 ? "start" : "middle"}
            >
              {t(`camera_filter.labels.${name}`)}
            </Styled.SpectrumLabel>
            {colors && (
              <ColorLabels
                colors={colors}
                isBandSelected={!!activeBand}
                activeRange={[activeMin, activeMax]}
                isCondensed={isCondensed}
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
