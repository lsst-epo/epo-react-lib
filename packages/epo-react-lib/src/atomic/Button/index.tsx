import {
  forwardRef,
  HTMLProps,
  PropsWithChildren,
  PropsWithRef,
  ReactNode,
} from "react";
import { IconKey } from "@/svg/icons";
import IconComposer, { IconComposerProps } from "@/svg/IconComposer";
import * as Styled from "./styles";

export type ButtonStyleAs = "primary" | "secondary" | "tertiary" | "educator";

export interface ButtonProps
  extends PropsWithRef<HTMLProps<HTMLButtonElement>> {
  className?: string;
  icon?: IconKey | ReactNode;
  iconSize?: IconComposerProps["size"];
  iconAlignment?: "left" | "right";
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
      iconAlignment = "left",
      className,
      ...buttonProps
    },
    ref
  ) => {
    const Icon =
      typeof icon === "string" ? (
        <IconComposer
          icon={icon}
          size={iconSize || "1rem"}
          aria-hidden={children && true}
        />
      ) : (
        icon
      );

    return (
      <Styled.Button
        $styleAs={styleAs}
        aria-disabled={isInactive || undefined}
        data-testid="button"
        data-is-block={isBlock}
        dir={iconAlignment === "right" ? "rtl" : undefined}
        {...{ ...(buttonProps as any), className, ref }}
      >
        {Icon}
        {children && <Styled.ButtonText>{children}</Styled.ButtonText>}
      </Styled.Button>
    );
  }
);

Button.displayName = "Atomic.Button";

export default Button;
