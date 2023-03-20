import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import { data, images, biggerData } from "./mocks";

import SourceSelector from ".";

const meta: ComponentMeta<typeof SourceSelector> = {
  argTypes: {
    width: {
      description: "Static width for the widget in pixels",
      control: { type: "number", min: 0 },
      table: {
        type: {
          summary: "number",
        },
        defaultValue: {
          summary: 600,
        },
        category: "Display",
      },
    },
    height: {
      description: "Static height for the widget in pixels",
      control: { type: "number", min: 0 },
      table: {
        type: {
          summary: "number",
        },
        defaultValue: {
          summary: 600,
        },
        category: "Display",
      },
    },
    sources: {
      type: {
        name: "other",
        value: "Source[]",
        required: true,
      },
      description:
        "Source objects for users to find, objects will be rendered as clickable points.",
      table: {
        type: {
          summary: "Source[]",
        },
        category: "Model",
      },
    },
    alerts: {
      type: {
        name: "other",
        value: "Alert[]",
        required: true,
      },
      description:
        "Associated alerts for the sources, can be used to show the elapsed time of the alerts.",
      table: {
        type: {
          summary: "Alert[]",
        },
        category: "Configuration",
      },
    },
    selectedSource: {
      control: "object",
      description: "Pre-selected sources to show when the widget renders",
      table: {
        type: {
          summary: "Source[]",
        },
        defaultValue: {
          summary: "[]",
        },
        category: "Model",
      },
    },
    images: {
      type: {
        name: "other",
        value: "Image[]",
        required: true,
      },
      description:
        "Images to be shown in the blinker. Can be a single or multiple images, images can be associated with an alert by giving it the same array index as its alert.",
      table: {
        type: {
          summary: "Image[]",
        },
        defaultValue: {
          summary: "[]",
        },
        category: "Configuration",
      },
    },
    selectionCallback: {
      description: "Callback for when users have found a new source.",
      action: "Source found",
      table: {
        type: {
          summary: "(selected: Source[]) => void",
        },
        category: "Function",
      },
    },
    blinkConfig: {
      description:
        "Additional configuration for the blinker including autoplay, loop, and duration.",
      table: {
        type: {
          summary: "{autoplay?: boolean; loop?: boolean; duration?: number}",
        },
        category: "Configuration",
      },
    },
    color: {
      control: "color",
      description: "Color to override any other colors defined for sources.",
      table: {
        type: {
          summary: "string",
        },
        category: "Styling",
      },
    },
    isDisplayOnly: {
      control: "boolean",
      description:
        "Puts the widget into a display only mode where users cannot click on new selections and the message is removed from the DOM. User's can still use alert playback controls.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: false },
        category: "Display",
      },
    },
  },
  component: SourceSelector,
};
export default meta;

export const Primary: ComponentStoryObj<typeof SourceSelector> = {
  args: { sources: data.sources, images },
};

export const Alerts: ComponentStoryObj<typeof SourceSelector> = {
  args: {
    sources: biggerData.sources,
    images: biggerData.alerts?.map((a) => a.image),
    alerts: biggerData.alerts,
  },
};

export const DisplayOnly: ComponentStoryObj<typeof SourceSelector> = {
  args: {
    sources: biggerData.sources,
    selectedSource: [biggerData.sources[0]],
    images: biggerData.alerts?.map((a) => a.image),
    alerts: biggerData.alerts,
    isDisplayOnly: true,
  },
};
