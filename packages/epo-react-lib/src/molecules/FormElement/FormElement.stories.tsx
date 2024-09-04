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
    showRequiredAsterisk: {
      description: "Show an asterisk on required fields",
      table: {
        type: {
          summary: "boolean",
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

export const Primary: StoryObj<typeof FormElement> = {
  args: {
    label: "Address",
    description: "Include apartment number if applicable",
    required: true,
  },
};

export const Error: StoryObj<typeof FormElement> = {
  args: {
    label: "Email",
    description: "Only email addresses from a registered domain are allowed.",
    error: "Email address domain is not valid for our organization",
    type: "email",
    required: true,
  },
};
