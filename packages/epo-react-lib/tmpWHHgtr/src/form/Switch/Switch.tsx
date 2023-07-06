import { forwardRef, HTMLProps } from "react";
import * as Styled from "./styles";

const Switch = forwardRef<HTMLButtonElement, HTMLProps<HTMLButtonElement>>(
  ({ onClick, checked = false, ...restProps }, ref) => (
    <Styled.Switch
      ref={ref}
      type="button"
      role="switch"
      aria-checked={checked}
      onClick={onClick}
      {...(restProps as any)}
    >
      <Styled.Toggle />
      <Styled.Inner />
    </Styled.Switch>
  )
);

Switch.displayName = "Form.Switch";

export default Switch;
