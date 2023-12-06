import { FunctionComponent } from "react";
import { ListboxOption } from "@/types/select-listbox";
import IconComposer from "@/svg/IconComposer";
import * as Styled from "./styles";
import { Listbox } from "@headlessui/react";

export type { ListboxOption };

type SelectListboxProps<TMultiselect = boolean> = TMultiselect extends true
  ? {
      value: string[] | null;
      isMultiselect?: true;
      onChangeCallback: (value: string[] | null) => void;
      options: ListboxOption[];
      isDisabled?: boolean;
      placeholder?: string;
      labelledById?: string;
      /**
       * @deprecated No longer used
       */
      namespace?: string;
      maxWidth?: string;
      width?: string;
      className?: string;
      id?: string;
    }
  : {
      value: string | null;
      isMultiselect?: false;
      onChangeCallback: (value: string | null) => void;
      options: ListboxOption[];
      isDisabled?: boolean;
      placeholder?: string;
      labelledById?: string;
      /**
       * @deprecated No longer used
       */
      namespace?: string;
      maxWidth?: string;
      width?: string;
      className?: string;
      id?: string;
    };

const SelectListbox: FunctionComponent<SelectListboxProps> = ({
  value,
  options,
  onChangeCallback,
  isDisabled: disabled,
  labelledById,
  placeholder = "Select",
  isMultiselect: multiple = false,
  maxWidth = "200px",
  width,
  className,
  id,
}) => {
  const getOptionFromValue = (value: string | null) =>
    options.find((o) => o.value === value);

  const getLabel = (value: string | string[] | null) =>
    Array.isArray(value)
      ? value.map((v) => getOptionFromValue(v)?.label).join(", ")
      : getOptionFromValue(value)?.label;

  return (
    <Listbox
      as={Styled.Select}
      style={{
        "--max-width": maxWidth,
        "--width": width,
      }}
      onChange={onChangeCallback}
      aria-labelledby={labelledById}
      {...{ value, disabled, multiple, className, id }}
    >
      <Styled.SelectButton>
        {({ value }) => (
          <>
            <Styled.ButtonText>
              {getLabel(value) || placeholder}
            </Styled.ButtonText>
            <IconComposer icon="chevronThin" size={12} />
          </>
        )}
      </Styled.SelectButton>
      <Styled.Options>
        {options.map(({ label, value, icon }) => (
          <Styled.Option key={value} value={value}>
            {({ selected }) => (
              <>
                {selected ? <IconComposer icon="checkmark" size={12} /> : icon}
                <Styled.DropdownText>{label}</Styled.DropdownText>
              </>
            )}
          </Styled.Option>
        ))}
      </Styled.Options>
    </Listbox>
  );
};

SelectListbox.displayName = "Form.SelectListbox";

export default SelectListbox;
