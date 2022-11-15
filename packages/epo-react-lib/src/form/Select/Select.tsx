import { forwardRef, HTMLProps } from "react";
import * as Styled from "./styles";

interface Option {
  value: string;
  label: string;
}

interface SelectProps extends HTMLProps<HTMLSelectElement> {
  options: Option[];
  emptyOption?: Option;
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ options, emptyOption, ...restProps }, ref) => (
    <Styled.Wrapper>
      <Styled.Select ref={ref} {...(restProps as any)}>
        {emptyOption && (
          <option value={emptyOption.value}>{emptyOption.label}</option>
        )}
        {options.map(({ value, label }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </Styled.Select>
      <Styled.Icon icon="selectCaret" />
    </Styled.Wrapper>
  )
);

Select.displayName = "Form.Select";

export default Select;
