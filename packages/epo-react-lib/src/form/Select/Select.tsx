import { forwardRef, HTMLProps } from "react";
import { Option } from "@/types/select";
import * as Styled from "./styles";
interface SelectProps extends HTMLProps<HTMLSelectElement> {
  options: Option[];
  emptyOption?: Option;
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ options = [], emptyOption, ...restProps }, ref) => {
    const groupedOptions = options.reduce(
      (acc: { [key: string]: Option[] }, option) => {
        const { optionGroup } = option;

        if (optionGroup) {
          const { [optionGroup]: accOptionGroup = [] } = acc;

          return {
            ...acc,
            [optionGroup]: [...accOptionGroup, option],
          };
        }

        return acc;
      },
      {}
    );

    return (
      <Styled.Wrapper>
        <Styled.Select ref={ref} {...(restProps as any)}>
          {emptyOption && (
            <option value={emptyOption.value}>{emptyOption.label}</option>
          )}
          {Object.keys(groupedOptions).length > 0
            ? Object.keys(groupedOptions).map((optionGroupName) => (
                <optgroup key={optionGroupName} label={optionGroupName}>
                  {groupedOptions[optionGroupName].map(({ value, label }) => (
                    <option key={value} value={value}>
                      {label}
                    </option>
                  ))}
                </optgroup>
              ))
            : options.map(({ value, label }) => (
                <option key={value} value={value}>
                  {label}
                </option>
              ))}
        </Styled.Select>
        <Styled.Icon icon="selectCaret" />
      </Styled.Wrapper>
    );
  }
);

Select.displayName = "Form.Select";

export default Select;
