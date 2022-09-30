import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

import Link from ".";

const meta: ComponentMeta<typeof Link> = {
  component: Link,
};
export default meta;

export const Default: ComponentStoryObj<typeof Link> = {
  args: {
    href: "https://rubinobs.org/",
    children: "Rubin Observatory",
  },
};
