import styled from "styled-components";
import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

import FormField from ".";
import Input, { Password } from "@/form/Input";
import { protoContainer } from "@/styles/globalStyles";

const FormFieldDecorator = styled.div`
  ${protoContainer()}
`;

const meta: ComponentMeta<typeof FormField> = {
  component: FormField,
  argTypes: {
    children: {
      type: {
        name: "other",
        value: "ReactNode",
        required: true,
      },
      description: "Input to populate form field",
      table: {
        type: {
          summary: "ReactNode",
        },
      },
    },
    htmlFor: {
      type: {
        name: "string",
        required: true,
      },
      description: "ID of the child input to be put in the label `for` field",
      table: {
        type: {
          summary: "string",
        },
      },
    },
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
    error: {
      control: "text",
      description: "Error message to be shown beneath form field",
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
  decorators: [
    (Story) => (
      <FormFieldDecorator>
        <Story />
      </FormFieldDecorator>
    ),
  ],
};
export default meta;

const textFieldId = "textField";
const textFieldProps = {
  id: textFieldId,
  placeholder: "<Input /> component child",
};
const passwordId = "password";
const passwordProps = {
  id: passwordId,
  placeholder: "<Password /> component child",
};

export const TextField: ComponentStoryObj<typeof FormField> = {
  args: {
    children: [<Input {...textFieldProps} />],
    htmlFor: textFieldId,
    label: "Form text field",
    description: "Some instructions for this field",
    required: true,
  },
};

export const PasswordField: ComponentStoryObj<typeof FormField> = {
  args: {
    children: [<Password {...passwordProps} />],
    htmlFor: passwordId,
    label: "Form text field",
    description: "Some instructions for this field",
    required: true,
  },
};

export const WithError: ComponentStoryObj<typeof FormField> = {
  args: {
    children: [<Input {...textFieldProps} />],
    htmlFor: textFieldId,
    label: "Form text field",
    description: "Some instructions for this field",
    error: "This field is invalid!",
    required: true,
  },
};
