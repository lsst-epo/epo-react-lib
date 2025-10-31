import { Meta, StoryFn } from "@storybook/react";

const meta: Meta<typeof OrbitalViewer> = {
    component: OrbitalViewer,
};
export default meta;

// Template for all stories
const Template: StoryFn<typeof OrbitalViewer> = (args) => {
    return <OrbitalViewer {...args}></OrbitalViewer>
};


// Default story
export const Primary = Template.bind({});
Primary.args = {};

// Other Stories