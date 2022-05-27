import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Link, Props } from '../src/Link';

const meta: Meta = {
  title: 'Link',
  component: Link,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<Props> = args => <Link {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {
  href: 'https://github.com/lsst-epo',
  children: 'LSST Repository',
};
