import { forwardRef, HTMLProps, useState } from "react";
import { useTranslation } from "react-i18next";
import IconComposer from "@/svg/IconComposer";
import * as Styled from "./styles";

const Password = forwardRef<HTMLInputElement, HTMLProps<HTMLInputElement>>(
  (inputProps, ref) => {
    const [show, setShow] = useState(false);

    const { t } = useTranslation();

    return (
      <Styled.Wrapper>
        <Styled.Input
          data-testid="password"
          ref={ref}
          type={show ? "text" : "password"}
          {...(inputProps as any)}
        />
        <Styled.Toggle
          type="button"
          aria-controls={inputProps.id}
          aria-selected={show}
          onClick={() => setShow(!show)}
        >
          <Styled.SrText>
            {show ? t("form.hide_password") : t("form.show_password")}
          </Styled.SrText>
          <IconComposer icon="eye" />
        </Styled.Toggle>
      </Styled.Wrapper>
    );
  }
);

Password.displayName = "Form.Password";

export default Password;
