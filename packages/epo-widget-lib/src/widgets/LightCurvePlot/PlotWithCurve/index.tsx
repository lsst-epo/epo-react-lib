import { FunctionComponent, useId } from "react";
import { useTranslation } from "react-i18next";
import { range } from "d3-array";
import HorizontalSlider from "@rubin-epo/epo-react-lib/HorizontalSlider";
import defaults from "../defaults";
import Plot from "../Plot";
import LightCurveLabel from "./A11Y/LightCurveLabel";
import {
  useAlertsAsPoints,
  estimateMagnitudeWithOffset,
  estimateMagnitude,
} from "../helpers";
import { Reset } from "@/atomic/Button";
import MagnitudeSlider from "./MagnitudeSlider";
import { PlotWithoutCurveProps } from "../PlotWithoutCurve";
import * as Styled from "./styles";
import Viewport from "@/charts/Viewport";
import Controls from "@/layout/Controls";
import ControlLabel from "@/atomic/ControlLabel";
import PathFromPoints from "@/charts/PathFromPoints";
import { AxisConfig } from "@/types/charts";
import { mergeWithDefaults } from "@/lib/utils";

interface PlotWithLightCurveProps extends PlotWithoutCurveProps {
  gaussianWidth?: number;
  yOffset?: number;
  userMagnitude?: number;
  onUserMagnitudeChangeCallback?: (value: number) => void;
  onGaussianChangeCallback?: (value: number) => void;
  onYOffsetChangeCallback?: (value: number) => void;
  isDisplayOnly?: boolean;
}

const PlotWithLightCurve: FunctionComponent<PlotWithLightCurveProps> = ({
  gaussianWidth = defaults.gaussianWidth,
  yOffset = defaults.yOffset,
  alerts,
  peakMjd,
  yMin,
  yMax,
  width = defaults.width,
  height = defaults.height,
  userMagnitude,
  onUserMagnitudeChangeCallback,
  onGaussianChangeCallback,
  onYOffsetChangeCallback,
  className,
  isDisplayOnly,
  ...props
}) => {
  const { t } = useTranslation();

  const yAxis: AxisConfig = mergeWithDefaults(
    { min: yMin, max: yMax },
    defaults.yAxis
  );

  const defaultMagnitude = (yAxis.max - yAxis.min) / 2 + yAxis.min;

  const data = useAlertsAsPoints(alerts, peakMjd);
  const controlsFormId = useId();

  const handleReset = () => {
    onUserMagnitudeChangeCallback &&
      onUserMagnitudeChangeCallback(defaultMagnitude);
    onYOffsetChangeCallback && onYOffsetChangeCallback(defaults.yOffset);
    onGaussianChangeCallback &&
      onGaussianChangeCallback(defaults.gaussianWidth);
  };

  const estimatedPeak = estimateMagnitudeWithOffset(0, gaussianWidth, yOffset);

  const Widget = (
    <Plot
      slider={
        <MagnitudeSlider
          magnitude={userMagnitude || defaultMagnitude}
          onMagnitudeChangeCallback={(v) =>
            onUserMagnitudeChangeCallback && onUserMagnitudeChangeCallback(v)
          }
          disabled={isDisplayOnly}
          yMin={yAxis.min}
          yMax={yAxis.max}
          {...{ estimatedPeak }}
        />
      }
      plotChildren={({
        xScale,
        yScale,
        xDomain,
        yDomain,
        xStart,
        xEnd,
        yStart,
        yEnd,
      }) => (
        <>
          <PathFromPoints
            points={range(xDomain[0], xDomain[1], 0.5).map((x) => {
              return {
                x: xScale(x),
                y: yScale(estimateMagnitude(x, gaussianWidth)),
              };
            })}
            svgProps={{
              transform: `translate(0,${yScale(yDomain[1] - yOffset)})`,
            }}
          />
          <Viewport
            x={xStart}
            y={yEnd}
            outerHeight={yStart - yEnd}
            outerWidth={xEnd - xStart}
            innerWidth={width}
            innerHeight={height}
          >
            <Styled.DM15Display {...{ gaussianWidth }} />
          </Viewport>
        </>
      )}
      {...{
        ...props,
        data,
        width,
        height,
        yMin,
        yMax,
      }}
    />
  );

  return (
    <>
      <Controls
        {...{ className, isDisplayOnly }}
        widget={Widget}
        controls={
          <>
            <ControlLabel
              label={t("light_curve.curve.controls.gaussian_width")}
              input={(id) => (
                <HorizontalSlider
                  labelledbyId={id}
                  color="var(--turquoise85, #12726D)"
                  min={defaults.gaussianMin}
                  max={defaults.gaussianMax}
                  step={defaults.gaussianStep}
                  value={gaussianWidth}
                  onChangeCallback={(value) =>
                    typeof value === "number" &&
                    onGaussianChangeCallback &&
                    onGaussianChangeCallback(value)
                  }
                />
              )}
              labelBy
            />
            <ControlLabel
              label={t("light_curve.curve.controls.y_offset")}
              input={(id) => (
                <HorizontalSlider
                  labelledbyId={id}
                  color="var(--turquoise85, #12726D)"
                  min={defaults.yOffsetMin}
                  max={defaults.yOffsetMax}
                  step={defaults.yOffsetStep}
                  value={yOffset}
                  onChangeCallback={(value) =>
                    typeof value === "number" &&
                    onYOffsetChangeCallback &&
                    onYOffsetChangeCallback(value)
                  }
                />
              )}
              labelBy
            />
            <LightCurveLabel
              controlledById={controlsFormId}
              {...{ data, gaussianWidth, yOffset, estimatedPeak }}
            />
          </>
        }
        actions={<Reset onResetCallback={handleReset} />}
      ></Controls>
    </>
  );
};

PlotWithLightCurve.displayName = "Widgets.LightCurve";

export default PlotWithLightCurve;
