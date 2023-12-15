import { useState } from "react";
import { Meta, StoryFn, StoryObj } from "@storybook/react";
import styled from "styled-components";
import Button from "../Button";

import Slideout from ".";

const meta: Meta<typeof Slideout> = {
  component: Slideout,
  argTypes: {
    isOpen: {
      control: "boolean",
      description: "State that controls if the slideout is opened or not.",
      type: "boolean",
      table: {
        type: {
          summary: "boolean",
        },
        defaultValue: { summary: false },
      },
    },
    onCloseCallback: {
      action: "Slideout closed",
      description: "Callback after the slideout has closed",
      table: {
        type: {
          summary: "() => void",
        },
      },
    },
    onOpenCallback: {
      action: "Slideout opened",
      description: "Callback after the slideout has opened",
      table: {
        type: {
          summary: "() => void",
        },
      },
    },
    slideFrom: {
      control: "select",
      options: ["top", "bottom", "left", "right"],
      description:
        "Side of the window that the slideout will enter from and be pinned to",
      table: {
        type: {
          summary: "top|bottom|left|right",
        },
        defaultValue: { summary: true },
      },
    },
    showBackground: {
      control: "boolean",
      description: "Shows a semi-transparent background",
      type: "boolean",
      table: {
        type: {
          summary: "boolean",
        },
        defaultValue: { summary: true },
      },
    },
  },
};
export default meta;

const Panel = styled.div`
  background-color: var(--neutral10);
  display: flex;
  flex-direction: column;
  gap: 1em;
  padding: 1em;

  & > * + * {
    margin-block-start: 1em;
  }
`;

const Template: StoryFn<typeof Slideout> = (args) => {
  const [isOpen, setIsOpen] = useState(args.isOpen || false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)} isBlock>
        Open
      </Button>
      <Slideout
        {...args}
        isOpen={isOpen}
        onCloseCallback={() => setIsOpen(false)}
      >
        <Panel
          style={{
            [args.slideFrom === "top" || args.slideFrom === "bottom"
              ? "height"
              : "width"]: "30ch",
            [args.slideFrom === "top" || args.slideFrom === "bottom"
              ? "width"
              : "height"]: "100%",
          }}
        >
          Cosmic ipsum helium perturbation Hubble's law gravity visual magnitude
          limb equinox Bailey's beads escape velocity eccentricity meteoroid
          superior planets black hole revolve Oort cloud Sputnik singularity
          planetoid translunar ice giant Lagrange points twinkling ecliptic
          apastron circumpolar planet perihelion nebula gibbous moon local arm
          event horizon space station penumbra orbital eccentricity zodiac
          eclipse Kepler's laws north star sun wormhole minor planet spectrum
          deep space dark matter celestial coordinates cosmology asterism moon
          <Button onClick={() => setIsOpen(false)} isBlock>
            Close
          </Button>
        </Panel>
      </Slideout>
    </>
  );
};

export const Primary: StoryObj<typeof Slideout> = Template.bind({});
