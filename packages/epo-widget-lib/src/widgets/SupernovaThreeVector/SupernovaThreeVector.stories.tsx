import { Meta, StoryObj } from "@storybook/react";
import SupernovaThreeVector from ".";

const meta: Meta<typeof SupernovaThreeVector> = {
  argTypes: {},
  component: SupernovaThreeVector,
};
export default meta;

const step = 100;

const data = [
  1912, 708, 1199, 1272, 998, 264, 251, 247, 225, 209, 200, 198, 196, 186, 187,
  185, 179, 180, 174, 171, 166, 167, 170, 164, 165, 160, 159, 160, 155, 156,
  156, 157, 158,
];

const binnedData = data.map((d, i) => {
  return { bin: i * step, value: d };
});

const urls = [
  "/images/supernovae_skymap/range0_500.png",
  "/images/supernovae_skymap/range500_1000.png",
  "/images/supernovae_skymap/range1000_2500.png",
];

const images = binnedData.map(({ bin }) => {
  let index = 0;

  if (bin < 500) {
    index = 0;
  } else if (bin < 1000) {
    index = 1;
  } else {
    index = 2;
  }

  return { url: urls[index], width: 924, height: 462 };
});

const supernovae = [
  {
    id: "m58",
    long: 290.396828,
    lat: 74.355236,
    distance: 2719,
    magnitude: 0,
  },
  {
    id: "m96",
    long: 234.435409,
    lat: 57.010427,
    distance: 1824,
    magnitude: 0,
  },
  {
    id: "m49",
    long: 286.921809,
    lat: 70.196069,
    distance: 1945,
    magnitude: 0,
  },
];

export const Primary: StoryObj<typeof SupernovaThreeVector> = {
  args: {
    histogramData: binnedData,
    userData: supernovae,
    step,
    binnedImages: images,
  },
};
