import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import {
  singleData,
  multiData,
  title,
  colorOptions,
  multiSpectralOptions,
  readOnlyData,
} from "./__mocks__";

import ColorTool from ".";
import { Option } from "@rubin-epo/epo-react-lib/dist/types/select";

const meta: ComponentMeta<typeof ColorTool> = {
  argTypes: {
    isDisplayOnly: {
      control: "boolean",
      description:
        "Hides the controls and puts the widget into a display-only mode.",
      table: {
        type: {
          summary: "boolean",
        },
        category: "Display",
        defaultValue: {
          summary: false,
        },
      },
    },
    hideImage: {
      control: "boolean",
      description: "Hides the composited image.",
      table: {
        type: {
          summary: "boolean",
        },
        category: "Display",
        defaultValue: {
          summary: false,
        },
      },
    },
    hideSubtitle: {
      control: "boolean",
      description:
        "Hides the subtitle showing the selected object and category.",
      table: {
        type: {
          summary: "boolean",
        },
        category: "Display",
        defaultValue: {
          summary: false,
        },
      },
    },
    isDisabled: {
      control: "boolean",
      description: "Disables controls for the widget.",
      table: {
        type: {
          summary: "boolean",
        },
        category: "Function",
        defaultValue: {
          summary: false,
        },
      },
    },
    title: {
      control: "text",
      description: "Title displayed at the top of the widget.",
      table: {
        type: {
          summary: "string",
        },
        category: "Display",
      },
    },
    data: {
      type: {
        name: "other",
        value: "AstroCategory[]",
        required: true,
      },
      control: "object",
      description:
        "Available datasets that can be selected to filter. An array of one item will not show any selection controls, an array with multiple items will display a selection grouped by `type` property.",
      table: {
        type: {
          summary: "AstroCategory[]",
        },
        category: "Model",
      },
    },
    objectOptions: {
      control: "object",
      description:
        "Options to be displayed if there are multiple datasets to select from.",
      table: {
        type: {
          summary: "Option[]",
        },
        category: "Model",
        defaultValue: {
          summary: "[]",
        },
      },
    },
    colorOptions: {
      control: "object",
      description: "Filter color options.",
      table: {
        type: {
          summary: "ListboxOption[]",
        },
        category: "Model",
        defaultValue: {
          summary: "[]",
        },
      },
    },
    selectedData: {
      type: {
        name: "other",
        value: "AstroObject",
        required: true,
      },
      control: "object",
      description: "Selected dataset to be displayed and filtered.",
      table: {
        type: {
          summary: "AstroObject",
        },
        category: "Model",
      },
    },
    selectionCallback: {
      control: false,
      type: {
        name: "function",
        required: true,
      },
      description: "Callback containing the selected dataset",
      table: {
        type: {
          summary: "(selectedData: AstroObject) => void",
        },
        category: "Function",
      },
      action: "Selected data:",
    },
  },
  component: ColorTool,
};
export default meta;

export const Primary: ComponentStoryObj<typeof ColorTool> = {
  args: {
    data: singleData,
    selectedData: singleData[0].objects[0],
    title,
    colorOptions,
  },
};

const objectOptions: Option[] = [];

multiData.forEach((category) => {
  category.objects.forEach((object) => {
    objectOptions.push({
      label: `${category.type}: ${object.name}`,
      value: object.name,
      optionGroup: category.type,
    });
  });
});

export const MultipleImages: ComponentStoryObj<typeof ColorTool> = {
  args: {
    data: multiData,
    objectOptions,
    selectedData: multiData[0].objects[0],
    title,
    colorOptions: multiSpectralOptions,
  },
};

export const DisplayOnly: ComponentStoryObj<typeof ColorTool> = {
  args: {
    data: readOnlyData,
    objectOptions,
    selectedData: readOnlyData[0].objects[0],
    title,
    colorOptions: multiSpectralOptions,
    isDisplayOnly: true,
  },
};
