import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

import ExternalLink from ".";

const meta: ComponentMeta<typeof ExternalLink> = {
  component: ExternalLink,
};
export default meta;

export const Primary: ComponentStoryObj<typeof ExternalLink> = {
  args: {
    href: "https://rubinobservatory.org/",
    children: "Rubin Observatory",
  },
};
