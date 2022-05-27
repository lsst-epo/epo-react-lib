import { HTMLAttributes, ReactNode } from 'react';
import styled from 'styled-components';

export interface Props extends HTMLAttributes<HTMLAnchorElement> {
  href: string;
  children?: ReactNode;
}

// Please do not use types off of a default export module or else Storybook Docs will suffer.
// see: https://github.com/storybookjs/storybook/issues/9556
/**
 * A styled wrapped for the <a> element
 */
export const Link = styled.a<Props>`
  font-size: 16px;
  font-weight: 600;
  color: var(--turquoise70);
  text-decoration: none;
`;
