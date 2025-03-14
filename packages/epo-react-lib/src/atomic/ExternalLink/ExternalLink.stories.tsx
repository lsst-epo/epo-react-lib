import { Meta, StoryObj } from "@storybook/react";

import ExternalLink from ".";

const meta: Meta<typeof ExternalLink> = {
  component: ExternalLink,
};
export default meta;

export const Primary: StoryObj<typeof ExternalLink> = {
  args: {
    href: "https://rubinobservatory.org/",
    children: "Rubin Observatory",
  },
};
