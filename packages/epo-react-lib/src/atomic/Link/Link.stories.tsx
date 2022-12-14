import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import { children } from "@/storybook/utilities/argTypes";

import Link from ".";

const meta: ComponentMeta<typeof Link> = {
  component: Link,
  argTypes: { children },
};
export default meta;

export const Primary: ComponentStoryObj<typeof Link> = {
  args: {
    href: "https://rubinobs.org/",
    children: "Rubin Observatory",
  },
};
