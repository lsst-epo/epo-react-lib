import { Meta, StoryFn, StoryObj } from "@storybook/react";
import IsochronePlot from ".";
import { getAgeLibrary } from "./mock";
import data from "./mock/points.json";
import { useState } from "react";

const meta: Meta<typeof IsochronePlot> = {
  argTypes: {},
  component: IsochronePlot,
};
export default meta;

const props = {
  data,
  name: "M67",
  yAxis: {
    max: 7,
  },
};

const Template: StoryFn<typeof IsochronePlot> = (
  args,
  { loaded: { ageLibrary } }
) => {
  const [value, setValue] = useState(args.value);
  return (
    <IsochronePlot
      {...{ ...args, value, ageLibrary }}
      isLoading={!ageLibrary}
      onChangeCallback={(value) => {
        setValue(value);
      }}
    />
  );
};

export const Primary: StoryObj<typeof IsochronePlot> = Template.bind({});

Primary.args = { ...props };
Primary.loaders = [
  async () => ({
    ageLibrary: await getAgeLibrary(),
  }),
];

export const ReadOnly: StoryObj<typeof IsochronePlot> = Template.bind({});

ReadOnly.args = {
  ...Primary.args,
  isDisplayOnly: true,
  value: { age: 9.5, distance: 9.75 },
};
ReadOnly.loaders = Primary.loaders;
