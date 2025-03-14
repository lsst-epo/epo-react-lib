import { Meta, StoryFn } from "@storybook/react";
import { className } from "@/storybook/utilities/argTypes";

import Image from ".";

const meta: Meta<typeof Image> = {
  component: Image,
  argTypes: {
    image: {
      control: "object",
    },
    className,
    title: {
      control: "text",
    },
  },
};
export default meta;

const generateCantoSrcSet = (cantoUrl: string, width?: number) => {
  const sizes = [100, 240, 320, 500, 640, 800, 2050].filter((size) =>
    width ? size < width : true,
  );

  return sizes.map((size) => {
    return {
      src: `${cantoUrl}${size}`,
      size,
    };
  });
};

export const Primary: StoryFn<typeof Image> = (args) => <Image {...args} />;

Primary.args = {
  image: {
    altText:
      "The LSST Camera, the largest camera ever built for astronomy. The camera opening is a large black ring with glass lenses, a bit smaller than a person is tall. In the center of the opening is the camera's focal plane detector, which is made of 189 square CCD chips arranged in a roughly square shape. The camera is suspended on a white metal frame with white handrails. The completely white room gives the image an overall sterile feel.",
    url: "https://rubin.canto.com/direct/image/e6g9n6c01h309c80qs19eslh55/WqxBY3pXe8VzEh-VuAAoxCmycAQ/original?content-type=image%2Fjpeg&name=IMG_7688.jpeg",
    srcSet: generateCantoSrcSet(
      "https://rubin.canto.com/direct/image/e6g9n6c01h309c80qs19eslh55/tifpy6fo0_wn9ieJy1-dVmmy_v8/m800/",
      5712,
    ),
    width: 5712,
    height: 4284,
  },
  title: "LSST Camera at SLAC",
};
