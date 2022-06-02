import React, { HTMLAttributes, ReactNode, forwardRef } from 'react';
import classNames from 'classnames';

export interface Props extends HTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  className?: string;
  isInactive?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  primary?: boolean;
  secondary?: boolean;
}

// Please do not use types off of a default export module or else Storybook Docs will suffer.
// see: https://github.com/storybookjs/storybook/issues/9556
/**
 * A styled wrapper for the \<button> element
 */
const Button = forwardRef<HTMLButtonElement, Props>(
  (
    { children, className, isInactive, primary, secondary, onClick, ...props },
    ref
  ) => {
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      if (!isInactive && onClick) {
        onClick(event);
      } else {
        event.preventDefault();
      }

      return;
    };

    const classes = {
      'epo-btn': true,
      'btn-primary': primary,
      'btn-secondary': secondary,
    };

    return (
      <button
        {...props}
        className={classNames(classes, className)}
        type="button"
        aria-disabled={isInactive || undefined}
        ref={ref}
        onClick={handleClick}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

Button.defaultProps = {};

export { Button };
