import { palette } from "@/styles/abstracts";
import * as colorTokens from "@rubin-epo/epo-style-dictionary/rubin";
import kebabCase from "lodash/kebabCase";
import { Meta, StoryFn, StoryObj } from "@storybook/react";
import { objChildren, className } from "@/storybook/utilities/argTypes";
import MockChildren from "@/storybook/utilities/mocks";

import NestedContext from "@/contexts/Nested";
import Container from ".";

const meta: Meta<typeof Container> = {
  component: Container,
  argTypes: {
    children: objChildren,
    className,
    bgColor: {
      control: "select",
      options: [
        ...Object.keys(palette),
        ...Object.keys(colorTokens)
          .filter((key) => key.toLowerCase().includes("color"))
          .map(kebabCase),
      ],
      description:
        "Background color for the container, chosen from the available color tokens defined in `GlobalStyles`",
      table: {
        type: { summary: Object.keys(palette).join(" | ") },
        defaultValue: { summary: "white" },
      },
    },
    width: {
      control: "select",
      options: ["narrow", "regular", "wide"],
      description: "Width of the container.",
      table: {
        type: { summary: `"narrow" | "regular" | "wide"` },
        defaultValue: { summary: "narrow" },
      },
    },
    paddingSize: {
      control: "select",
      options: ["small", "medium", "large", "none"],
      description: "Size of padding at the top and bottom of the container",
      table: {
        type: { summary: `"small" | "medium" | "large" | "none"` },
        defaultValue: { summary: "large" },
      },
    },
    elAttributes: {
      control: "object",
      description: "HTML attributes to be passed to the `<section>` element.",
      table: {
        type: { summary: `SectionAttributes` },
      },
    },
    darkMode: {
      control: "boolean",
    },
  },
};
export default meta;

const Template: StoryFn<typeof Container> = (args) => {
  return (
    <NestedContext.Provider value={true}>
      <Container {...args} />
    </NestedContext.Provider>
  );
};

export const Primary: StoryObj<typeof Container> = {
  args: {
    children: MockChildren,
  },
};

export const Nested = Template.bind({});

Nested.args = { children: MockChildren };

export const Siblings: StoryFn<typeof Container> = (args) => {
  const padding = "medium";
  const background = "turquoise10";

  return (
    <>
      <Container paddingSize={padding} bgColor={background} {...args}>
        Background color: {args.bgColor || background}
      </Container>
      <Container paddingSize={padding} {...args} bgColor={background}>
        <div>If the sibling container has the same background color, padding-block-start is set to 0.</div>
        <div>Background color: {background}</div>
      </Container>
      <Container paddingSize={padding} {...args} bgColor="black" darkMode>
        Background color: black
      </Container>
    </>
  );
};