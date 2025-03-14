import { ReactNode, useState } from "react";
import { objChildren } from "@/storybook/utilities/argTypes";
import {
  Container,
  Button,
  IconComposer,
  FormButtons,
} from "@rubin-epo/epo-react-lib";
import { Meta, StoryFn, StoryObj } from "@storybook/react";

import Message from ".";

const successMessage = (
  <>
    <IconComposer size={18} icon="Checkmark" />
    You found it!
  </>
);

const failureMessage = "Try again.";

const meta: Meta<typeof Message> = {
  argTypes: {
    children: objChildren,
    onMessageChangeCallback: {
      type: { name: "function", required: true },
      description:
        "Callback made when the toast has finished displaying, should be used to toggle `isVisible` and hide the element again.",
      action: "Message closed",
    },
    isVisible: {
      control: "boolean",
      description: "Sets the visibility of the message.",
      table: {
        type: {
          summary: "boolean",
        },
      },
    },
    forIds: {
      control: "object",
      description:
        "Array of ID's corresponding to an input or element that influenced this message. For a toast this should correspond to an element that the user acted on.",
      table: {
        type: {
          summary: "string[]",
        },
      },
    },
  },
  component: Message,
};
export default meta;

const Template: StoryFn<typeof Message> = (args) => {
  const [isVisible, setVisible] = useState(args.isVisible || false);
  const [message, setMessage] = useState<ReactNode>(args.children || "");

  const handleClick = (newMessage: ReactNode) => {
    setMessage(newMessage);
    setVisible(true);
  };

  return (
    <Container>
      <Message
        {...args}
        isVisible={isVisible}
        onMessageChangeCallback={() => {
          args.onMessageChangeCallback();
          return setVisible(false);
        }}
      >
        {message}
      </Message>
      <FormButtons>
        <Button onClick={() => handleClick(successMessage)}>
          Show message
        </Button>
        <Button onClick={() => handleClick(failureMessage)} styleAs="secondary">
          Show a different message
        </Button>
      </FormButtons>
    </Container>
  );
};

export const Primary: StoryObj<typeof Message> = Template.bind({});
Primary.args = { children: successMessage };
