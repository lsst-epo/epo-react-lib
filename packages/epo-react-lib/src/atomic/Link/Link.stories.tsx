import { Meta, StoryObj } from "@storybook/react";
import { children } from "@/storybook/utilities/argTypes";

import Link from ".";

const meta: Meta<typeof Link> = {
  component: Link,
  argTypes: { children },
};
export default meta;

export const Primary: StoryObj<typeof Link> = {
  args: {
    href: "https://rubinobservatory.org/",
    children: "Rubin Observatory",
  },
};
