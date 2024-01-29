import { Meta, StoryObj } from "@storybook/react";
import Categories from "@/storybook/utilities/categories";
import SupernovaThreeVector from ".";

const meta: Meta<typeof SupernovaThreeVector> = {
  argTypes: {},
  component: SupernovaThreeVector,
};
export default meta;

const data = [
  1912, 708, 1199, 1272, 998, 264, 251, 247, 225, 209, 200, 198, 196, 186, 187,
  185, 179, 180, 174, 171, 166, 167, 170, 164, 165, 160, 159, 160, 155, 156,
  156, 157, 158,
];

// const data = new Array(33).fill(2000);

const binnedData = data.map((d, i) => {
  return { bin: i * 100, value: d };
});

export const Primary: StoryObj<typeof SupernovaThreeVector> = {
  args: { data: binnedData },
};
