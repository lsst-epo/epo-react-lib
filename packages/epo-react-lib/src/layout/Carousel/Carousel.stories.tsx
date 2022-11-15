import styled from "styled-components";
import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

import Carousel from ".";
import Figure from "@/atomic/Figure";
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

const mockSlidePropsFirst = {
  children: "Slide 1",
  caption:
    "Cosmic ipsum hyperbolic orbit culmination gravitation Messier object perihelion asterism transit totality Mercury revolve libration nadir precession weightlessness ephemeris meteor shower meteoroid interstellar free fall zenith meridian red dwarf bolometer ionosphere superior planets conjunction solar wind dwarf planet occultation cosmic rays big bang theory escape velocity helium double star vacuum sky synodic black hole wavelength ice giant plane of the ecliptic visual magnitude scintillation Van Allen belt spectroscope Oort cloud space station Mir",
  withBackground: true,
};
const mockSlidePropsSecond = {
  children: "Slide 2",
  caption:
    "Penumbra radiation Kirkwood gaps vernal equinox gegenschein scintillation radiant space exploration eclipse solar wind gravitational constant helium declination planetoid dust Roche limit inferior planets corona Milky Way inner planets Lunar mare astronomical unit Van Allen belt precession Bailey's beads shooting star Mars docking half moon neutron star supernova waning equinox cosmic rays dwarf planet perihelion quarter moon terrestrial Kepler's laws observatory zenith orbit day limb Mir conjunction nadir event horizon",
};

export const Primary: ComponentStoryObj<typeof Carousel> = {
  args: {
    children: [
      <Figure {...mockSlidePropsFirst} />,
      <Figure {...mockSlidePropsSecond} />,
    ],
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
