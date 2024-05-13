import { Meta, StoryFn, StoryObj } from "@storybook/react";
import styled from "styled-components";
import Controls from ".";
import ResetButton from "@/atomic/Button/patterns/Reset";

const meta: Meta<typeof Controls> = {
  argTypes: {},
  component: Controls,
};
export default meta;

const Widget = styled.div`
  background-color: var(--neutral30);
  border-radius: 5px;
  width: 100%;
  height: 100%;
`;

const Control = styled.div`
  background-color: var(--neutral30);
  border-radius: 5px;
  width: 100%;
  height: 2rem;
`;

const Template: StoryFn<typeof Controls> = (args) => {
  return (
    <Controls
      {...args}
      widget={<Widget />}
      controls={() => (
        <>
          <Control />
          <Control />
          <Control />
        </>
      )}
      caption="Selected Object"
      actions={<ResetButton onResetCallback={() => undefined} />}
    />
  );
};

export const Primary: StoryObj<typeof Controls> = Template.bind({});
Primary.args = {};
