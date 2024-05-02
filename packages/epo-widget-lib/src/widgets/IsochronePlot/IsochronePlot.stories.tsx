import { Meta, StoryFn, StoryObj } from "@storybook/react";
import IsochronePlot from ".";
import { points } from "./mock";

const meta: Meta<typeof IsochronePlot> = {
  argTypes: {},
  component: IsochronePlot,
};
export default meta;

const props = {
  data: points,
};

const Template: StoryFn<typeof IsochronePlot> = (args) => {
  return <IsochronePlot {...args} />;
};

export const Primary: StoryObj<typeof IsochronePlot> = Template.bind({});

Primary.args = { ...props };

export const ReadOnly: StoryObj<typeof IsochronePlot> = Template.bind({});

ReadOnly.args = { ...props, isDisplayOnly: true };
