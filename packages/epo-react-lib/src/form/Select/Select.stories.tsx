import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

import Select from ".";

const options = [
  { value: "mercury", label: "Mercury" },
  { value: "venus", label: "Venus" },
  { value: "earth", label: "Earth" },
  { value: "mars", label: "Mars" },
  { value: "jupiter", label: "Jupiter" },
  { value: "saturn", label: "Saturn" },
  { value: "uranus", label: "Uranus" },
  { value: "neptune", label: "Neptune" },
];

const emptyOption = { value: "", label: "" };

const meta: ComponentMeta<typeof Select> = {
  component: Select,
  argTypes: {
    options: {
      control: "object",
      description: "Options to populate select with",
      type: {
        name: "other",
        value: "Option[]",
        required: true,
      },
      table: {
        type: {
          summary: "Option[]",
        },
      },
    },
    emptyOption: {
      control: "object",
      description: "Empty option to populate the first dropdown spot",
      table: {
        type: {
          summary: "Option",
        },
      },
    },
  },
};
export default meta;

export const Primary: ComponentStoryObj<typeof Select> = {
  args: { options },
};

export const WithEmptyOption: ComponentStoryObj<typeof Select> = {
  args: { options, emptyOption },
};
