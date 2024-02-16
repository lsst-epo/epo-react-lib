import { FunctionComponent, useState } from "react";
import { max, min, range } from "d3-array";
import HorizontalSlider from "@rubin-epo/epo-react-lib/HorizontalSlider";
import { Alert } from "@/types/astro";
import useAxis from "@/charts/hooks/useAxis";
import defaults from "../defaults";
import Plot from "../ScatterPlot";
import LightCurve from "../LightCurve";
import DM15Display from "../DM15Display";
import { formatMagnitudePoints, estimateMagnitude } from "../helpers";

import * as Styled from "./styles";
import { Reset } from "@/atomic/Button";
import CurveResidual from "../A11Y/CurveResidual";
import MagnitudeSlider from "../MagnitudeSlider";

interface PlotWithLightCurveProps {
  alerts: Array<Alert>;
  gaussianWidth: number;
  yOffset: number;
  onGaussianChangeCallback: (value: number) => void;
  onYOffsetChangeCallback: (value: number) => void;
  activeAlertId?: number;
  peakMjd: number;
  yMin: number;
  yMax?: number;
  width?: number;
  height?: number;
  className?: string;
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
  onGaussianChangeCallback,
  onYOffsetChangeCallback,
  className,
  ...props
}) => {
  const [userMagnitude, setMagnitude] = useState((yMax - yMin) / 2 + yMin);
  const data = formatMagnitudePoints(alerts, peakMjd);

  console.log({ userMagnitude });

  const xMin = min(data, ({ x }) => x) || Math.min(...data.map(({ x }) => x));
  const xMax = max(data, ({ x }) => x) || Math.max(...data.map(({ x }) => x));

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

  const magnitudes = range(xDomain[0], xDomain[1], 0.75).map((x) => {
    return { x, y: estimateMagnitude(x, gaussianWidth) };
  });

  return (
    <Styled.Container className={className}>
      <Styled.PlotContainer>
        <Styled.PlotTitle>Supernova B</Styled.PlotTitle>
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
            data={magnitudes}
            yOffset={yScale(yDomain[0] - yOffset)}
            {...{ xScale, yScale }}
          />
          <MagnitudeSlider
            magnitude={userMagnitude}
            onMagnitudeChangeCallback={(v) => setMagnitude(v)}
            xMin={0}
            xMax={width}
            {...{ yMin, yMax, yScale }}
          />
          <DM15Display {...{ gaussianWidth }} />
        </Plot>
        <CurveResidual {...{ data, gaussianWidth, yOffset }} />
      </Styled.PlotContainer>
      <HorizontalSlider
        label="Gaussian Width"
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
      <HorizontalSlider
        label="Y Offset"
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
      <Reset
        onResetCallback={() => {
          onYOffsetChangeCallback && onYOffsetChangeCallback(defaults.yOffset);
          onGaussianChangeCallback &&
            onGaussianChangeCallback(defaults.gaussianWidth);
        }}
      />
    </Styled.Container>
  );
};

PlotWithLightCurve.displayName = "Widgets.LightCurve";

export default PlotWithLightCurve;
