import {
  ComponentMeta,
  ComponentStoryObj,
  ComponentStory,
} from "@storybook/react";
import { objChildren } from "@/storybook/utilities/argTypes";

import BasicModal from ".";
import Button from "@/atomic/Button";
import { useState } from "react";

const meta: ComponentMeta<typeof BasicModal> = {
  component: BasicModal,
  argTypes: {
    children: objChildren,
    open: {
      type: "boolean",
      description: "Determines if the modal is visible or not.",
      table: {
        type: {
          summary: "boolean",
        },
        defaultValue: {
          summary: false,
        },
      },
    },
    darkMode: {
      type: "boolean",
      description: "Sets the dark mode theme.",
      table: {
        type: {
          summary: "boolean",
        },
        defaultValue: {
          summary: false,
        },
      },
    },
    title: {
      type: "string",
      description: "Modal title displayed at the top.",
      table: {
        type: {
          summary: "string",
        },
      },
    },
    description: {
      type: "string",
      description: "Modal description displayed after the title.",
      table: {
        type: {
          summary: "string",
        },
      },
    },
    onClose: {
      type: "function",
      action: "Closed",
      description:
        "Callback either when user clicks outside the modal or clicks the close button. Close button will attach an event, click outside will not.",
      table: {
        type: {
          summary: "(event?: MouseEvent) => void",
        },
      },
    },
  },
};
export default meta;

const Template: ComponentStory<typeof BasicModal> = (args) => {
  const [isOpen, setIsOpen] = useState(args.open);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Click to open modal</Button>
      <BasicModal
        {...args}
        open={isOpen}
        onClose={(event) => {
          args.onClose(event);
          return setIsOpen(false);
        }}
      />
    </>
  );
};

export const Primary: ComponentStoryObj<typeof BasicModal> = Template.bind({});
Primary.args = {
  title: "Modal Title",
  description: "Modal description",
  children:
    "Cosmic ipsum universe right ascension pole star solstice cosmic rays extragalactic black body NASA cluster muttnik synodic superior planets gravitational constant new moon telescope inferior planets syzygy perturbation falling star quasar red dwarf satellite density day dust vernal equinox zodiac inclination azimuth weightlessness spectrum variable star magnitude flare Mir minor planet transparency cosmology full moon terrestrial quarter moon red shift seeing gravity binary star red giant star space station local group",
};

export const DarkMode: ComponentStoryObj<typeof BasicModal> = Template.bind({});
DarkMode.args = {
  ...Primary.args,
  darkMode: true,
};
