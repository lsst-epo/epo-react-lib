import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import { Container } from "@rubin-epo/epo-react-lib";

import FilterTool from ".";

const meta: ComponentMeta<typeof FilterTool> = {
  argTypes: {
    isReadOnly: {
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
  decorators: [
    (Story) => (
      <Container>
        <Story />
      </Container>
    ),
  ],
};
export default meta;

export const Primary: ComponentStoryObj<typeof FilterTool> = {
  args: {},
};
export const PreSelectedColor: ComponentStoryObj<typeof FilterTool> = {
  args: {
    selectedColor: "violet",
  },
};
