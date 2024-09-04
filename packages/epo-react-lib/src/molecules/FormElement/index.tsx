import {
  DetailedHTMLProps,
  FunctionComponent,
  InputHTMLAttributes,
} from "react";
import * as Styled from "./styles";
import Input from "@/form/Input";
import Error from "@/form/Error";

interface FormElementProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label: string;
  description?: string;
  error?: string;
}

const FormElement: FunctionComponent<FormElementProps> = ({
  label,
  description,
  error,
  className,
  ...props
}) => {
  return (
    <Styled.Label {...{ className }}>
      {label}
      {description && <Styled.Description>{description}</Styled.Description>}
      <Input {...{ ...props }} />
      {error && <Error>{error}</Error>}
    </Styled.Label>
  );
};

FormElement.displayName = "Molecule.FormElement";
export default FormElement;
