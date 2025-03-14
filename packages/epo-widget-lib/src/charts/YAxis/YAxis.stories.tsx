import { Meta, StoryFn, StoryObj } from "@storybook/react";
import styled from "styled-components";
import IconComposer from "@rubin-epo/epo-react-lib/IconComposer";
import YAxis from ".";
import Chart from "../Base";
import { useState } from "react";
import { getLinearScale } from "@/lib/utils";

const meta: Meta<typeof YAxis> = {
  tags: ["autodocs"],
  argTypes: {
    ticks: {
      control: "number",
      description: "Number of ticks to render",
      table: {
        type: { summary: "number" },
      },
    },
    labelRender: {
      description: "Method to format the labels attached to each tick",
      table: {
        type: {
          summary:
            "(value: number, x: number, y: number, index: string) => ReactNode",
        },
      },
    },
    labelledById: {
      control: "text",
      description: "ID of the element that labels the X axis",
      table: {
        type: { summary: "string" },
      },
    },
    tickLength: {
      control: "number",
      description: "Horizontal of each tick",
      table: {
        type: { summary: "number" },
      },
    },
    showBaseline: {
      control: "boolean",
      description: "Should the baseline be rendered",
      table: {
        type: { summary: "boolean" },
      },
    },
  },
  component: YAxis,
};
export default meta;

const Container = styled.div`
  display: grid;
  gap: 1em;
  grid-template-rows: 400px 1fr;
  justify-items: center;
`;
const ButtonContainer = styled.div`
  display: grid;
  gap: 4px;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr;
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

  > svg {
    transform: rotate(90deg);
  }

  &:nth-of-type(2) {
    > svg {
      transform: rotate(270deg);
    }
  }
`;

const Template: StoryFn<typeof YAxis> = (args) => {
  const { margin } = args;
  const { left = 0, right = 0, bottom = 0, top = 0 } = margin || {};

  const xRange = [0 + left, 400 - right];
  const yRange = [400 - bottom, 0 + top];
  const [xDomain] = useState([0, 400]);
  const [yDomain, setYDomain] = useState(args.yDomain || [0, 400]);
  const xScale = getLinearScale(xDomain, xRange);
  const yScale = getLinearScale(yDomain, yRange);

  return (
    <Container>
      <Chart xMin={0} width={400} height={400}>
        <YAxis {...args} x={xScale(xDomain[0])} {...{ yDomain, yScale }} />
      </Chart>
      <ButtonContainer>
        <ArrowButton
          onClick={() => setYDomain([yDomain[0] + 40, yDomain[1] + 40])}
        >
          <IconComposer icon="Chevron" />
        </ArrowButton>
        <ArrowButton
          onClick={() => setYDomain([yDomain[0] - 40, yDomain[1] - 40])}
        >
          <IconComposer icon="Chevron" />
        </ArrowButton>
      </ButtonContainer>
    </Container>
  );
};

export const Primary: StoryObj<typeof YAxis> = Template.bind({});

Primary.args = {
  ticks: 10,
  margin: { left: 40, right: 40, top: 40, bottom: 40 },
};
