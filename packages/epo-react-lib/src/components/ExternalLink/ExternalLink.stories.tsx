import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

import ExternalLink from ".";

const meta: ComponentMeta<typeof ExternalLink> = {
  component: ExternalLink,
};
export default meta;

export const Default: ComponentStoryObj<typeof ExternalLink> = {
  args: {
    href: "https://rubinobs.org/",
    children: "Rubin Observatory",
  },
};
