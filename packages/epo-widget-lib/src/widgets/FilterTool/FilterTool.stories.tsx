import { Meta, StoryFn, StoryObj } from "@storybook/react";

import FilterTool from ".";
import { useState } from "react";

const meta: Meta<typeof FilterTool> = {
  argTypes: {
    isDisabled: {
      control: "boolean",
      description:
        "Disables filter `<select>` dropdown, mostly for answer reviews. Selected color must be prepopulated in this case.",
      table: {
        type: {
          summary: "boolean",
        },
      },
    },
    selectedColor: {
      control: "select",
      options: ["violet", "blue", "green", "yellow", "orange", "red", "none"],
      description: "Pre-selected color filter set on initial render.",
      table: {
        type: {
          summary: "violet | blue | green | yellow | orange | red | none",
        },
        defaultValue: {
          summary: "none",
        },
      },
    },
    selectionCallback: {
      action: "Filter changed",
      description:
        "Callback fired when the selection dropdown has been changed, returns the new selected color value.",
      table: {
        type: {
          summary: "(color: string) => void",
        },
      },
    },
  },
  component: FilterTool,
};
export default meta;

const Template: StoryFn<typeof FilterTool> = (args) => {
  const [color, setColor] = useState(args.selectedColor);

  return (
    <FilterTool
      {...args}
      selectedColor={color}
      selectionCallback={(value: any) => {
        args.selectionCallback && args.selectionCallback(value);
        return setColor(value);
      }}
    />
  );
};

export const Primary: StoryObj<typeof FilterTool> = Template.bind({});

export const PreSelectedColor: StoryObj<typeof FilterTool> = Template.bind({});

PreSelectedColor.args = {
  selectedColor: "violet",
};
