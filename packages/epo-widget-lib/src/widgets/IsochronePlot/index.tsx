import { FunctionComponent, useState } from "react";
import { useTranslation } from "react-i18next";
import { AxisConfig, Point, PlotPoint } from "@/types/charts";
import WidgetControls from "@/layout/Controls";
import ScatterPlot from "@/charts/ScatterPlot";
import Controls from "./Controls";
import ResetButton from "@/atomic/Button/patterns/Reset";
import defaults from "./defaults";
import PlotWrapper from "@/atomic/PlotWrapper";
import Readout from "@/charts/Readout";
import PathFromPoints from "@/charts/PathFromPoints";
import { mergeWithDefaults } from "@/lib/utils";
import { parsecsToLightyears } from "@/lib/helpers";
import CurveFit from "./A11Y/CurveFit";

export type IsochroneValue = { age?: number; distance?: number };
export type AgeLibrary = {
  ages: Record<string, Array<Point>>;
};

type Props = {
  isDisplayOnly?: boolean;
  isLoading?: boolean;
  data: Array<PlotPoint>;
  value?: IsochroneValue;
  ageLibrary: AgeLibrary;
  onChangeCallback?: (value: IsochroneValue) => void;
  xAxis?: Partial<AxisConfig>;
  yAxis?: Partial<AxisConfig>;
  name?: string;
};

const IsochronePlot: FunctionComponent<Props> = ({
  data,
  value: userValue,
  ageLibrary,
  isDisplayOnly = false,
  isLoading: isLoadingExternal,
  xAxis: configuredXAxis,
  yAxis: configuredYAxis,
  name,
  onChangeCallback,
}) => {
  const {
    t,
    i18n: { language },
  } = useTranslation();
  const [isLoading, setIsLoading] = useState(true);

  const isPrepared = !isLoadingExternal && !isLoading;
  const margins = { top: 0, right: 0, bottom: 20, left: 20 };
  const { width, height } = defaults;
  const { ages = {} } = ageLibrary;
  const ageKeys = Object.keys(ages).toSorted(
    (a, b) => parseFloat(a) - parseFloat(b)
  );
  const ageValues = ageKeys.map(parseFloat);

  const xAxis: AxisConfig = mergeWithDefaults(configuredXAxis, {
    ...defaults.xAxis,
    label: t("isochrone_plot.plot.x_label"),
  });

  const yAxis = mergeWithDefaults(configuredYAxis, {
    ...defaults.yAxis,
    label: t("isochrone_plot.plot.y_label"),
  });

  const configs: Record<keyof IsochroneValue, any> = {
    age: {
      min: ageValues.length > 0 ? Math.min(...ageValues) : 0,
      max: ageValues.length > 0 ? Math.max(...ageValues) : 0,
      step: 0.5,
    },
    distance: { min: 0, max: yAxis.min + 1, step: 0.05 },
  };

  const { age, distance }: Required<IsochroneValue> = mergeWithDefaults(
    userValue,
    {
      distance:
        (configs.distance.max - configs.distance.min) / 2 +
        configs.distance.min,
      age:
        ageValues.length > 0
          ? ageValues[Math.round((ageValues.length - 1) / 2)]
          : 0,
    }
  );

  const Widget = (
    <PlotWrapper>
      <ScatterPlot
        renderer="canvas"
        title={name}
        onLoadedCallback={() => setIsLoading(false)}
        data={{
          label: "Star Cluster",
          points: data.map((point) => {
            return {
              ...point,
              radius: 4,
              stroke: "rgba(18,114,108,0.5)",
              fill: "rgba(18,114,108,0.25)",
            };
          }),
        }}
        plotChildren={({
          Data,
          xScale,
          yScale,
          yStart,
          yEnd,
          xStart,
          xEnd,
          yDomain,
        }) => {
          const isochrone =
            (ages[age.toFixed(1)] || []).map(({ x, y }) => {
              return { x: xScale(x), y: yScale(y) };
            }) || [];
          const offset = yScale(distance + yDomain[1]);

          return (
            <>
              {Data}
              {age && (
                <>
                  <PathFromPoints
                    points={isochrone}
                    svgProps={{
                      transform: `translate(0,${offset})`,
                    }}
                  />

                  <PathFromPoints
                    points={isochrone}
                    svgProps={{
                      transform: `translate(0,${offset})`,
                      strokeWidth: 40,
                      stroke: "rgba(0,0,0,0.2)",
                    }}
                  />
                </>
              )}
              <Readout
                viewport={{
                  x: xStart,
                  y: yEnd,
                  outerHeight: yStart - yEnd,
                  outerWidth: xEnd - xStart,
                  innerWidth: width,
                  innerHeight: height,
                }}
                position="center right"
              >
                {t("isochrone_plot.output", {
                  age: age.toLocaleString(language, {
                    minimumFractionDigits: 1,
                  }),
                  distance: parsecsToLightyears(
                    Math.pow(10, distance / 5 + 1)
                  ).toLocaleString(language, {
                    maximumFractionDigits: 0,
                  }),
                })}
                <CurveFit
                  points={data}
                  {...{ isochrone, offset, xScale, yScale, width, height }}
                />
              </Readout>
            </>
          );
        }}
        {...{ width, height, xAxis, yAxis, margins }}
      ></ScatterPlot>
    </PlotWrapper>
  );

  return (
    <WidgetControls
      widget={Widget}
      controls={() => (
        <Controls
          {...{ value: { age, distance }, configs, onChangeCallback }}
        />
      )}
      actions={
        <ResetButton
          onResetCallback={() => {
            onChangeCallback &&
              onChangeCallback({ ...defaults.value, ...{ age: ageValues[0] } });
          }}
        />
      }
      isLoading={!isPrepared}
      {...{ isDisplayOnly }}
    />
  );
};

export default IsochronePlot;
