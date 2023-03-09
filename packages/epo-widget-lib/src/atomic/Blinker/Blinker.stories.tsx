import {
  ComponentMeta,
  ComponentStory,
  ComponentStoryObj,
} from "@storybook/react";
import { useState } from "react";
import styled from "styled-components";
import Blinker from ".";
import { mockImages } from "./__mocks__";

const meta: ComponentMeta<typeof Blinker> = {
  argTypes: {
    autoplay: {
      control: "boolean",
      description: "Determines if the blink will automatically start.",
      table: {
        type: {
          summary: "boolean",
        },
        defaultValue: {
          summary: true,
        },
      },
    },
    loop: {
      control: "boolean",
      description:
        "Determines if the blink will loop when it reaches it's end.",
      table: {
        type: {
          summary: "boolean",
        },
        defaultValue: {
          summary: true,
        },
      },
    },
    interval: {
      type: { name: "number" },
      control: { type: "number", min: 0 },
      description:
        "Duration that each image will be displayed in the blink. <strong>Be careful setting this value below ~50 or it may flash intensely.</strong>",
      table: {
        type: {
          summary: "number",
        },
        defaultValue: {
          summary: 200,
        },
      },
    },
    images: {
      type: { name: "other", value: "Image[]", required: true },
      control: "object",
      description:
        "Array of images to be played by the Blinker. Type is the same as the standard library `Image`.",
      table: {
        type: {
          summary: "Image[]",
        },
        defaultValue: {
          summary: "[]",
        },
      },
    },
    activeIndex: {
      type: { name: "number" },
      control: { type: "number", min: 0 },
      description: "Index of the currently active and visible image.",
      table: {
        type: {
          summary: "number",
        },
        defaultValue: {
          summary: 0,
        },
      },
    },
    blinkCallback: {
      type: { name: "function", required: true },
      description:
        "Callback that will return the index of the next image in the `images` array to be displayed.",
      action: "Image changed",
      table: {
        type: {
          summary: "(index: number) => void",
        },
      },
    },
  },
  component: Blinker,
};
export default meta;

const Container = styled.div`
  aspect-ratio: 1;
  max-width: 600px;
`;

const Template: ComponentStory<typeof Blinker> = (args) => {
  const [activeIndex, setActiveIndex] = useState(args.activeIndex);

  const blinkCallback = (nextIndex: number) => {
    args.blinkCallback(nextIndex);
    return setActiveIndex(nextIndex);
  };

  return (
    <Container>
      <Blinker
        {...args}
        activeIndex={activeIndex}
        blinkCallback={blinkCallback}
      />
    </Container>
  );
};

export const Primary: ComponentStoryObj<typeof Blinker> = Template.bind({});
Primary.args = { images: mockImages, activeIndex: 1 };
