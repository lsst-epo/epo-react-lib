import {
  ComponentMeta,
  ComponentStory,
  ComponentStoryObj,
} from "@storybook/react";
import ColorSwatch from "@/atomic/ColorSwatch";

import SelectListbox from ".";
import { useState } from "react";

export const options = [
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
    options: {
      control: "object",
      type: {
        name: "other",
        value: "Option[]",
        required: true,
      },
      description: "Array of `Option` objects to populate the selection.",
      table: {
        category: "Model",
        type: {
          summary: "Option[]",
        },
      },
    },
    value: {
      control: "object",
      type: {
        name: "other",
        value: "string | string[] | null",
        required: true,
      },
      description: "Initial value of the select dropdown",
      table: {
        category: "Model",
        type: {
          summary: "string | string[] | null",
        },
        defaultValue: {
          summary: "null",
        },
      },
    },
    placeholder: {
      control: "text",
      type: {
        name: "string",
      },
      description:
        "Text to be displayed in the selection box when no values are selected.",
      table: {
        category: "Display",
        type: {
          summary: "string",
        },
        defaultValue: {
          summary: "'Select'",
        },
      },
    },
    labelledById: {
      control: "text",
      type: {
        name: "string",
      },
      description: "ID of the HTML element that labels this select dropdown",
      table: {
        category: "Labels",
        type: {
          summary: "string",
        },
      },
    },
    namespace: {
      control: "text",
      type: {
        name: "string",
      },
      description:
        "Unique identifier to be attached to element via ID and ARIA attributes. Will use `useUid()` if not specified.",
      table: {
        category: "Labels",
        type: {
          summary: "string",
        },
      },
    },
    isDisabled: {
      control: "boolean",
      description:
        "Disables the control and prevents all clicks or keyboard interaction.",
      table: {
        category: "Function",
        type: {
          summary: "boolean",
        },
        defaultValue: {
          summary: false,
        },
      },
    },
    isMultiselect: {
      control: "boolean",
      description: "Enables multi-selection.",
      table: {
        category: "Function",
        type: {
          summary: "boolean",
        },
        defaultValue: {
          summary: false,
        },
      },
    },
    onChangeCallback: {
      type: { name: "function", required: true },
      action: "onChange",
      description:
        "Callback that occurs when the value of the selection has changed. Will return a `string` for single select, `string[]` for multiple selection.",
      table: {
        category: "Function",
        type: {
          summary: "(value: string | string[] | null) => void",
        },
      },
    },
    maxWidth: {
      control: "text",
      description: "Maximum width of the selection dropdown",
      table: {
        category: "Styling",
        type: {
          summary: "string",
        },
        defaultValue: {
          summary: "200px",
        },
      },
    },
    width: {
      control: "text",
      description:
        "Static width to apply to the selection dropdown, otherwise width will fit contents and cap at `maxWidth`",
      table: {
        category: "Styling",
        type: {
          summary: "string",
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
        args.onChangeCallback(value);
        return setValue(value);
      }}
    />
  );
};

export const Primary: ComponentStoryObj<typeof SelectListbox> = Template.bind(
  {}
);

Primary.args = { options, value: "red" };

export const MultiSelect: ComponentStoryObj<typeof SelectListbox> =
  Template.bind({});

MultiSelect.args = { options, value: ["red", "green"], isMultiselect: true };
