import { Meta, StoryObj } from "@storybook/react";
import { children } from "@/storybook/utilities/argTypes";

import Figure from ".";
import Image from "../Image";

const meta: Meta<typeof Figure> = {
  component: Figure,
  argTypes: {
    caption: {
      control: "text",
    },
    children,
    withBackground: {
      control: "boolean",
      table: { type: { summary: "boolean" } },
    },
    layout: {
      control: "select",
      options: ["horizontal", "vertical"],
      table: {
        type: { summary: "horizontal | vertical" },
        defaultValue: { summary: "vertical" },
      },
    },
  },
};
export default meta;

export const VerticalLayout: StoryObj<typeof Figure> = {
  args: {
    children: (
      <Image
        image={{
          url: "https://rubin.canto.com/direct/image/2378fnrgod2nnfha8mt8fool0q/Jn8gNFKti6C9EsMjscGaiHzWQlE/m800/800",
          altText:
            "Wide view of the Rubin Observatory facility and smaller surrounding buildings against an orange and purple twilight sky",
          width: 800,
          height: 530,
        }}
      />
    ),
    caption:
      "Rubin Observatory at twilight, May 15, 2022. Credit: Rubin Obs/NSF/AURA",
    withBackground: false,
  },
};

export const HorizontalLayout: StoryObj<typeof Figure> = {
  args: {
    ...VerticalLayout.args,
    layout: "horizontal",
  },
};

export const WithBackground: StoryObj<typeof Figure> = {
  args: {
    ...VerticalLayout.args,
    withBackground: true,
  },
};
