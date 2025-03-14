import { Meta, StoryObj } from "@storybook/react";
import { className } from "@/storybook/utilities/argTypes";

import ResponsiveImage from ".";
import { generateCantoSrcSet } from "@/storybook/utilities/helpers";

const meta: Meta<typeof ResponsiveImage> = {
  component: ResponsiveImage,
  argTypes: {
    image: {
      control: "object",
    },
    className,
    ratio: {
      control: "text",
      defaultValue: "8:5",
    },
    title: {
      control: "text",
    },
    position: {
      control: "text",
    },
    zoom: {
      control: {
        type: "number",
        step: 0.1,
      },
    },
  },
};
export default meta;

export const Primary: StoryObj<typeof ResponsiveImage> = {
  args: {
    image: {
      altText: "A placeholder image",
      url: "https://rubin.canto.com/direct/image/92ks9squih3nt4q34e18h3fp3m/sWu7y1OuXVmQ73ZyCpXfzEe687Y/original?content-type=image%2Fjpeg&name=Rubin+Marzo+2024+N%C2%BA49.jpg",
      srcSet: generateCantoSrcSet(
        "https://rubin.canto.com/direct/image/92ks9squih3nt4q34e18h3fp3m/0LtY2_W-ennwJhtJ4FVU_tCLmds/m800/",
      ),
      width: 5464,
      height: 3070,
    },
  },
};
