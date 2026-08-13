import { FunctionComponent } from "react";
import { useTranslation } from "react-i18next";
import { Galaxy } from "../types";
import { getValue } from "@/charts/PointEditing";
import * as Styled from "./styles";

interface GalaxyTooltipProps {
  galaxy: Galaxy;
  xValueAccessor: string;
  yValueAccessor: string;
}

/** The galaxy's name and its place on the plot */
const GalaxyTooltip: FunctionComponent<GalaxyTooltipProps> = ({
  galaxy,
  xValueAccessor,
  yValueAccessor,
}) => {
  const {
    t,
    i18n: { language },
  } = useTranslation();

  const format = (value: number | null) =>
    value === null
      ? t("hubble_plot.tooltip.unplotted")
      : value.toLocaleString(language, { maximumFractionDigits: 2 });

  return (
    <Styled.Rows>
      {galaxy.name && <Styled.Name>{galaxy.name}</Styled.Name>}
      <span>
        {t("hubble_plot.tooltip.distance", {
          value: format(getValue(galaxy, xValueAccessor)),
        })}
      </span>
      <span>
        {t("hubble_plot.tooltip.velocity", {
          value: format(getValue(galaxy, yValueAccessor)),
        })}
      </span>
    </Styled.Rows>
  );
};

GalaxyTooltip.displayName = "Widgets.HubblePlot.GalaxyTooltip";

export default GalaxyTooltip;
