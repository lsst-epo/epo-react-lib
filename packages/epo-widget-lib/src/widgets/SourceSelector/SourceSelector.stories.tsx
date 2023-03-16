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
      },
    },
    // height?: number;
    // xDomain?: number[];
    // yDomain?: number[];
    // sources: Source[];
    // alerts?: Alert[];
    // selectedSource: Source[];
    // images: Image[];
    // selectionCallback: (data: Source[]) => void;
    // blinkConfig: BlinkConfig;
    // color?: string
    selectionCallback: { action: "Source found" },
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
