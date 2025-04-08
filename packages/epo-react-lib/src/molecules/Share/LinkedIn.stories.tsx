import { Meta, StoryObj } from "@storybook/react";

import LinkedInButton from "./LinkedInButton";

const meta: Meta<typeof LinkedInButton> = {
  component: LinkedInButton,
};
export default meta;

export const Primary: StoryObj<typeof LinkedInButton> = {
  args: {
    url: "https://rubinobservatory.org/",
    title: "New image gallery posts!",
    source: "Rubin Observatory",
  },
};
