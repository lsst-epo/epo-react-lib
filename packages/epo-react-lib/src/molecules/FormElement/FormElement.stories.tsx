import { Meta, StoryObj } from "@storybook/react";
import FormElement from ".";

const meta: Meta<typeof FormElement> = {
  component: FormElement,
  argTypes: {
    label: {
      type: {
        name: "string",
        required: true,
      },
      description: "Display label to be associated with input",
      table: {
        type: {
          summary: "string",
        },
      },
    },
    description: {
      description: "Additional text describing the form field.",
      table: {
        type: {
          summary: "string",
        },
      },
    },
    required: {
      description:
        "Determines if the input field is marked as `required` for form submission",
      table: {
        type: {
          summary: "boolean",
        },
      },
    },
  },
};
export default meta;

export const TextField: StoryObj<typeof FormElement> = {
  args: {
    label: "Create a password",
    description:
      "Passwords should be at least 8 characters long and should contain a mixture of letters, numbers, and other characters.",
    required: true,
  },
};
