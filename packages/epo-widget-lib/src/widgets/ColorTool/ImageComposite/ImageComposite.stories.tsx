import { StoryFn, Meta, StoryObj } from "@storybook/react";
import { readOnlyData } from "../__mocks__";

import ImageComposite from ".";
import { updateFilters } from "../lib/utils";
import { useRef } from "react";

const meta: Meta<typeof ImageComposite> = {
  argTypes: {
    filters: {
      type: {
        name: "other",
        value: "ImageFilter[]",
        required: true,
      },
      control: "object",
      description: "Color filters to render",
      table: {
        type: {
          summary: "ImageFilter[]",
        },
        category: "Model",
      },
    },
  },
  component: ImageComposite,
};
export default meta;

const Template: StoryFn<typeof ImageComposite> = (args) => {
  const ref = useRef<HTMLCanvasElement>(null);

  return <ImageComposite {...args} ref={ref} />;
};

export const Primary: StoryObj<typeof ImageComposite> = Template.bind({});

Primary.args = {
  filters: updateFilters(readOnlyData[0].objects[0]),
};
