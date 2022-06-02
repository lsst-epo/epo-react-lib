import React from 'react';
import { render, screen } from '@testing-library/react';
import { Primary, Secondary } from '@stories/Button.stories';

describe('Primary Button', () => {
  it('should render a button with the class of btn-primary', () => {
    const { args } = Primary;
    render(<Primary {...args} />);
    const primaryButton = screen.getByRole('button');
    expect(primaryButton).toHaveClass('btn-primary');
  });
});

describe('Secondary Button', () => {
  it('should render a button with the class of btn-secondary', () => {
    const { args } = Secondary;
    render(<Secondary {...args} />);
    const secondaryButton = screen.getByRole('button');
    expect(secondaryButton).toHaveClass('btn-secondary');
  });
});
