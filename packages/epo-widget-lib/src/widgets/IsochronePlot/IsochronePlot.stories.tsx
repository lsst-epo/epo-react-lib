import { Meta, StoryFn, StoryObj } from "@storybook/react";
import IsochronePlot from ".";
import { points, ageLibrary } from "./mock";
import { useState } from "react";

const meta: Meta<typeof IsochronePlot> = {
  argTypes: {
    onChangeCallback: {
      action: "Form value changed",
    },
  },
  component: IsochronePlot,
};
export default meta;

const props = {
  data: points,
  ageLibrary,
};

const Template: StoryFn<typeof IsochronePlot> = (args) => {
  const [value, setValue] = useState(args.value);
  return (
    <IsochronePlot
      {...{ ...args, value }}
      onChangeCallback={(value) => {
        args.onChangeCallback(value);
        setValue(value);
      }}
    />
  );
};

export const Primary: StoryObj<typeof IsochronePlot> = Template.bind({});

Primary.args = { ...props };

export const ReadOnly: StoryObj<typeof IsochronePlot> = Template.bind({});

ReadOnly.args = { ...props, isDisplayOnly: true };
