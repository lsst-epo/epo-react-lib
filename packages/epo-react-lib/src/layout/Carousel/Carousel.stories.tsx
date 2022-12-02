import styled from "styled-components";
import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

import Carousel from ".";
import MockChildren from "../../../.storybook/utilities/MockChildren";
import { protoContainer } from "@/styles/globalStyles";

const CarouselDecorator = styled.div`
  ${protoContainer()}
`;

const meta: ComponentMeta<typeof Carousel> = {
  component: Carousel,
  argTypes: {
    className: {
      description: "Additional CSS classes.",
      control: "text",
      table: {
        type: {
          summary: "string",
        },
      },
    },
    children: {
      description: "React components to populate carousel",
      table: {
        type: {
          summary: "ReactNode",
        },
      },
    },
    options: {
      description: "Carousel configuration options.",
      table: {
        type: {
          summary: "CarouselOptions",
        },
      },
    },
  },
  decorators: [
    (Story) => (
      <CarouselDecorator>
        <Story />
      </CarouselDecorator>
    ),
  ],
};
export default meta;

export const Primary: ComponentStoryObj<typeof Carousel> = {
  args: {
    children: MockChildren,
    options: {
      selectedAttraction: 0.075,
      friction: 0.48,
      pageDots: false,
      prevNextButtons: false,
      lazyLoad: true,
      adaptiveHeight: false,
      initialIndex: 0,
      ariaLabel: "Slideshow",
      wrapAround: true,
      percentPosition: false,
    },
  },
};
