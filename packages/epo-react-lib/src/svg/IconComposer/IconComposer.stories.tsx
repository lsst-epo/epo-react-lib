import { Meta, StoryFn, StoryObj } from "@storybook/react";
import styled from "styled-components";
import { className } from "@/storybook/utilities/argTypes";
import Icons from "../icons";

import IconComposer from ".";

const meta: Meta<typeof IconComposer> = {
  component: IconComposer,
  argTypes: {
    icon: {
      control: { type: "select" },
      options: Object.keys(Icons),
      description: "Name of the icon to be rendered",
      table: { category: "Model" },
    },
    fill: {
      control: "color",
      description: "Color to apply to SVG fill",
      table: { category: "Styling" },
    },
    stroke: {
      control: "color",
      description: "Color to apply to SVG strokes",
      table: { category: "Styling" },
    },
    size: {
      control: "object",
      description: "Size to render the SVG icon",
      table: { type: { summary: "string | number" }, category: "Styling" },
    },
    className: { ...className, table: { category: "Styling" } },
    svgProps: {
      control: "object",
      description: "Additional props to pass to the SVG",
      table: { category: "Model" },
    },
    customIcons: {
      control: "object",
      description: "Custom SVG icons that will override the included iconset",
      table: {
        type: { summary: "{[key: string]: ComponentType<SVGProps>}" },
        category: "Model",
      },
    },
  },
};
export default meta;

const IconGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(var(--grid-size, 36px), 1fr));
  gap: 0.5rem;
  width: 100%;
`;

const Template: StoryFn<typeof IconComposer> = ({ size = 36, ...args }) => {
  return (
    <IconGrid style={{ "--grid-size": Number(size) ? size : `${size}px` }}>
      {Object.keys(Icons).map((key) => (
        <IconComposer key={key} {...args} size={size} icon={key} />
      ))}
    </IconGrid>
  );
};

export const Playground: StoryObj<typeof IconComposer> = {
  args: {
    icon: "Search",
  },
};

export const AllIcons: StoryObj<typeof IconComposer> = Template.bind({});

AllIcons.args = {
  size: 36,
};

AllIcons.parameters = {
  controls: {
    exclude: /.*/g,
  },
};
