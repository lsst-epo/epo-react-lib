import {
  ComponentMeta,
  ComponentStory,
  ComponentStoryObj,
} from "@storybook/react";
import ColorSwatch from "@/atomic/ColorSwatch";

import SelectListbox from ".";
import { useState } from "react";

const options = [
  {
    value: "red",
    label: "Red",
    icon: <ColorSwatch color="#D93831" size="small" />,
  },
  {
    value: "orange",
    label: "Orange",
    icon: <ColorSwatch color="#E38E3E" size="small" />,
  },
  {
    value: "yellow",
    label: "Yellow",
    icon: <ColorSwatch color="#F9DE4E" size="small" />,
  },
  {
    value: "green",
    label: "Green",
    icon: <ColorSwatch color="#87D665" size="small" />,
  },
  {
    value: "blue",
    label: "Blue",
    icon: <ColorSwatch color="#0618F5" size="small" />,
  },
  {
    value: "violet",
    label: "Violet",
    icon: <ColorSwatch color="#7B26F5" size="small" />,
  },
  {
    value: "none",
    label: "None",
    icon: <ColorSwatch color="transparent" size="small" />,
  },
];

const meta: ComponentMeta<typeof SelectListbox> = {
  component: SelectListbox,
  argTypes: {
    isDisabled: { control: "boolean" },
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
  },
};

export default meta;

const Template: ComponentStory<typeof SelectListbox> = ({
  value: argValue,
  ...args
}) => {
  const [value, setValue] = useState(argValue);

  return (
    <SelectListbox
      {...args}
      value={value}
      onChangeCallback={(value) => {
        console.log(value);
        return setValue(value);
      }}
    />
  );
};

export const Primary: ComponentStoryObj<typeof SelectListbox> = Template.bind(
  {}
);

Primary.args = { options, value: "red", isMultiselect: true };
