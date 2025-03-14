import { Meta, StoryObj } from "@storybook/react";

import ComplexTable from ".";
import { ComplexTableRow } from "./ComplexTable";

const MockTableContent: ComplexTableRow[] = [
  {
    tableRow: [
      {
        id: "0VvOOc",
        cellContent: "Header",
      },
      {
        id: "3MeJAm",
        cellContent:
          "<a href='https://rubinobservatory.org/' target='_blank'>Header</a>",
      },
      {
        id: "fD8HUc",
        cellContent: "Header",
      },
      {
        id: "C5l39F",
        cellContent:
          "<a href='https://rubinobservatory.org/' target='_blank'>Header</a>",
      },
    ],
  },
  {
    tableRow: [
      {
        id: "KsKZtU",
        cellContent: "Rubin Observatory",
      },
      {
        id: "OVp7Dp",
        cellContent:
          "<a href='https://rubinobservatory.org/' target='_blank'>Rubin Observatory</a>",
      },
      {
        id: "QRm6AM",
        cellContent:
          "<ul><li>I am an unordered list</li><li>I am an unordered list</li><li>I am an unordered list</li></ul>",
      },
      {
        id: "0S8OAG",
        cellContent:
          "<ol><li>I am an ordered list</li><li>I am an ordered list</li><li>I am an ordered list</li></ol>",
      },
    ],
  },
];

const meta: Meta<typeof ComplexTable> = {
  component: ComplexTable,
  argTypes: {
    complexTable: {
      description:
        "Array of `ComplexTableRow` objects to populate the table with.",
    },
    plainText: {
      type: "string",
      description:
        "Table caption shown above the table. Does not display if `isChild` is set.",
      table: {
        type: {
          summary: "string",
        },
      },
    },
    isChild: {
      type: "boolean",
      description:
        "If the table is a child of another component, this prop will add a narrow width container around the table.",
      table: {
        type: {
          summary: "boolean",
        },
      },
    },
    styleAs: {
      type: "string",
      control: {
        type: "select",
      },
      options: ["primary", "secondary"],
      description:
        "Determines if table is visually styled using primary or secondary theme.",
      table: {
        type: {
          summary: "primary | secondary",
        },
        defaultValue: {
          summary: "primary",
        },
      },
    },
    verticalAlignment: {
      type: "string",
      description:
        "Sets the `vertical-align` CSS property for all table cells.",
      table: {
        type: {
          summary: "string",
        },
        defaultValue: {
          summary: "top",
        },
      },
    },
  },
};
export default meta;

export const Primary: StoryObj<typeof ComplexTable> = {
  args: {
    complexTable: MockTableContent,
    styleAs: "primary",
    plainText: "Complex Table",
    isChild: false,
  },
};

export const Secondary: StoryObj<typeof ComplexTable> = {
  args: {
    complexTable: MockTableContent,
    styleAs: "secondary",
    plainText: "Complex Table",
    isChild: false,
  },
};

export const Child: StoryObj<typeof ComplexTable> = {
  args: {
    complexTable: MockTableContent,
    plainText: "Complex Table",
    isChild: true,
  },
};
