import { HTMLProps, FunctionComponent } from "react";
import * as Styled from "./styles";

const Error: FunctionComponent<HTMLProps<HTMLSpanElement>> = ({
  children,
  ...props
}) => {
  return (
    <Styled.Error aria-live="assertive" {...(props as any)}>
      {children}
    </Styled.Error>
  );
};

Error.displayName = "Form.Error";

export default Error;
