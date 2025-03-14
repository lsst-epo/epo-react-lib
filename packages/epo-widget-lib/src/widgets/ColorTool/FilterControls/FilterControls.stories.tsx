import { Meta, StoryFn, StoryObj } from "@storybook/react";
import styled from "styled-components";
import { singleData, colorOptions } from "../__mocks__";

import FilterControls from ".";
import { getBrightnessValue } from "../lib/utils";
import { useState } from "react";
import { ImageFilter } from "..";

const meta: Meta<typeof FilterControls> = {
  argTypes: {
    filter: {
      type: {
        name: "other",
        value: "ImageFilter",
        required: true,
      },
      control: "object",
      description: "Color filter configuration",
      table: {
        type: {
          summary: "ImageFilter",
        },
        category: "Model",
      },
    },
    isDisabled: {
      type: {
        name: "boolean",
        required: true,
      },
      control: "boolean",
      description: "Disables controls for the widget.",
      table: {
        type: {
          summary: "boolean",
        },
        category: "Function",
      },
    },
    onChangeFilterCallback: {
      control: false,
      type: {
        name: "function",
        required: true,
      },
      description: "Callback containing the selected dataset",
      table: {
        type: {
          summary: "(filter: ImageFilter) => void",
        },
        category: "Function",
      },
      action: "Updated filter",
    },
    buttonLabelledById: {
      control: "text",
      type: {
        name: "string",
        required: true,
      },
      description: "Label ID for the filter toggle button",
      table: {
        type: {
          summary: "string",
        },
        category: "Accessibility",
      },
    },
    selectLabelledById: {
      control: "text",
      type: {
        name: "string",
        required: true,
      },
      description: "Label ID for the filter select dropdown",
      table: {
        type: {
          summary: "string",
        },
        category: "Accessibility",
      },
    },
    sliderLabelledById: {
      control: "text",
      type: {
        name: "string",
        required: true,
      },
      description: "Label ID for intensity slider",
      table: {
        type: {
          summary: "string",
        },
        category: "Accessibility",
      },
    },
  },
  component: FilterControls,
};
export default meta;

const Container = styled.div`
  display: grid;
  grid-template-columns: max-content minmax(100px, 1fr) minmax(100px, 2fr);
  grid-auto-rows: max-content;
  gap: 10px;
  align-items: center;
`;

const Template: StoryFn<typeof FilterControls> = (args) => {
  const [filter, setFilter] = useState(args.filter);

  return (
    <Container>
      <FilterControls
        {...args}
        filter={filter}
        onChangeFilterCallback={(filter: ImageFilter) => {
          args.onChangeFilterCallback(filter);
          return setFilter(filter);
        }}
      />
    </Container>
  );
};

const { value, min, max } = singleData[0].objects[0].filters[0];

export const Primary: StoryObj<typeof FilterControls> = Template.bind({});

Primary.args = {
  filter: {
    ...singleData[0].objects[0].filters[0],
    color: "#EC1C24",
    brightness: getBrightnessValue(min, max, value),
  },
  colorOptions,
};
