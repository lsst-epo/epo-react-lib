import { Meta, StoryFn } from "@storybook/react";
import OrbitalSim from ".";

const meta: Meta<typeof OrbitalSim> = {
  component: OrbitalSim,
};
export default meta;

// Template for all stories
const Template: StoryFn<typeof OrbitalSim> = (args) => {
  return <h1></h1>;
};


// Default story
export const Primary = Template.bind({});
Primary.args = {};

// Other Stories