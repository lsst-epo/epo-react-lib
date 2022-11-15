import { HTMLProps, FunctionComponent } from "react";
import { useTranslation } from "react-i18next";
import * as Styled from "./styles";

const Error: FunctionComponent<HTMLProps<HTMLParagraphElement>> = ({
  children,
  ...props
}) => {
  const { t } = useTranslation();

  return (
    <Styled.Error role="alert" {...(props as any)}>
      <Styled.ErrorLabel>{t("form.error")}</Styled.ErrorLabel>
      {children}
    </Styled.Error>
  );
};

Error.displayName = "Form.Error";

export default Error;
