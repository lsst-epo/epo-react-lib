import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import { readOnlyData } from "../__mocks__";

import ImageComposite from ".";
import { updateFilters } from "../utilities";

const meta: ComponentMeta<typeof ImageComposite> = {
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

export const Primary: ComponentStoryObj<typeof ImageComposite> = {
  args: {
    filters: updateFilters(readOnlyData[0].objects[0]),
  },
};
