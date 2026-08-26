import { FunctionComponent, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import IconComposer from "@rubin-epo/epo-react-lib/IconComposer";
import NavigationRail from "@/layout/NavigationRail";
import defaults from "./defaults";
import { Galaxy, HubblePlotterProps } from "./types";
import { getInitialGalaxies, isPlotted } from "./helpers";
import PlotArea from "./PlotArea";
import { NavigationRailItem } from "@/layout/NavigationRail/types";

const HubblePlotter: FunctionComponent<HubblePlotterProps> = ({
  data = [],
  options,
  value,
  title,
  xValueAccessor = defaults.xValueAccessor,
  yValueAccessor = defaults.yValueAccessor,
  className,
  userHubblePlotCallback,
  ...plotProps
}) => {
  const { t } = useTranslation();
  const accessors = { xValueAccessor, yValueAccessor };

  const [galaxies, setGalaxies] = useState<Array<Galaxy>>(() =>
    getInitialGalaxies(data, value, options, xValueAccessor, yValueAccessor),
  );

  useEffect(() => {
    setGalaxies(
      getInitialGalaxies(data, value, options, xValueAccessor, yValueAccessor),
    );
  }, [data, value]);

  const items: Array<NavigationRailItem> = galaxies.map((galaxy) => {
    const label = galaxy.name ?? galaxy.id;

    return {
      id: galaxy.id,
      header: label,
      label: isPlotted(galaxy, xValueAccessor, yValueAccessor)
        ? t("hubble_plotter.galaxy_plotted", { name: label })
        : label,
      icon: (
        <IconComposer
          icon="Galaxy"
          fill={
            isPlotted(galaxy, xValueAccessor, yValueAccessor)
              ? galaxy.color
              : "var(--neutral60, #6a6e6e)"
          }
        />
      ),
      color: galaxy.color,
    };
  });

  return (
    <div {...{ className }}>
      <NavigationRail
        {...{ items }}
        showPrevNext
        previousLabel={t("hubble_plotter.previous")}
        nextLabel={t("hubble_plotter.next")}
        label={t("hubble_plotter.galaxies")}
      >
        <PlotArea
          userHubblePlotCallback={(questionId, updated) => {
            setGalaxies(updated);
            userHubblePlotCallback?.(questionId, updated);
          }}
          {...{ galaxies, options, ...accessors, ...plotProps }}
        />
      </NavigationRail>
    </div>
  );
};

HubblePlotter.displayName = "Widgets.HubblePlotter";

export default HubblePlotter;
