import { FunctionComponent, useState } from "react";
import { useTranslation } from "react-i18next";
import mergeWith from "lodash/mergeWith";
import { AxisConfig, Point, PlotPoint } from "@/types/charts";
import WidgetControls from "@/layout/Controls";
import ScatterPlot from "@/charts/ScatterPlot";
import Controls from "./Controls";
import ResetButton from "@/atomic/Button/patterns/Reset";
import defaults from "./defaults";
import PlotWrapper from "@/atomic/PlotWrapper";
import Readout from "@/charts/Readout";
import PathFromPoints from "@/charts/PathFromPoints";
import { defaultsMerger } from "@/lib/utils";
import { parsecsToLightyears } from "@/lib/helpers";

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
  onChangeCallback: (value: IsochroneValue) => void;
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

  const { width, height } = defaults;
  const { ages = {} } = ageLibrary;
  const ageKeys = Object.keys(ages);
  const ageValues = ageKeys.map(parseFloat);
  const { age, distance }: Required<IsochroneValue> = mergeWith(
    {},
    defaults.value,
    { age: ageValues[0] },
    userValue,
    defaultsMerger
  );

  const margins = { top: 0, right: 0, bottom: 20, left: 20 };

  const xAxis: AxisConfig = mergeWith(
    {},
    defaults.xAxis,
    configuredXAxis,
    { label: t("isochrone_plot.plot.x_label") },
    defaultsMerger
  );

  const yAxis = mergeWith({}, defaults.yAxis, configuredYAxis, {
    label: t("isochrone_plot.plot.y_label"),
  });

  const isochrone = ages[age?.toFixed(1) || 0] || [];

  const configs: Record<keyof IsochroneValue, any> = {
    age: {
      min: ageValues.length > 0 ? Math.min(...ageValues) : 0,
      max: ageValues.length > 0 ? Math.max(...ageValues) : 0,
      step: 0.5,
    },
    distance: { min: 0, max: yAxis.min + 1, step: 0.05 },
  };

  const Widget = (
    <PlotWrapper>
      <ScatterPlot
        optimizedRender
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
        }) => (
          <>
            {Data}
            {age && (
              <PathFromPoints
                points={isochrone.map(({ x, y }) => {
                  return { x: xScale(x), y: yScale(y) };
                })}
                svgProps={{
                  transform: `translate(0,${yScale(distance + yDomain[1])})`,
                }}
              />
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
                age: age.toLocaleString(language, { minimumFractionDigits: 1 }),
                distance: parsecsToLightyears(
                  Math.pow(10, distance / 5 + 1)
                ).toLocaleString(language, {
                  maximumFractionDigits: 0,
                }),
              })}
            </Readout>
          </>
        )}
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
