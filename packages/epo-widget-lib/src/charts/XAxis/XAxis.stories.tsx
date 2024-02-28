import { Meta, StoryFn, StoryObj } from "@storybook/react";
import styled from "styled-components";
import IconComposer from "@rubin-epo/epo-react-lib/IconComposer";
import XAxis from ".";
import Chart from "../Base";
import { useState } from "react";
import { getLinearScale } from "@/lib/utils";

const meta: Meta<typeof XAxis> = {
  argTypes: {
    xDomain: {
      description: "Domain of the x axis",
      control: "object",
      table: {
        type: { summary: "number[]" },
        defaultValue: { summary: "[0,1]" },
      },
    },
    xScale: {
      description: "Scaling function for the x axis",
      table: {
        type: { summary: "(value: number) => number" },
        defaultValue: { summary: "(v) => v" },
      },
    },
    y: {
      control: "number",
      description:
        "Position along the Y axis at which the X axis will be placed",
      table: {
        type: { summary: "number" },
        defaultValue: { summary: 0 },
      },
    },
    ticks: {
      control: "number",
      description: "Number of ticks to render",
      table: {
        type: { summary: "number" },
        defaultValue: { summary: 0 },
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
    tickHeight: {
      control: "number",
      description: "Vertical height of each tick",
      table: {
        type: { summary: "number" },
        defaultValue: { summary: 5 },
      },
    },
    showBaseline: {
      control: "boolean",
      description: "Should the baseline be rendered",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: true },
      },
    },
  },
  component: XAxis,
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

  &:nth-of-type(2) {
    > svg {
      transform: rotate(180deg);
    }
  }
`;

const Template: StoryFn<typeof XAxis> = (args) => {
  const { margin } = args;
  const { left = 0, right = 0 } = margin || {};
  const xRange = [0 + left, 400 - right];
  const [xDomain, setXDomain] = useState(args.xDomain || [0, 400]);
  const xScale = getLinearScale(xDomain, xRange);

  return (
    <Container>
      <Chart xMin={0} width={400} height={400}>
        <XAxis {...args} xDomain={xDomain} xScale={xScale} />
      </Chart>
      <ButtonContainer>
        <ArrowButton
          onClick={() => setXDomain([xDomain[0] - 40, xDomain[1] - 40])}
        >
          <IconComposer icon="Chevron" />
        </ArrowButton>
        <ArrowButton
          onClick={() => setXDomain([xDomain[0] + 40, xDomain[1] + 40])}
        >
          <IconComposer icon="Chevron" />
        </ArrowButton>
      </ButtonContainer>
    </Container>
  );
};

export const Primary: StoryObj<typeof XAxis> = Template.bind({});

Primary.args = {
  ticks: 10,
  y: 375,
  margin: { top: 25, bottom: 25, left: 25, right: 25 },
};
