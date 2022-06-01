import React, { HTMLAttributes, ReactNode, forwardRef } from 'react';
import classNames from 'classnames';

export interface Props extends HTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  className?: string;
  isInactive?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  styleAs: 'primary' | 'secondary';
}

// Please do not use types off of a default export module or else Storybook Docs will suffer.
// see: https://github.com/storybookjs/storybook/issues/9556
/**
 * A styled wrapper for the \<button> element
 */
const Button = forwardRef<HTMLButtonElement, Props>(
  ({ children, className, isInactive, styleAs, onClick, ...props }, ref) => {
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      if (!isInactive && onClick) {
        onClick(event);
      } else {
        event.preventDefault();
      }

      return;
    };

    return (
      <button
        {...props}
        className={classNames('epo-btn', `btn-${styleAs}`)}
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

Button.defaultProps = {
  styleAs: 'primary',
};

export { Button };
