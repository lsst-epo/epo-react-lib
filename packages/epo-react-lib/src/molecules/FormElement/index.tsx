import {
  DetailedHTMLProps,
  FunctionComponent,
  InputHTMLAttributes,
  useId,
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
  showRequiredAsterisk?: boolean;
  description?: string;
  error?: string;
}

const FormElement: FunctionComponent<FormElementProps> = ({
  label,
  showRequiredAsterisk = false,
  description,
  error,
  className,
  id,
  ...props
}) => {
  const elementId = useId();
  const inputId = id || `${elementId}-input`;
  const descriptionIds = Object.entries({ description, error }).reduce<
    Record<string, string>
  >((prev, [key, value]) => {
    if (value) {
      prev[key] = `${elementId}-${key}`;
    }

    return prev;
  }, {});
  const describedBy = Object.values(descriptionIds).join(" ");

  return (
    <Styled.Container {...{ className }}>
      <Styled.Label data-show-required={showRequiredAsterisk} htmlFor={inputId}>
        {label}
      </Styled.Label>
      {description && (
        <Styled.Description id={descriptionIds?.description}>
          {description}
        </Styled.Description>
      )}
      <Input {...{ ...props, id: inputId }} aria-describedby={describedBy} />
      {error && <Error id={descriptionIds?.error}>{error}</Error>}
    </Styled.Container>
  );
};

FormElement.displayName = "Molecule.FormElement";
export default FormElement;
