import { FunctionComponent } from "react";
import { useTranslation } from "react-i18next";
import HorizontalSlider from "@rubin-epo/epo-react-lib/HorizontalSlider";
import defaults from "../defaults";
import Plot from "../Plot";
import LightCurve from "./LightCurve";
import LightCurveLabel from "./A11Y/LightCurveLabel";
import { useAlertsAsPoints, estimateMagnitudeWithOffset } from "../helpers";
import { Reset } from "@/atomic/Button";
import MagnitudeSlider from "./MagnitudeSlider";
import { PlotWithoutCurveProps } from "../PlotWithoutCurve";
import * as Styled from "./styles";
import Viewport from "@/charts/Viewport";
import Controls from "@/layout/Controls";

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
  yMin = defaults.yMin,
  yMax = defaults.yMax,
  width = defaults.width,
  height = defaults.height,
  userMagnitude = (yMax - yMin) / 2 + yMin,
  onUserMagnitudeChangeCallback,
  onGaussianChangeCallback,
  onYOffsetChangeCallback,
  className,
  isDisplayOnly,
  ...props
}) => {
  const { t } = useTranslation();

  const controlsFormId = "lightCurveControls";
  const gaussianLabelId = "gaussianWidthLabel";
  const yOffsetLabelId = "yOffsetLabel";

  const data = useAlertsAsPoints(alerts, peakMjd);

  const handleReset = () => {
    onUserMagnitudeChangeCallback &&
      onUserMagnitudeChangeCallback((yMax - yMin) / 2 + yMin);
    onYOffsetChangeCallback && onYOffsetChangeCallback(defaults.yOffset);
    onGaussianChangeCallback &&
      onGaussianChangeCallback(defaults.gaussianWidth);
  };

  const estimatedPeak = estimateMagnitudeWithOffset(0, gaussianWidth, yOffset);

  return (
    <>
      <Controls
        className={className}
        widget={
          <Plot
            slider={
              <MagnitudeSlider
                magnitude={userMagnitude}
                onMagnitudeChangeCallback={(v) =>
                  onUserMagnitudeChangeCallback &&
                  onUserMagnitudeChangeCallback(v)
                }
                disabled={isDisplayOnly}
                {...{ yMin, yMax, estimatedPeak }}
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
                <LightCurve
                  {...{
                    gaussianWidth,
                    yOffset,
                    xDomain,
                    xScale,
                    yScale,
                    yDomain,
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
        }
        controls={
          !isDisplayOnly && (
            <Styled.Controls id={controlsFormId}>
              <div>
                <Styled.ControlLabel id={gaussianLabelId}>
                  {t("light_curve.curve.controls.gaussian_width")}
                </Styled.ControlLabel>
                <HorizontalSlider
                  label="Gaussian Width"
                  labelledbyId={gaussianLabelId}
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
              </div>
              <div>
                <Styled.ControlLabel id={yOffsetLabelId}>
                  {t("light_curve.curve.controls.y_offset")}
                </Styled.ControlLabel>
                <HorizontalSlider
                  label="Y Offset"
                  labelledbyId={yOffsetLabelId}
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
              </div>
            </Styled.Controls>
          )
        }
        actions={!isDisplayOnly && <Reset onResetCallback={handleReset} />}
      ></Controls>
      <LightCurveLabel
        controlledById={controlsFormId}
        {...{ data, gaussianWidth, yOffset, estimatedPeak }}
      />
    </>
  );
};

PlotWithLightCurve.displayName = "Widgets.LightCurve";

export default PlotWithLightCurve;
