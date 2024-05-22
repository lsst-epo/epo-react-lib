import { FunctionComponent, useId, useState } from "react";
import { useTranslation } from "react-i18next";
import useResizeObserver from "use-resize-observer";
import round from "lodash/round";
import { token } from "@rubin-epo/epo-react-lib/styles";

import { AxisConfig, Point, PlotPoint } from "@/types/charts";
import WidgetControls from "@/layout/Controls";
import ScatterPlot from "@/charts/ScatterPlot";
import ResetButton from "@/atomic/Button/patterns/Reset";
import PlotWrapper from "@/atomic/PlotWrapper";
import Readout from "@/charts/Readout";
import PathFromPoints from "@/charts/PathFromPoints";
import { mergeWithDefaults, middle } from "@/lib/utils";
import { parsecsToLightyears } from "@/lib/helpers";
import Controls from "./Controls";
import defaults from "./defaults";
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

const getPointRadius = (width?: number) => {
  if (!width) return defaults.pointRadius.lg;

  if (width < parseFloat(token("BREAK_PHABLET_MIN"))) {
    return defaults.pointRadius.md;
  }
  if (width < parseFloat(token("BREAK_LARGE_TABLET"))) {
    return defaults.pointRadius.sm;
  }

  return defaults.pointRadius.lg;
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
  const { ref, width: containerWidth } = useResizeObserver<HTMLDivElement>();
  const {
    t,
    i18n: { language },
  } = useTranslation();
  const [isLoading, setIsLoading] = useState(true);
  const controlsId = useId();

  const isPrepared = !isLoadingExternal && !isLoading;
  const margins = { top: 0, right: 0, bottom: 20, left: 20 };
  const { width, height } = defaults;
  const { ages = {} } = ageLibrary;
  const ageKeys = Object.keys(ages).sort(
    (a: string, b: string) => parseFloat(a) - parseFloat(b)
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
      step: round(ageValues[1] - ageValues[0], 1) || 0.5,
      marks: ageValues,
    },
    distance: { min: 0, max: yAxis.min + 1, step: 0.05 },
  };

  const defaultValue = {
    age: ageValues.length > 0 ? middle(ageValues) : 0,
    distance:
      (configs.distance.max - configs.distance.min) / 2 + configs.distance.min,
  };

  const { age, distance }: Required<IsochroneValue> = mergeWithDefaults(
    userValue,
    defaultValue
  );

  const radius = getPointRadius(containerWidth);

  const localizedValues = {
    age: age.toLocaleString(language, {
      minimumFractionDigits: 1,
    }),
    distance: parsecsToLightyears(
      Math.pow(10, distance / 5 + 1)
    ).toLocaleString(language, {
      maximumFractionDigits: 0,
    }),
  };

  const Widget = (
    <PlotWrapper ref={ref}>
      <ScatterPlot
        renderer="canvas"
        title={name}
        onLoadedCallback={() => setIsLoading(false)}
        data={{
          label: "Star Cluster",
          points: data.map((point) => {
            return {
              ...point,
              radius,
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
                <PathFromPoints
                  points={isochrone}
                  svgProps={{
                    strokeWidth: 2,
                    transform: `translate(0,${offset})`,
                  }}
                />
              )}
              {isPrepared && (
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
                  forIds={controlsId}
                  forScreenreaders={
                    <CurveFit
                      points={data}
                      value={localizedValues}
                      {...{
                        isochrone,
                        offset,
                        xScale,
                        yScale,
                        width,
                        height,
                      }}
                    />
                  }
                >
                  {t("isochrone_plot.output", {
                    ...localizedValues,
                  })}
                </Readout>
              )}
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
      controls={
        <Controls
          isDisabled={!isPrepared}
          {...{ value: { age, distance }, configs, onChangeCallback }}
        />
      }
      actions={
        <ResetButton
          isDisabled={!isPrepared}
          onResetCallback={() => {
            onChangeCallback && onChangeCallback(defaultValue);
          }}
        />
      }
      isLoading={!isPrepared}
      {...{ isDisplayOnly, controlsId }}
    />
  );
};

export default IsochronePlot;
