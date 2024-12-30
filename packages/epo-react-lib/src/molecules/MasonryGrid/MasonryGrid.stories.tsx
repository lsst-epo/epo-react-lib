import { Meta, StoryObj } from "@storybook/react";

import MasonryGrid from ".";
import MasonryImage from "../MasonryImage";
import Image from "@/atomic/Image";

const images = [
  {
    altText: "LSST Camera Arrival",
    url: "https://rubin.canto.com/direct/image/otj8rcru8p0cp1kcnd623k4o3m/DGGRP7fxmsNt7UAzGOz9xFZdsiI/m800/800",
    width: 7952,
    height: 5304,
  },
  {
    altText: "Rubin's 8.4-meter primary/tertiary mirror is installed",
    url: "https://rubin.canto.com/direct/image/r3ej29u8gp5pv9f1tr1po2no1c/QL-a932sO6tIOH9wDRU_gIeRBnw/m800/800",
    width: 1600,
    height: 900,
  },
  {
    altText: "Rubin Observatory May 2024",
    url: "https://rubin.canto.com/direct/image/4kajmgp41h0fv9igtd4jckrq47/RgLamKnNCU3o077AyLR_Ts4lQuY/m800/800",
    width: 7940,
    height: 5296,
  },
  {
    altText:
      "The 8-meter Rubin telescope structure is tipped on its side so it look like a metal ring standing vertically. The car-sized commissioning camera is being lifted and installed into the center of the ring.",
    url: "https://rubin.canto.com/direct/image/tp2m2lqr0528ncjs7rnn746l7o/DJfQiF9cH9uJHvhoPtgwCypgi2M/m800/800",
    width: 7952,
    height: 5304,
  },
  {
    altText:
      "The car-sized, black and teal commissioning camera sits on a yellow transport cart on Rubin Observatory's heavy lift elevator platform. The elevator lift is open to the outside and the Chilean desert mountains are visible in the background beneath a blue sky.",
    url: "#",
    width: 7952,
    height: 5304,
  },
];

const galleryItems = new Array(50).fill(0).map((val, i) => {
  return {
    id: i,
    linkProps: { href: "https://rubinobservatory.org" },
    isVideo: i % 6 === 0,
  };
});

const meta: Meta<typeof MasonryGrid> = {
  component: MasonryGrid,
  argTypes: {},
};
export default meta;

const items = galleryItems.map(({ id, ...props }, i) => {
  return {
    id,
    element: (
      <MasonryImage {...props}>
        <Image
          image={images[Math.floor(Math.random() * images.length)]}
          title={`Gallery item ${i + 1}`}
        />
      </MasonryImage>
    ),
  };
});

export const Primary: StoryObj<typeof MasonryGrid> = {
  args: { items },
};
