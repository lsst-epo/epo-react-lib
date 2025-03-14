import { Meta, StoryObj } from "@storybook/react";

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

const meta: Meta<typeof Select> = {
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

export const Primary: StoryObj<typeof Select> = {
  args: { options },
};

export const WithOptionGroups: StoryObj<typeof Select> = {
  args: {
    options: options.map((o, i) => ({
      ...o,
      optionGroup: i < 4 ? "Inner planets" : "Outer planets",
    })),
  },
};

export const WithEmptyOption: StoryObj<typeof Select> = {
  args: { options, emptyOption },
};
