import { FunctionComponent, useId } from "react";
import { useTranslation } from "react-i18next";
import * as Styled from "./styles";

interface ZoomControlProps {
  zoom: number;
  minZoom: number;
  maxZoom: number;
  onZoomChange: (zoom: number) => void;
}

const STEPS = 100;

/**
 * A vertical slider for zooming
 */
const ZoomControl: FunctionComponent<ZoomControlProps> = ({
  zoom,
  minZoom,
  maxZoom,
  onZoomChange,
}) => {
  const { t } = useTranslation();
  const labelId = useId();
  const flip = (value: number) => minZoom + maxZoom - value;

  return (
    <Styled.Wrapper>
      <Styled.Label id={labelId}>{t("hubble_plot.zoom.label")}</Styled.Label>
      <Styled.ZoomControl
        isVertical
        labelledbyId={labelId}
        min={minZoom}
        max={maxZoom}
        step={(maxZoom - minZoom) / STEPS}
        value={flip(zoom)}
        ariaValuetext={t("hubble_plot.zoom.value", { value: zoom.toFixed(1) })}
        renderLabel={({ valueNow }) => `${flip(valueNow).toFixed(1)}×`}
        onChangeCallback={(value) => {
          if (typeof value === "number") onZoomChange(flip(value));
        }}
        color="var(--turquoise85, #12726D)"
      />
    </Styled.Wrapper>
  );
};

ZoomControl.displayName = "Widgets.HubblePlot.ZoomControl";

export default ZoomControl;
