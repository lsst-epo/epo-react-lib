import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import { getGradientImage } from "@/storybook/utilities/helpers";

import MasonryGrid from ".";

const image = {
  altText: "A placeholder image",
  url: getGradientImage(200, 200),
  width: 200,
  height: 200,
};

const galleryItems = [
  {
    galleryItemCategory: [{ id: "a1", slug: "image", title: "Gallery Item 1" }],
    id: "a1",
    image: [image],
    title: "Gallery Item 1",
    uri: "",
  },
  {
    galleryItemCategory: [{ id: "a2", slug: "video", title: "Gallery Item 2" }],
    id: "a2",
    image: [image],
    title: "Gallery Item 2",
    uri: "",
  },
  {
    galleryItemCategory: [{ id: "a3", slug: "image", title: "Gallery Item 3" }],
    id: "a3",
    image: [image],
    title: "Gallery Item 3",
    uri: "",
  },
  {
    galleryItemCategory: [{ id: "a4", slug: "video", title: "Gallery Item 4" }],
    id: "a4",
    image: [image],
    title: "Gallery Item 4",
    uri: "",
  },
  {
    galleryItemCategory: [{ id: "a5", slug: "image", title: "Gallery Item 5" }],
    id: "a5",
    image: [image],
    title: "Gallery Item 1",
    uri: "",
  },
  {
    galleryItemCategory: [{ id: "a6", slug: "video", title: "Gallery Item 6" }],
    id: "a6",
    image: [image],
    title: "Gallery Item 2",
    uri: "",
  },
  {
    galleryItemCategory: [{ id: "a7", slug: "image", title: "Gallery Item 7" }],
    id: "a7",
    image: [image],
    title: "Gallery Item 3",
    uri: "",
  },
  {
    galleryItemCategory: [{ id: "a8", slug: "video", title: "Gallery Item 8" }],
    id: "a8",
    image: [image],
    title: "Gallery Item 4",
    uri: "",
  },
];

const meta: ComponentMeta<typeof MasonryGrid> = {
  component: MasonryGrid,
  argTypes: {
    items: {
      description: "Array of gallery entries to show in masonry grid",
      type: {
        name: "other",
        value: "GalleryEntry[]",
        required: true,
      },
      table: {
        type: {
          summary: "GalleryEntry[]",
        },
      },
    },
    randomize: {
      control: "boolean",
      description:
        "Will use randomly selected masonry grid sizes instead of following the preset order.",
      table: {
        type: {
          summary: "boolean",
          default: false,
        },
      },
    },
  },
};
export default meta;

export const Primary: ComponentStoryObj<typeof MasonryGrid> = {
  args: {
    items: galleryItems,
  },
};

export const Randomized: ComponentStoryObj<typeof MasonryGrid> = {
  args: {
    items: galleryItems,
    randomize: true,
  },
};
