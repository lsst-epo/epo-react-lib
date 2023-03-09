import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import { icons } from "@rubin-epo/epo-react-lib";

import PlaybackControl from ".";

const meta: ComponentMeta<typeof PlaybackControl> = {
  argTypes: {
    icon: {
      control: { type: "select", options: Object.keys(icons) },
      type: { name: "other", value: "IconKey", required: true },
      description: "Icon to be displayed inside of the playback control.",
      table: { type: { summary: "IconKey" } },
    },
    label: {
      type: { name: "string", required: true },
      description: "Label shown beneath the icon.",
      table: { type: { summary: "string" } },
    },
    handleClick: {
      action: "Playback control clicked",
      description: "Click callback",
      type: { name: "function", required: true },
      table: { type: { summary: "MouseEventHandler<HTMLButtonElement>" } },
    },
  },
  component: PlaybackControl,
};
export default meta;

export const Primary: ComponentStoryObj<typeof PlaybackControl> = {
  args: { icon: "Play", label: "Play" },
};
