import { FunctionComponent, useId, useState } from "react";
import { useTranslation } from "react-i18next";
import { nice, max, min } from "d3-array";
import HorizontalSlider from "@rubin-epo/epo-react-lib/HorizontalSlider";
import { ImageShape } from "@rubin-epo/epo-react-lib/Image";
import { ChartMargin, HistogramData } from "@/types/charts";
import { getLinearScale, between } from "@/lib/utils";
import { SkymapObject } from "./Skymap";
import LiveLabel from "./LiveLabel";
import * as Styled from "./styles";

interface SupernovaThreeVectorProps {
  histogramData: HistogramData;
  binnedImages: Array<ImageShape>;
  step: number;
  userData: Array<SkymapObject>;
}

const SupernovaThreeVector: FunctionComponent<SupernovaThreeVectorProps> = ({
  histogramData,
  userData,
  binnedImages,
  step = 100,
}) => {
  const { t } = useTranslation();
  const liveDescriptionId = useId();
  const margin: ChartMargin = {
    top: 30,
    bottom: 30,
    left: 50,
    right: 0,
  };

  const width = 600;
  const height = width / 1.6;
  const xRange = [margin.left, width - margin.right];
  const yRange = [height - margin.bottom, margin.top];

  const xTicks = 6;
  const yTicks = 7;

  const yValues = histogramData.map(({ value }) => value);
  const yMin = 0;
  const yMax = max(yValues) || Math.max(...yValues);

  const xValues = histogramData.map(({ bin }) => bin);
  const xMin = min(xValues) || 0;
  const xMax = max(xValues) || Math.max(...xValues);

  const xDomain = nice(xMin, xMax, xTicks);
  const yDomain = nice(yMin, yMax || yMin, yTicks);

  const xScale = getLinearScale(xDomain, xRange);
  const yScale = getLinearScale(yDomain, yRange);

  const [activeRange, setActiveRange] = useState([xMin, xMax]);

  /** the width of the slider border + half the width of the track thumb */
  const sliderOffset = 15;
  const sliderLeftMargin = `calc(${
    (margin.left / width) * 100
  }% - ${sliderOffset}px)`;

  const sliderRightMargin = `calc(${
    (1 - xScale(xMax) / width) * 100
  }% - ${sliderOffset}px)`;

  const selectedBins = histogramData.map(({ bin }) =>
    between(bin, activeRange[0], activeRange[1])
  );

  const visibleUserObjects = userData.filter(({ distance }) =>
    between(distance, activeRange[0], activeRange[1] + step)
  );

  const supernovaCount = histogramData.reduce((prev, { value }, i) => {
    if (selectedBins[i]) {
      return prev + value;
    }

    return prev;
  }, 0);

  return (
    <Styled.ThreeVectorContainer ratio={{ landscape: 3 / 2, portrait: 2 / 3 }}>
      <Styled.ThreeVectorLayout>
        <Styled.HistogramContainer>
          <Styled.ChartTitle>
            {t("supernova_three_vector.histogram.title")}
          </Styled.ChartTitle>
          <Styled.Histogram
            data={histogramData}
            {...{
              activeRange,
              xDomain,
              yDomain,
              xScale,
              yScale,
              yTicks,
              xTicks,
              step,
              margin,
              width,
              height,
            }}
          />
        </Styled.HistogramContainer>
        <Styled.SliderContainer
          style={{
            paddingInlineStart: sliderLeftMargin,
            paddingInlineEnd: sliderRightMargin,
          }}
        >
          <HorizontalSlider
            min={xMin}
            max={xMax}
            step={step}
            value={activeRange}
            ariaValuetext={({ valueNow }) =>
              t("supernova_three_vector.slider.valueLabel", { value: valueNow })
            }
            color="var(--turquoise85,#12726D)"
            minLabel={`${xMin} Mlyr`}
            maxLabel={`${xMax} Mlyr`}
            onChangeCallback={(value) =>
              Array.isArray(value) && setActiveRange(value)
            }
          />
        </Styled.SliderContainer>
        <Styled.SkymapContainer>
          <Styled.ChartTitle>
            {t("supernova_three_vector.skymap.title")}
          </Styled.ChartTitle>
          <Styled.Skymap
            objects={visibleUserObjects}
            images={binnedImages}
            describedById={liveDescriptionId}
            visibleImages={selectedBins}
          />
        </Styled.SkymapContainer>
        <Styled.ResetButton
          onResetCallback={() => setActiveRange([xMin, xMax])}
        />
      </Styled.ThreeVectorLayout>
      <LiveLabel
        id={liveDescriptionId}
        objects={visibleUserObjects}
        min={activeRange[0]}
        max={activeRange[1] + step}
        {...{ supernovaCount }}
      />
    </Styled.ThreeVectorContainer>
  );
};

SupernovaThreeVector.displayName = "Widgets.SupernovaThreeVector";

export default SupernovaThreeVector;
