import { forwardRef, HTMLProps, PropsWithChildren } from "react";
import { IconKey } from "@/svg/icons";
import IconComposer from "@/svg/IconComposer";
import * as Styled from "./styles";

export type ButtonStyleAs = "primary" | "secondary" | "tertiary" | "educator";

export interface ButtonProps extends HTMLProps<HTMLButtonElement> {
  className?: string;
  icon?: IconKey;
  iconSize?: number;
  isBlock?: boolean;
  styleAs?: ButtonStyleAs;
  /** This is a disabled style without disabling the button.
   * Good for a11y - button is visible even if form isn't complete.
   */
  isInactive?: boolean;
}

const Button = forwardRef<HTMLButtonElement, PropsWithChildren<ButtonProps>>(
  (
    {
      children,
      icon,
      iconSize,
      isBlock,
      styleAs,
      isInactive,
      className,
      ...buttonProps
    },
    ref
  ) => (
    <Styled.Button
      $isBlock={isBlock}
      $styleAs={styleAs}
      $hasIcon={!!icon}
      aria-disabled={isInactive || undefined}
      data-testid="button"
      {...{ ...(buttonProps as any), className, ref }}
    >
      {icon && (
        <IconComposer
          icon={icon}
          size={iconSize}
          aria-hidden={children && true}
        />
      )}
      {children && <Styled.ButtonText>{children}</Styled.ButtonText>}
    </Styled.Button>
  )
);

Button.displayName = "Atomic.Button";

export default Button;
