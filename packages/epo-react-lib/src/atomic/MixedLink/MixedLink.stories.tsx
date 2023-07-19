import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import { children, className } from "@/storybook/utilities/argTypes";

import MixedLink from ".";

const meta: ComponentMeta<typeof MixedLink> = {
  component: MixedLink,
  argTypes: {
    children: {
      ...children,
      table: {
        category: "Display",
        type: {
          summary: "string",
        },
      },
    },
    className: {
      ...className,
      table: {
        category: "Display",
        type: {
          summary: "string",
        },
      },
    },
    url: {
      control: "text",
      description: "Link url",
      type: {
        name: "string",
        required: true,
      },
      table: {
        category: "Navigation",
        type: {
          summary: "string",
        },
      },
    },
    customText: {
      control: "text",
      description:
        "Text to be displayed in link, will display if `children` is not set. Same function as `text` prop.",
      table: {
        category: "Display",
        type: {
          summary: "string",
        },
      },
    },
    text: {
      control: "text",
      description:
        "Text to be displayed in link, will display if `children` is not set. Same function as `customText` prop.",
      table: {
        category: "Display",
        type: {
          summary: "string",
        },
      },
    },
    element: {
      control: "object",
      description: "URI object to be used in lieu of `url`.",
      table: {
        category: "Navigation",
      },
    },
    params: {
      control: "object",
      description: "URL parameters to be attached to the link",
      table: {
        category: "Navigation",
      },
    },
  },
};
export default meta;

export const ExternalLink: ComponentStoryObj<typeof MixedLink> = {
  args: {
    children: "Rubin Observatory",
    url: "https://rubinobservatory.org/",
  },
};

const BASE_URL =
  process.env.STORYBOOK_ENV === "true"
    ? process.env.STORYBOOK_PUBLIC_BASE_URL
    : process.env.NEXT_PUBLIC_BASE_URL;

export const InternalLink: ComponentStoryObj<typeof MixedLink> = {
  args: {
    ...ExternalLink.args,
    url: `${BASE_URL}`,
    params: { path: "/story/atomic-accordion--primary" },
  },
};
