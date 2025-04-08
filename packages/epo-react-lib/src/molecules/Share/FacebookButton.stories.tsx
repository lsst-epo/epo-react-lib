import { Meta, StoryObj } from "@storybook/react";

import FacebookButton from "./FacebookButton";

const meta: Meta<typeof FacebookButton> = {
  component: FacebookButton,
};
export default meta;

export const Primary: StoryObj<typeof FacebookButton> = {
  args: {
    url: "https://rubinobservatory.org/",
    title: "New image gallery posts!",
  },
};
