import { Meta, StoryFn, StoryObj } from "@storybook/react";
import MasterDetailView from ".";
import slides from "./mock/large-scale-slides.json";

const meta: Meta<typeof MasterDetailView> = {
  argTypes: {},
  component: MasterDetailView,
};
export default meta;

const Template: StoryFn<typeof MasterDetailView> = (args) => (
  <MasterDetailView {...args} />
);

export const Primary: StoryObj<typeof MasterDetailView> = Template.bind({});

Primary.args = {
  navLabel: "Redshift ranges",
  slides: slides.map(({ redshiftRange, image }) => ({
    imageSrc: image,
    label: redshiftRange,
    header: `Redshift Range: ${redshiftRange}`,
    alt: `Large scale structure of galaxies with redshifts between ${redshiftRange.replace("-", " and ")}`,
  })),
};
