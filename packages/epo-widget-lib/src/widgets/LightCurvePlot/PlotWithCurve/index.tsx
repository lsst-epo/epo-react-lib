import { FunctionComponent } from "react";
import { useTranslation } from "react-i18next";
import { max, min } from "d3-array";
import HorizontalSlider from "@rubin-epo/epo-react-lib/HorizontalSlider";
import useAxis from "@/charts/hooks/useAxis";
import defaults from "../defaults";
import Plot from "../ScatterPlot";
import LightCurve from "../LightCurve";
import LightCurveLabel from "../A11Y/LightCurveLabel";
import { formatMagnitudePoints, estimateMagnitudeWithOffset } from "../helpers";
import { Reset } from "@/atomic/Button";
import MagnitudeSlider from "../MagnitudeSlider";
import { PlotWithoutCurveProps } from "../PlotWithoutCurve";
import * as Styled from "./styles";

interface PlotWithLightCurveProps extends PlotWithoutCurveProps {
  gaussianWidth: number;
  yOffset: number;
  userMagnitude: number;
  onUserMagnitudeChangeCallback: (value: number) => void;
  onGaussianChangeCallback: (value: number) => void;
  onYOffsetChangeCallback: (value: number) => void;
}

const PlotWithLightCurve: FunctionComponent<PlotWithLightCurveProps> = ({
  gaussianWidth = defaults.gaussianWidth,
  yOffset = defaults.yOffset,
  alerts,
  peakMjd,
  name,
  yMin = defaults.yMin,
  yMax = defaults.yMax,
  width = defaults.width,
  height = defaults.height,
  userMagnitude = (yMax - yMin) / 2 + yMin,
  onUserMagnitudeChangeCallback,
  onGaussianChangeCallback,
  onYOffsetChangeCallback,
  className,
  ...props
}) => {
  const { t } = useTranslation();

  const controlsFormId = "lightCurveControls";
  const gaussianLabelId = "gaussianWidthLabel";
  const yOffsetLabelId = "yOffsetLabel";

  const data = formatMagnitudePoints(alerts, peakMjd);

  const xMin = min(data, ({ x }) => x) || Math.min(...data.map(({ x }) => x));
  const xMax = max(data, ({ x }) => x) || Math.max(...data.map(({ x }) => x));

  const handleReset = () => {
    onUserMagnitudeChangeCallback &&
      onUserMagnitudeChangeCallback((yMax - yMin) / 2 + yMin);
    onYOffsetChangeCallback && onYOffsetChangeCallback(defaults.yOffset);
    onGaussianChangeCallback &&
      onGaussianChangeCallback(defaults.gaussianWidth);
  };

  const [xDomain, xTicks, xScale] = useAxis({
    min: xMin,
    max: xMax,
    step: defaults.xStep,
    range: [0, width],
  });

  const [yDomain, yTicks, yScale] = useAxis({
    min: yMin,
    max: yMax,
    step: defaults.yStep,
    range: [0, height],
  });

  const estimatedPeak = estimateMagnitudeWithOffset(0, gaussianWidth, yOffset);

  return (
    <Styled.Container className={className}>
      <Styled.PlotContainer>
        {name && <Styled.PlotTitle>{name}</Styled.PlotTitle>}
        <Plot
          {...{
            ...props,
            data,
            width,
            height,
            yMin,
            yMax,
          }}
        >
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
          <MagnitudeSlider
            magnitude={userMagnitude}
            onMagnitudeChangeCallback={(v) =>
              onUserMagnitudeChangeCallback && onUserMagnitudeChangeCallback(v)
            }
            {...{ yMin, yMax, yScale, estimatedPeak }}
          />
          <Styled.DM15Display {...{ gaussianWidth }} />
        </Plot>
      </Styled.PlotContainer>
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

        <Reset onResetCallback={handleReset} />
      </Styled.Controls>
      <LightCurveLabel
        controlledById={controlsFormId}
        {...{ data, gaussianWidth, yOffset, estimatedPeak }}
      />
    </Styled.Container>
  );
};

PlotWithLightCurve.displayName = "Widgets.LightCurve";

export default PlotWithLightCurve;
