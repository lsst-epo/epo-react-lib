import { Meta, StoryObj } from "@storybook/react";
import Categories from "@/storybook/utilities/categories";
import ImageStack from ".";

const meta: Meta<typeof ImageStack> = {
  argTypes: {
    images: {
      description: "Array of images to be displayed.",
      table: {
        category: Categories.model,
      },
    },
    describedById: {
      description:
        "ID of an element that contains an accessible description of the stacked images",
      table: {
        category: Categories.accessibility,
      },
    },
    visible: {
      description:
        "Index of the visible image, an array of boolean values indicating which images are visible, or `undefined` if none are visible",
      table: {
        type: {
          summary: "number | Array<boolean>",
        },
        category: Categories.display,
      },
    },
    loadCallback: {
      description: "Callback made once all images have completed their load",
      action: "Images loaded",
      table: {
        type: {
          summary: "() => void",
        },
        defaultValue: {
          summary: 0,
        },
        category: Categories.function,
      },
    },
    mixBlendMode: {
      control: "text",
      description:
        "Optional CSS `mix-blend-mode` to apply to all stacked images",
      table: {
        type: {
          summary: "string",
        },
        category: Categories.display,
      },
    },
  },
  component: ImageStack,
};
export default meta;

const urls = [
  "/images/lunar_phase/new-moon.webp",
  "/images/lunar_phase/waxing-crescent.webp",
  "/images/lunar_phase/first-quarter.webp",
  "/images/lunar_phase/waxing-gibbous.webp",
  "/images/lunar_phase/full.webp",
  "/images/lunar_phase/waning-gibbous.webp",
  "/images/lunar_phase/third-quarter.webp",
  "/images/lunar_phase/waning-crescent.webp",
];

const images = urls.map((url) => {
  return { url, width: 640, height: 613 };
});

export const Primary: StoryObj<typeof ImageStack> = {
  args: { images, visible: 0 },
};
export const MultipleActive: StoryObj<typeof ImageStack> = {
  args: {
    images,
    visible: [false, false, true, true, false, false, true, false],
  },
};
