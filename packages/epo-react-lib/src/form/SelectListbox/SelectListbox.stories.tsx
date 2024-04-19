import { Meta, StoryFn } from "@storybook/react";
import { options } from "./__mocks__";
import SelectListbox from ".";
import { useState } from "react";

const meta: Meta<typeof SelectListbox> = {
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
        value: "string | string[]",
        required: false,
      },
      description: "Initial value of the select dropdown",
      table: {
        category: "Model",
        type: {
          summary: "string | string[]",
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

const Template: StoryFn<typeof SelectListbox> = (args) => {
  const [value, setValue] = useState(args.value);

  return (
    <SelectListbox
      {...args}
      value={value as any}
      onChangeCallback={(value: any) => {
        args.onChangeCallback(value);
        return setValue(value);
      }}
    />
  );
};

export const Primary: StoryFn<typeof SelectListbox> = Template.bind({});

Primary.args = { options, value: "red" };

export const MultiSelect: StoryFn<typeof SelectListbox> = Template.bind({});

MultiSelect.args = { options, value: ["red", "green"], isMultiselect: true };
