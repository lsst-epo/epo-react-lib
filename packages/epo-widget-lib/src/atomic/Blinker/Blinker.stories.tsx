import { Meta, StoryFn, StoryObj } from "@storybook/react";
import { useState } from "react";
import styled from "styled-components";
import Blinker from ".";
import { mockImages } from "./_mocks";

const meta: Meta<typeof Blinker> = {
  argTypes: {
    autoplay: {
      control: "boolean",
      description: "Determines if the blink will automatically start.",
      table: {
        type: {
          summary: "boolean",
        },
        category: "Configuration",
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
        category: "Configuration",
      },
    },
    interval: {
      type: { name: "number" },
      control: { type: "number", min: 0 },
      description:
        "Duration in milliseconds that each image will be displayed in the blink. <strong>Be careful setting this value below ~50 or it may flash intensely.</strong>",
      table: {
        type: {
          summary: "number",
        },
        category: "Configuration",
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
        category: "Model",
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
        category: "Model",
      },
    },
    loadedCallback: {
      description:
        "Callback that will be fired when the blinker has finished loading and started blinking.",
      action: "Loaded",
      table: {
        type: {
          summary: "() => void",
        },
        category: "Function",
      },
    },
    blinkCallback: {
      description:
        "Callback that will return the index of the next image in the `images` array to be displayed.",
      action: "Image changed",
      table: {
        type: {
          summary: "(index: number) => void",
        },
        category: "Function",
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

const Template: StoryFn<typeof Blinker> = (args) => {
  const [activeIndex, setActiveIndex] = useState(args.activeIndex);

  const blinkCallback = (nextIndex: number) => {
    args.blinkCallback && args.blinkCallback(nextIndex);
    return setActiveIndex(nextIndex);
  };

  return (
    <Container>
      <Blinker
        {...args}
        activeIndex={activeIndex}
        blinkCallback={blinkCallback}
        loadedCallback={() => args.loadedCallback && args.loadedCallback()}
      />
    </Container>
  );
};

export const Primary: StoryObj<typeof Blinker> = Template.bind({});
Primary.args = { images: mockImages };
export const SingleImage: StoryObj<typeof Blinker> = Template.bind({});
SingleImage.args = { images: [mockImages[0]] };
