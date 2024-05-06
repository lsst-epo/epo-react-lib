import { FunctionComponent } from "react";
import { AxisConfig, Point, PlotPoint } from "@/types/charts";
import WidgetControls from "@/layout/Controls";
import ScatterPlot from "@/charts/ScatterPlot";
import AspectRatio from "@/layout/AspectRatio";
import Controls from "./Controls";
import ResetButton from "@/atomic/Button/patterns/Reset";
import defaults from "./defaults";
import PlotWrapper from "@/atomic/PlotWrapper";
import Readout from "@/charts/Readout";
import PathFromPoints from "@/charts/PathFromPoints";

export type IsochroneValue = { age?: string; distance?: number };
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
  xAxis: AxisConfig;
  yAxis: AxisConfig;
};

const IsochronePlot: FunctionComponent<Props> = ({
  data,
  value: userValue,
  ageLibrary,
  isDisplayOnly = false,
  isLoading,
  onChangeCallback,
}) => {
  const { width, height, value: defaultValue } = defaults;
  const { ages } = ageLibrary;
  const ageValues = Object.keys(ages).map((age) => age);
  const value = {
    ...defaultValue,
    ...{ age: ageValues[0] },
    ...userValue,
  };

  const margins = { top: 0, right: 0, bottom: 20, left: 20 };
  const xAxis = { label: "Color Index", step: 1, min: -1, max: 4 };
  const yAxis = { label: "Apparent G Magnitude", step: 2, min: 22, max: 8 };

  const isochrone = ages[value.age];

  const Widget = (
    <PlotWrapper>
      <ScatterPlot
        data={{ label: "Star Cluster", points: data }}
        plotChildren={({
          Data,
          xScale,
          yScale,
          yStart,
          yEnd,
          xStart,
          xEnd,
        }) => (
          <>
            {Data}
            {value?.age && (
              <PathFromPoints
                points={isochrone.map(({ x, y }) => {
                  return { x: xScale(x), y: yScale(y) };
                })}
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
            >
              {value?.age} Gyrs {value?.distance} Mlyrs
            </Readout>
          </>
        )}
        {...{ width, height, xAxis, yAxis, margins }}
      ></ScatterPlot>
    </PlotWrapper>
  );

  if (isDisplayOnly) return <AspectRatio ratio="square">{Widget}</AspectRatio>;

  return (
    <WidgetControls
      widget={Widget}
      controls={() => <Controls {...{ value, ageValues, onChangeCallback }} />}
      actions={
        <ResetButton
          onResetCallback={() => {
            onChangeCallback &&
              onChangeCallback({ ...defaultValue, ...{ age: ageValues[0] } });
          }}
        />
      }
      {...{ isLoading }}
    />
  );
};

IsochronePlot.displayName = "Widgets.IsochronePlot";

export default IsochronePlot;
