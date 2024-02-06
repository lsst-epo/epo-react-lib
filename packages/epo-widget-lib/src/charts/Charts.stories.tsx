import { useState } from "react";
import { Meta, StoryFn, StoryObj } from "@storybook/react";
import styled from "styled-components";
import {
  XAxis,
  YAxis,
  Base,
  Guidelines,
  Points,
  Tooltip,
  ClippingContainer,
  Bars,
} from ".";
import { getLinearScale } from "@/lib/utils";
import IconComposer from "@rubin-epo/epo-react-lib/IconComposer";
import { nice } from "d3-array";

const meta: Meta = {
  title: "Charts",
};

export default meta;

const Container = styled.div`
  display: grid;
  gap: 1em;
  grid-template-rows: 400px min-content;
  grid-template-columns: min-content 400px;
  justify-items: center;
`;

const VerticalButtons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 4px;
`;
const HorizontalButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 4px;
  grid-column-start: 2;
`;

const ArrowButton = styled.button`
  aspect-ratio: 1;
  background-color: var(--white);
  border: 1px solid var(--neutral95);
  border-radius: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:disabled {
    cursor: default;
    color: var(--neutral60);
  }

  &[data-direction="up"] {
    > svg {
      transform: rotate(90deg);
    }
  }
  &[data-direction="right"] {
    > svg {
      transform: rotate(180deg);
    }
  }
  &[data-direction="down"] {
    > svg {
      transform: rotate(270deg);
    }
  }
`;

const ScatterTemplate: StoryFn = (args) => {
  const ticks = 10;
  const width = 400;
  const height = 400;
  const margin = { top: 25, bottom: 25, left: 25, right: 25 };
  const [xDomain, setXDomain] = useState([0, 200]);
  const [yDomain, setYDomain] = useState([0, 200]);
  const [hoveredIndex, setHoveredIndex] = useState<number>();

  const xRange = [0 + margin.left, width - margin.right];
  const yRange = [0 + margin.top, height - margin.bottom];
  const xScale = getLinearScale(xDomain, xRange);
  const yScale = getLinearScale(yDomain, yRange);

  const hasTooltip = typeof hoveredIndex === "number";

  const data = args.data.map(
    ({ x, y }: { x: number; y: number }, i: number) => {
      const finalX = x * width;
      const finalY = y * height;
      return {
        x: finalX,
        y: finalY,
        width: 8,
        props: {
          onMouseEnter: () => {
            setHoveredIndex(i);
          },
          onMouseLeave: () => {
            setHoveredIndex(undefined);
          },
        },
      };
    }
  );

  return (
    <Container>
      <VerticalButtons>
        <ArrowButton
          data-direction="up"
          onClick={() => setYDomain([yDomain[0] + 20, yDomain[1] + 20])}
          disabled={yDomain[1] === 0}
        >
          <IconComposer icon="Chevron" />
        </ArrowButton>
        <ArrowButton
          data-direction="down"
          onClick={() => setYDomain([yDomain[0] - 20, yDomain[1] - 20])}
          disabled={yDomain[0] === 0}
        >
          <IconComposer icon="Chevron" />
        </ArrowButton>
      </VerticalButtons>
      <Base {...{ width, height }}>
        <XAxis y={yScale(yDomain[1])} {...{ xDomain, xScale, ticks }} />
        <YAxis x={xScale(xDomain[0])} {...{ yDomain, yScale, ticks }} />
        <ClippingContainer
          x={xScale(xDomain[0])}
          y={yScale(yDomain[0])}
          width={xRange[1] - xRange[0]}
          height={yRange[1] - yRange[0]}
        >
          <Guidelines
            guides={ticks}
            {...{ xScale, yScale, xDomain, yDomain }}
          />
          <Guidelines
            guides={ticks}
            direction="vertical"
            {...{ xScale, yScale, xDomain, yDomain }}
          />
          <Points {...{ xScale, yScale, yDomain, data }} />
        </ClippingContainer>
        {hoveredIndex && (
          <Tooltip
            x={xScale(data[hoveredIndex].x)}
            y={yScale(yDomain[1] - yDomain[0] - data[hoveredIndex].y)}
            visible={hasTooltip}
          >{`[${parseInt(data[hoveredIndex].x)},${parseInt(
            data[hoveredIndex].y
          )}]`}</Tooltip>
        )}
      </Base>
      <HorizontalButtons>
        <ArrowButton
          data-direction="left"
          onClick={() => setXDomain([xDomain[0] - 20, xDomain[1] - 20])}
          disabled={xDomain[0] === 0}
        >
          <IconComposer icon="Chevron" />
        </ArrowButton>
        <ArrowButton
          data-direction="right"
          onClick={() => setXDomain([xDomain[0] + 20, xDomain[1] + 20])}
          disabled={xDomain[1] >= 400}
        >
          <IconComposer icon="Chevron" />
        </ArrowButton>
      </HorizontalButtons>
    </Container>
  );
};

const HistogramTemplate: StoryFn = (args) => {
  const xTicks = 10;
  const yTicks = 6;
  const width = 400;
  const height = 400;
  const yMax = 12;
  const margin = {
    top: 30,
    right: 10,
    bottom: 30,
    left: 20,
  };
  const [xMin, setXMin] = useState(0);
  const [xMax, setXMax] = useState(200);
  const xDomain = nice(xMin, xMax, xTicks);
  const yDomain = nice(0, yMax, yTicks);
  const [hoveredIndex, setHoveredIndex] = useState<number>();

  const xRange = [0 + margin.left, width - margin.right];
  const yRange = [0 + margin.top, height - margin.bottom];
  const xScale = getLinearScale(xDomain, xRange);
  const yScale = getLinearScale(yDomain, yRange);

  const binInterval = (xDomain[1] - xDomain[0]) / xTicks;
  const bins = new Array(width / binInterval).fill(0).map((_, i) => {
    return { bin: i * binInterval, value: 0 };
  });

  const hasTooltip = typeof hoveredIndex === "number";

  args.data.forEach(({ x }: { x: number }) => {
    const bin = Math.floor((x * width) / binInterval);

    bins[bin].value++;
  });

  const data = bins.map(({ bin, value }, i) => {
    return {
      x: bin,
      value,
      width: 12,
      props: {
        onMouseEnter: () => setHoveredIndex(i),
        onMouseLeave: () => setHoveredIndex(undefined),
      },
    };
  });

  return (
    <Container>
      <div />
      <Base {...{ width, height }}>
        <XAxis
          y={yScale(yDomain[1])}
          ticks={xTicks}
          {...{ xDomain, xScale, margin }}
        />
        <YAxis
          x={xScale(xDomain[0]) - margin.left / 2}
          showBaseline={false}
          ticks={yTicks}
          {...{ yDomain, yScale, margin }}
        />
        <ClippingContainer
          x={xScale(xDomain[0]) - margin.left / 2}
          y={yScale(yDomain[0]) - margin.top}
          width={xRange[1] - xRange[0]}
          height={yRange[1] - yRange[0] + margin.top}
        >
          <Guidelines
            guides={yTicks}
            {...{ xScale, yScale, xDomain, yDomain, margin }}
          />
          <Bars {...{ xScale, yScale, yDomain, data }} />
        </ClippingContainer>
        {hasTooltip && (
          <Tooltip
            x={xScale(bins[hoveredIndex].bin)}
            y={yScale(yDomain[1] - data[hoveredIndex].value)}
            visible={hasTooltip}
          >
            {data[hoveredIndex].value}
          </Tooltip>
        )}
      </Base>
      <HorizontalButtons>
        <ArrowButton
          data-direction="left"
          onClick={() => {
            setXMin(xMin - 20);
            setXMax(xMax - 20);
          }}
          disabled={xMin <= 0}
        >
          <IconComposer icon="Chevron" />
        </ArrowButton>
        <ArrowButton
          data-direction="right"
          onClick={() => {
            setXMin(xMin + 20);
            setXMax(xMax + 20);
          }}
          disabled={xMax >= 400}
        >
          <IconComposer icon="Chevron" />
        </ArrowButton>
      </HorizontalButtons>
    </Container>
  );
};

const data = [];

for (let i = 0; i < 50; i++) {
  data.push({
    x: Math.random(),
    y: Math.random(),
  });
}

export const ScatterPlot: StoryObj = ScatterTemplate.bind({});
export const Histogram: StoryObj = HistogramTemplate.bind({});

ScatterPlot.args = {
  data,
};

Histogram.args = {
  data,
};
