import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import { children, className } from "@/storybook/utilities/argTypes";

import Toast from ".";

const meta: ComponentMeta<typeof Toast> = {
  argTypes: {
    children,
    className,
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
  component: Toast,
};
export default meta;

export const Primary: ComponentStoryObj<typeof Toast> = {
  args: { children: "You found it!" },
};
