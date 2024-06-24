import { Meta, StoryFn } from "@storybook/react";
import { className } from "@/storybook/utilities/argTypes";
import styled from "styled-components";

import Picture from ".";

const meta: Meta<typeof Picture> = {
  component: Picture,
  argTypes: {
    className,
  },
};
export default meta;

const generateCantoSrcSet = (cantoUrl: string, width?: number) => {
  const sizes = [100, 240, 320, 500, 640, 800, 2050].filter((size) =>
    width ? size < width : true
  );

  return sizes.map((size) => {
    return {
      src: `${cantoUrl}${size}`,
      size,
    };
  });
};

const LandscapeTitle = styled.h2`
  @media screen and (orientation: portrait) {
    display: none;
  }
`;
const PortraitTitle = styled.h2`
  @media screen and (orientation: landscape) {
    display: none;
  }
`;

const Template: StoryFn<typeof Picture> = (args) => {
  return (
    <>
      <LandscapeTitle>Landscape</LandscapeTitle>
      <PortraitTitle>Portrait</PortraitTitle>
      <Picture {...args} />
    </>
  );
};

export const Primary = Template.bind({});

Primary.args = {
  image: {
    altText:
      "Left: eye diagram shows retinal zoom to cone calls; Right: RGB filter matrix in checkerboard pattern overlaid on CCD image sensor.",
    url: "https://rubin.canto.com/direct/image/tkoffkll494l911ifvkgfvvo2n/90FxaRE5CIBMdXI-c7NbS0i1kcA/original?content-type=image%2Fpng&name=Eye-Bayer+filter+comparison.png",
    srcSet: generateCantoSrcSet(
      "https://rubin.canto.com/direct/image/tkoffkll494l911ifvkgfvvo2n/a6Y3hW01DVA7FdctXx9aqtzV8JI/m800/",
      1639
    ),
    width: 1639,
    height: 684,
  },
  sources: [
    {
      src: "https://rubin.canto.com/direct/image/9u18e5a58t17t372gj0eepo80c/A9NWRljpJ8XF4R4q91q1d0ubEuA/original?content-type=image%2Fjpeg&name=Eye-Bayer+filter+comparison+V2-100.jpg",
      srcSet: generateCantoSrcSet(
        "https://rubin.canto.com/direct/image/9u18e5a58t17t372gj0eepo80c/DN9LDOXn0jmgoGTOJP8agB55AHE/m800/",
        823
      ),
      width: 823,
      height: 1249,
      mediaCondition: "(orientation: portrait)",
    },
  ],
};
