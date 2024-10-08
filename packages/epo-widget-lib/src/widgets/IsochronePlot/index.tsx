import { FunctionComponent, useId, useState } from "react";
import { useTranslation } from "react-i18next";
import useResizeObserver from "use-resize-observer";
import { token } from "@rubin-epo/epo-react-lib/styles";

import { AxisConfig, Point, PlotPoint, ScaleFunction } from "@/types/charts";
import WidgetControls from "@/layout/Controls";
import ScatterPlot from "@/charts/ScatterPlot";
import ResetButton from "@/atomic/Button/patterns/Reset";
import PlotWrapper from "@/atomic/PlotWrapper";
import Readout from "@/charts/Readout";
import PathFromPoints from "@/charts/PathFromPoints";
import { mergeWithDefaults, middle } from "@/lib/utils";
import Controls from "./Controls";
import defaults from "./defaults";
import CurveFit from "./A11Y/CurveFit";
import { ageToGyrs, distanceToLyrs } from "./helpers";

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

const validKey = (age: number, ages: Array<string>, precision = 2): string => {
  if (precision < 0) return "";

  const key = age.toFixed(precision);

  if (ages.includes(key)) {
    return key;
  } else {
    return validKey(age, ages, precision - 1);
  }
};

const isochroneLibrary = (
  age: number,
  xScale: ScaleFunction,
  yScale: ScaleFunction,
  ages: Record<string, Array<Point>>
): Array<Point> => {
  const key = validKey(age, Object.keys(ages));
  const library = ages[key];

  if (library) {
    return library.map(({ x, y }) => {
      return { x: xScale(x), y: yScale(y) };
    });
  } else {
    return [];
  }
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

  const yAxis: AxisConfig = mergeWithDefaults(configuredYAxis, {
    ...defaults.yAxis,
    label: t("isochrone_plot.plot.y_label"),
  });

  const configs: Record<keyof IsochroneValue, any> = {
    age: {
      min: ageValues.length > 0 ? Math.min(...ageValues) : 0,
      max: ageValues.length > 0 ? Math.max(...ageValues) : 0,
      step: 0.05,
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

  const localizers = {
    age: (value: number) =>
      ageToGyrs(value).toLocaleString(language, {
        minimumFractionDigits: 3,
        maximumFractionDigits: 3,
      }),
    distance: (value: number) =>
      distanceToLyrs(value).toLocaleString(language, {
        maximumFractionDigits: 0,
      }),
  };

  const localizedValues = {
    age: localizers.age(age),
    distance: localizers.distance(distance),
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
          const isochrone = isochroneLibrary(age, xScale, yScale, ages);

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
      ratio={{ portrait: 2 / 3, landscape: 3 / 2 }}
      widget={Widget}
      controls={
        <Controls
          isDisabled={!isPrepared}
          {...{
            value: { age, distance },
            localizers,
            configs,
            onChangeCallback,
          }}
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
