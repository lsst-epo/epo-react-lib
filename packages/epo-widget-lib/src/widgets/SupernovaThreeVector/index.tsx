import { FunctionComponent, useState } from "react";
import { nice, max, min, tickIncrement } from "d3-array";
import HorizontalSlider from "@rubin-epo/epo-react-lib/HorizontalSlider";
import { ChartMargin, HistogramData } from "@/charts/types";
import * as Styled from "./styles";
import { getLinearScale } from "@/lib/utils";

interface SupernovaThreeVectorProps {
  data: HistogramData;
}

const SupernovaThreeVector: FunctionComponent<SupernovaThreeVectorProps> = ({
  data,
}) => {
  const margin: ChartMargin = {
    top: 20,
    bottom: 50,
    left: 50,
    right: 0,
  };
  const width = 600;
  const height = width / 1.6;
  const xRange = [margin.left, width - margin.right];
  const yRange = [margin.top, height - margin.bottom];

  const xTicks = 6;
  const yTicks = 7;

  const yMin = 0;
  const yMax =
    max(data, (d) => d.value) || Math.max(...data.map(({ value }) => value));
  const xMin = min(data, (d) => d.bin) || 0;
  const xMax =
    max(data, (d) => d.bin) || Math.max(...data.map(({ bin }) => bin));

  const xDomain = nice(xMin, xMax, xTicks);
  const yDomain = nice(yMin, yMax || yMin, yTicks);

  const xScale = getLinearScale(xDomain, xRange);
  const yScale = getLinearScale(yDomain, yRange);

  const step = tickIncrement(xMin, xMax, data.length);
  const [activeRange, setActiveRange] = useState(xDomain);

  /** the width of the slider border + half the width of the track thumb */
  const sliderOffset = 15;
  const sliderLeftMargin = `calc(${
    (margin.left / width) * 100
  }% - ${sliderOffset}px)`;

  const sliderRightMargin = `calc(${
    (1 - xScale(xMax) / width) * 100
  }% - ${sliderOffset}px)`;

  console.log({ sliderLeftMargin, sliderRightMargin });

  return (
    <Styled.ThreeVectorContainer>
      <Styled.ThreeVectorLayout>
        <Styled.HistogramContainer>
          <Styled.Histogram
            {...{
              data,
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
            label="distanceSlider"
            color="var(--turquoise85,#12726D)"
            onChangeCallback={(value: number[]) =>
              setActiveRange([value[0], value[1]])
            }
          />
        </Styled.SliderContainer>
        <Styled.ResetButton onResetCallback={() => setActiveRange(xDomain)} />
      </Styled.ThreeVectorLayout>
    </Styled.ThreeVectorContainer>
  );
};

SupernovaThreeVector.displayName = "Widgets.SupernovaThreeVector";

export default SupernovaThreeVector;
