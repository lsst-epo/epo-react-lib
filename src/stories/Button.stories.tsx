import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Button as ButtonComponent, Props } from '@components/Atoms/Button';

const Template: Story<Props> = args => <ButtonComponent {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Primary = Template.bind({});

Primary.args = {
  children: 'EPO Repository',
  isInactive: false,
  primary: true,
};

export const Secondary = Template.bind({});

Secondary.args = {
  children: 'EPO Repository',
  isInactive: false,
  secondary: true,
};

const meta: Meta = {
  title: 'Atoms/Button',
  component: ButtonComponent,
  parameters: {
    controls: { expanded: true },
  },
  argTypes: {
    children: { description: 'ReactNode children' },
    isInactive: {
      description: `This is a disabled style without disabling the button. Good for a11y - button is visible even if form isn't complete.`,
    },
    onClick: {
      description: 'Mouse click event callback',
      action: 'onClick',
      type: {
        name: 'function',
      },
    },
  },
};

export default meta;
