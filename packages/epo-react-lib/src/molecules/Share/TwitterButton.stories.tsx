import { Meta, StoryObj } from "@storybook/react";

import TwitterButton from "./TwitterButton";

const meta: Meta<typeof TwitterButton> = {
  component: TwitterButton,
};
export default meta;

export const Primary: StoryObj<typeof TwitterButton> = {
  args: {
    url: "https://rubinobservatory.org/",
    title: "New image gallery posts!",
  },
};
