import { Meta, StoryFn } from "@storybook/react";
import styled from "styled-components";
import { biggerData } from "./mocks";

import SourceSelector from ".";
import SelectionList from "./SelectionList";
import { useState } from "react";

const meta: Meta<typeof SourceSelector> = {
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
      description: "Selected sources",
      table: {
        type: {
          summary: "string[]",
        },
        defaultValue: {
          summary: "[]",
        },
        category: "Model",
      },
    },
    selectionCallback: {
      description: "Callback for when users have found a new source.",
      action: "Source found",
      table: {
        type: {
          summary: "(selected: string[]) => void",
        },
        category: "Function",
      },
    },
    alertChangeCallback: {
      description: "Callback for when an alert changes.",
      action: "Alert changed",
      table: {
        type: {
          summary: "(index: number) => void",
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

const Container = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 1em;
  align-items: start;
  justify-content: start;
`;

const Template: StoryFn<typeof SourceSelector> = (args) => {
  const [selectedSource, setSelectedSource] = useState(
    args.selectedSource || []
  );
  const [activeAlertIndex, setActiveAlertIndex] = useState(
    args.activeAlertIndex || 0
  );

  return (
    <Container>
      <SourceSelector
        {...args}
        {...{ activeAlertIndex, selectedSource }}
        selectionCallback={(sources) => {
          setSelectedSource(sources);
          args.selectionCallback && args.selectionCallback(sources);
        }}
        alertChangeCallback={(index) => {
          setActiveAlertIndex(index);
          args.alertChangeCallback && args.alertChangeCallback(index);
        }}
      />
      {!args.isDisplayOnly && (
        <SelectionList
          onRemoveCallback={() => setSelectedSource([])}
          sources={args.sources.filter(({ id }) => selectedSource.includes(id))}
        />
      )}
    </Container>
  );
};

export const Primary: StoryFn<typeof SourceSelector> = Template.bind({});
Primary.args = {
  sources: biggerData.sources,
  alerts: biggerData.alerts,
};

export const DisplayOnly: StoryFn<typeof SourceSelector> = Template.bind({});
DisplayOnly.args = {
  sources: biggerData.sources,
  selectedSource: [biggerData.sources[0].id],
  alerts: biggerData.alerts,
  isDisplayOnly: true,
};
