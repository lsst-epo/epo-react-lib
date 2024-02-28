import { Meta, StoryFn, StoryObj } from "@storybook/react";
import styled from "styled-components";
import IconComposer from "@rubin-epo/epo-react-lib/IconComposer";
import Base from ".";
import { useState } from "react";

const meta: Meta<typeof Base> = {
  argTypes: {
    width: {
      control: "number",
      description: "The width of the SVG viewbox",
      table: {
        type: {
          summary: "number",
        },
        defaultValue: {
          summary: 900,
        },
      },
    },
    height: {
      control: "number",
      description: "The height of the SVG viewbox",
      table: {
        type: {
          summary: "number",
        },
        defaultValue: {
          summary: 300,
        },
      },
    },
    xMin: {
      control: "number",
      description: "The upper left corner X coordinate",
      table: {
        type: {
          summary: "number",
        },
        defaultValue: {
          summary: 0,
        },
      },
    },
    yMin: {
      control: "number",
      description: "The upper left corner Y coordinate",
      table: {
        type: {
          summary: "number",
        },
        defaultValue: {
          summary: 0,
        },
      },
    },
  },
  component: Base,
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
  &:nth-of-type(3) {
    > svg {
      transform: rotate(90deg);
    }
  }
  &:nth-of-type(4) {
    > svg {
      transform: rotate(270deg);
    }
  }
`;

const Template: StoryFn<typeof Base> = (args) => {
  const [min, setMin] = useState([args.xMin || 0, args.yMin || 0]);

  return (
    <Container>
      <Base
        {...args}
        xMin={min[0]}
        yMin={min[1]}
        width={args.width || 5}
        height={args.height || 5}
      >
        <rect x="0" y="0" width="10" height="10" />
        <circle cx="5" cy="5" r="4" fill="white" />
      </Base>
      <ButtonContainer>
        <ArrowButton
          disabled={min[0] === 0}
          onClick={() => setMin([0, min[1]])}
        >
          <IconComposer icon="Chevron" />
        </ArrowButton>
        <ArrowButton disabled={min[0] > 0} onClick={() => setMin([5, min[1]])}>
          <IconComposer icon="Chevron" />
        </ArrowButton>
        <ArrowButton
          disabled={min[1] === 0}
          onClick={() => setMin([min[0], 0])}
        >
          <IconComposer icon="Chevron" />
        </ArrowButton>
        <ArrowButton disabled={min[1] > 0} onClick={() => setMin([min[0], 5])}>
          <IconComposer icon="Chevron" />
        </ArrowButton>
      </ButtonContainer>
    </Container>
  );
};

export const Primary: StoryObj<typeof Base> = Template.bind({});
