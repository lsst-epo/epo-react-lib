import { Meta, StoryFn } from "@storybook/react";
import { className } from "@/storybook/utilities/argTypes";
import { useState } from "react";

import HorizontalSlider from ".";

const meta: Meta<typeof HorizontalSlider> = {
  component: HorizontalSlider,
  argTypes: {
    className: { ...className, table: { category: "Styling" } },
    min: {
      control: "number",
      description: "The maximum value of the slider.",
      table: {
        category: "Slider",
        type: { summary: "number" },
        defaultValue: { summary: 0 },
      },
    },
    max: {
      control: "number",
      description: "The minimum value of the slider.",
      table: {
        category: "Slider",
        type: { summary: "number" },
        defaultValue: { summary: 100 },
      },
    },
    step: {
      control: { type: "number", min: 0 },
      description:
        "Value to be added or subtracted on each step the slider makes. Must be greater than zero. max - min should be evenly divisible by the step value.",
      table: {
        category: "Slider",
        type: { summary: "number" },
        defaultValue: { summary: 1 },
      },
    },
    value: {
      description:
        "Determines the initial positions of the thumbs and the number of thumbs. If a number is passed a slider with one thumb will be rendered. If an array is passed each value will determine the position of one thumb. The values in the array must be sorted.",
      type: { name: "other", required: true, value: "number | number[]" },
      table: {
        category: "Slider",
        type: { summary: "number | number[]" },
      },
    },
    minLabel: {
      control: "text",
      description:
        "Text label displayed above the left side `min` value of the slider.",
      table: {
        category: "Labels",
        type: { summary: "string" },
      },
    },
    maxLabel: {
      control: "text",
      description:
        "Text label displayed above the right side `max` value of the slider.",
      table: {
        category: "Labels",
        type: { summary: "string" },
      },
    },
    labelledbyId: {
      control: "text",
      description:
        "`aria-labelledby` for screen-readers to apply to the thumbs. Used when slider rendered with separate label. For ranged values the ID's for `minLabel` and `maxLabel` will be used and `labelledbyId` ignored.",
      table: {
        category: "Labels",
        type: { summary: "string" },
      },
    },
    color: {
      control: "color",
      description:
        "Color that either fills the slider starting from the left for single values, or fills the slider between the two thumbs for ranged values. Also fills the background-color of the slider thumb.\n\nCan also be a CSS variable.",
      table: {
        category: "Styling",
        type: { summary: "string" },
      },
    },
    styleAs: {
      control: { type: "radio" },
      options: ["light", "dark"],
      table: {
        category: "Styling",
        type: { summary: "string" },
      },
    },
    onChangeCallback: {
      type: { name: "function", required: true },
      action: "Value changed",
      description:
        "Callback to bind to the `onAfterChange` event. Will pass the new value along with the slider's `label`.",
      table: {
        category: "Function",
        type: {
          summary: "(value: number | readonly number[], label: string) => void",
        },
      },
    },
    isDisabled: {
      description: "Disables the slider so the thumb cannot be moved.",
      control: "boolean",
      table: {
        category: "Function",
        type: {
          summary: "boolean",
          defaultValue: { summary: false },
        },
      },
    },
  },
};

export default meta;

const Template: StoryFn<typeof HorizontalSlider> = (args) => {
  const [value, setValue] = useState(args.value);

  return (
    <HorizontalSlider
      {...args}
      value={value}
      onChangeCallback={(v, i) => {
        args.onChangeCallback && args.onChangeCallback(v, i);
        return setValue(v);
      }}
    />
  );
};

export const SingleHandle: StoryFn<typeof HorizontalSlider> = Template.bind({});

SingleHandle.args = {
  value: 50,
};

export const DoubleHandle: StoryFn<typeof HorizontalSlider> = Template.bind({});

DoubleHandle.args = {
  value: [20, 80],
  minLabel: "Min",
  maxLabel: "Max",
};

export const Disabled: StoryFn<typeof HorizontalSlider> = Template.bind({});

Disabled.args = {
  ...SingleHandle.args,
  isDisabled: true,
};

export const Marks: StoryFn<typeof HorizontalSlider> = Template.bind({});

Marks.args = {
  ...SingleHandle.args,
  marks: 10,
  step: 10,
};

export const Dark: StoryFn<typeof HorizontalSlider> = Template.bind({});

Dark.args = {
  ...SingleHandle.args,
  color: undefined,
  styleAs: "dark",
};
