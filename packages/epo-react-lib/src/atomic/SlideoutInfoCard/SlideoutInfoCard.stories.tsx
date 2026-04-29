import { Meta, StoryFn, StoryObj } from "@storybook/react";
import { useState } from "react";
import Button from "../Button";

import SlideoutInfoCard from ".";

const meta: Meta<typeof SlideoutInfoCard> = {
  component: SlideoutInfoCard,
  argTypes: {
    isOpen: {
      control: "boolean",
      description: "State that controls if the slideout is opened or not.",
      type: "boolean",
      table: {
        type: {
          summary: "boolean",
        },
      },
    },
    slideFrom: {
      control: "select",
      options: ["top", "bottom", "left", "right"],
      description:
        "Side of the window that the slideout will enter from and be pinned to",
      table: {
        type: {
          summary: "top|bottom|left|right",
        },
      },
    },
  },
};
export default meta;

const Template: StoryFn<typeof SlideoutInfoCard> = (args) => {

  const [isActive, setIsActive] = useState(args.isOpen || false);
  const content = "Lorem ipsum dolor sit amet.";

  return (
    <>
      <Button 
        onClick={() => {isActive ? setIsActive(false) : setIsActive(true)}}
        style={{margin: "10px"}}>
        {isActive ? "Hide Details" : "Show Details"}
      </Button>

      <SlideoutInfoCard isOpen={isActive} slideFrom={args.slideFrom}>
          <p>{content}</p>
          <p>{content}</p>
          <p>{content}</p>
      </SlideoutInfoCard>
    </>
  );
};

export const Primary: StoryObj<typeof SlideoutInfoCard> = Template.bind({});
