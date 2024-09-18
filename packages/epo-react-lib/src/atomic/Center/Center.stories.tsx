import { Meta, StoryFn, StoryObj } from "@storybook/react";

import Center from ".";
import { FunctionComponent } from "react";
import Stack from "../Stack";

const meta: Meta<typeof Center> = {
  component: Center,
  argTypes: {
    maxWidth: { control: "text" },
    andText: { control: "boolean" },
    intrinsic: { control: "boolean" },
    gutter: { control: "text" },
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

const Template: StoryFn<typeof Center> = (args) => {
  const iterables = [1, 2, 3, 4, 5, 6];

  return (
    <Center {...args}>
      <Stack>
        <Iterator {...{ iterables }} />
      </Stack>
    </Center>
  );
};

export const Primary: StoryObj<typeof Center> = Template.bind({});

Primary.args = {
  maxWidth: "60ch",
};
