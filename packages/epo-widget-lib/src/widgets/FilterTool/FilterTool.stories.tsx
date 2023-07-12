import {
  ComponentMeta,
  ComponentStory,
  ComponentStoryObj,
} from "@storybook/react";
import { Container } from "@rubin-epo/epo-react-lib";

import FilterTool from ".";
import { useState } from "react";

const meta: ComponentMeta<typeof FilterTool> = {
  argTypes: {
    isDisabled: {
      control: "boolean",
      description:
        "Disables filter `<select>` dropdown, mostly for answer reviews. Selected color must be prepopulated in this case.",
      table: {
        type: {
          summary: "boolean",
        },
        defaultValue: {
          summary: false,
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

const Template: ComponentStory<typeof FilterTool> = ({
  selectedColor: argColor,
  ...args
}) => {
  const [color, setColor] = useState(argColor);

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

export const Primary: ComponentStoryObj<typeof FilterTool> = Template.bind({});

export const PreSelectedColor: ComponentStoryObj<typeof FilterTool> =
  Template.bind({});

PreSelectedColor.args = {
  selectedColor: "violet",
};
