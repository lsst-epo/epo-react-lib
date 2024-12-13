import { Meta, StoryFn, StoryObj } from "@storybook/react";

import Stack from ".";
import { FunctionComponent } from "react";

const meta: Meta<typeof Stack> = {
  component: Stack,
  argTypes: {
    recursive: {
      control: "boolean",
    },
  },
};
export default meta;

const Iterator: FunctionComponent<{
  backgroundColor?: string;
  iterables: Array<number | Array<number>>;
}> = ({ backgroundColor = "var(--color-rubin-teal-400)", iterables }) => {
  return iterables.map((iteration, i) => {
    const hasChildren = Array.isArray(iteration);
    return (
      <div
        key={i}
        style={
          hasChildren
            ? {}
            : {
                backgroundColor,
                borderRadius: "var(--size-spacing-2xs)",
                color: "var(--color-font-invert)",
                padding: "var(--size-spacing-s)",
              }
        }
      >
        {hasChildren ? (
          <Iterator
            backgroundColor="var(--color-rubin-teal-200)"
            iterables={iteration}
          />
        ) : (
          iteration
        )}
      </div>
    );
  });
};

const Template: StoryFn<typeof Stack> = (args) => {
  const iterables = [1, 2, 3, [3.1, 3.2], 4, 5, 6];

  return (
    <Stack {...args}>
      <Iterator {...{ iterables }} />
    </Stack>
  );
};

export const Primary: StoryObj<typeof Stack> = Template.bind({});
