import { Meta, StoryObj } from "@storybook/react";

import EmailButton from "./EmailButton";

const meta: Meta<typeof EmailButton> = {
  component: EmailButton,
};
export default meta;

export const Primary: StoryObj<typeof EmailButton> = {
  args: {
    url: "https://rubinobservatory.org/",
    title: "New image gallery posts!",
  },
};
