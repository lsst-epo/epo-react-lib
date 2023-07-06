import { FunctionComponent, ReactNode } from "react";
import { useTranslation } from "react-i18next";
import * as Styled from "./styles";

interface FormFieldProps {
  label: string;
  children: ReactNode;
  htmlFor: string;
  required?: boolean;
  error?: string;
  description?: string;
}

const FormField: FunctionComponent<FormFieldProps> = ({
  htmlFor,
  label,
  required,
  children,
  error,
  description,
  ...wrapperProps
}) => {
  const { t } = useTranslation();

  return (
    <div {...wrapperProps}>
      <div>
        <Styled.Label htmlFor={htmlFor}>
          {t(label, { context: required ? "required" : "" })}
        </Styled.Label>
        {description && <Styled.Description>{description}</Styled.Description>}
      </div>
      <div>
        <Styled.InputWrapper>{children}</Styled.InputWrapper>
        {error && <Styled.InputError>{error}</Styled.InputError>}
      </div>
    </div>
  );
};

FormField.displayName = "Form.FormField";

export default FormField;
