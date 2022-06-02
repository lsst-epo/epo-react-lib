import React, { HTMLAttributes, ReactNode } from 'react';
export interface Props extends HTMLAttributes<HTMLButtonElement> {
    children?: ReactNode;
    className?: string;
    isInactive?: boolean;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    styleAs?: 'primary' | 'secondary';

}
/**
 * A styled wrapper for the \<button> element
 */
declare const Button: React.ForwardRefExoticComponent<Props & React.RefAttributes<HTMLButtonElement>>;
export { Button };
