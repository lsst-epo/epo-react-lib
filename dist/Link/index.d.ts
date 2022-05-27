import { HTMLAttributes, ReactNode } from 'react';
export interface Props extends HTMLAttributes<HTMLAnchorElement> {
    href: string;
    children?: ReactNode;
}
/**
 * A styled wrapped for the <a> element
 */
export declare const Link: import("styled-components").StyledComponent<"a", any, Props, never>;
