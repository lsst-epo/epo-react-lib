import { Meta, StoryObj } from "@storybook/react";

import CopyUrlButton from "./CopyUrlButton";

const meta: Meta<typeof CopyUrlButton> = {
  component: CopyUrlButton,
};

export default meta;

export const Primary: StoryObj<typeof CopyUrlButton> = {
  args: {
    url: "https://rubinobservatory.org/",
  },
};
