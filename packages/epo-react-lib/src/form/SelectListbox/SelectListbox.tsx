import { FunctionComponent, useLayoutEffect, useState } from "react";
import { useUID } from "react-uid";
import { ListboxOption } from "@/types/select-listbox";
import IconComposer from "@/svg/IconComposer";
import * as Styled from "./styles";
import { useAccessibleDropdown, useOnOutsideClick } from "./hooks";

type SelectListboxProps<TMultiselect = boolean> = TMultiselect extends true
  ? {
      value: string[] | null;
      isMultiselect?: true;
      onChangeCallback: (value: string[] | null) => void;
      options: ListboxOption[];
      isDisabled?: boolean;
      placeholder?: string;
      labelledById?: string;
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
      namespace?: string;
      maxWidth?: string;
      width?: string;
      className?: string;
      id?: string;
    };

const SelectListbox: FunctionComponent<SelectListboxProps> = ({
  value = null,
  options,
  onChangeCallback,
  isDisabled,
  labelledById,
  placeholder = "Select",
  namespace,
  isMultiselect = false,
  maxWidth = "200px",
  width,
  className,
  id,
}) => {
  const uid = namespace || useUID();
  const {
    isDropdownOpen,
    setIsDropdownOpen,
    activeIndex,
    setActiveIndex,
    select,
    setIsFocus,
    listRef,
    buttonRef,
  } = useAccessibleDropdown({
    options,
    value,
    onChangeCallback,
    isMultiselect,
  } as any);
  const [selectWidth, setSelectWidth] = useState(0);

  useLayoutEffect(() => {
    if (listRef.current) {
      setSelectWidth(listRef.current.clientWidth);
    }
  }, []);

  const clickOutsideCallback = () => {
    setIsDropdownOpen(false);
    setIsFocus(false);
  };

  const { wrapperRef } = useOnOutsideClick(() => clickOutsideCallback());

  const isChosen = (optionValue: string): boolean =>
    value ? value.includes(optionValue) : false;

  const getOptionFromValue = (value: string | null) =>
    options.find((o) => o.value === value);

  const selectionLabel = Array.isArray(value)
    ? value.map((v) => getOptionFromValue(v)?.label).join(", ")
    : getOptionFromValue(value)?.label;

  return (
    <Styled.SelectContainer
      style={{
        "--min-width": `${selectWidth}px`,
        "--max-width": maxWidth,
        "--width": width,
      }}
      ref={wrapperRef}
      className={className}
    >
      <Styled.SelectButton
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        ref={buttonRef}
        role="combobox"
        aria-haspopup="listbox"
        aria-controls={`${uid}_dropdown`}
        aria-labelledby={labelledById}
        aria-expanded={isDropdownOpen}
        aria-activedescendant={`${uid}_element_${value}`}
        disabled={isDisabled}
        id={id}
      >
        <Styled.ButtonText>{selectionLabel || placeholder}</Styled.ButtonText>
        <IconComposer icon="chevronThin" size={12} />
      </Styled.SelectButton>
      <Styled.SelectDropdown
        role="listbox"
        ref={listRef}
        id={`${uid}_dropdown`}
        tabIndex={-1}
        aria-multiselectable={isMultiselect}
      >
        {options.map(({ label, value: optionValue, icon }, index) => (
          <Styled.DropdownOption
            onMouseOver={() => setActiveIndex(index)}
            id={`${uid}_element_${optionValue}`}
            aria-selected={index === activeIndex}
            role="option"
            key={optionValue}
          >
            <label>
              <>
                <input
                  type={isMultiselect ? "checkbox" : "radio"}
                  value={optionValue}
                  checked={isChosen(optionValue)}
                  onChange={() => select(optionValue)}
                />
                {isChosen(optionValue) ? (
                  <IconComposer icon="checkmark" size={12} />
                ) : (
                  icon
                )}
                <Styled.DropdownText>{label}</Styled.DropdownText>
              </>
            </label>
          </Styled.DropdownOption>
        ))}
      </Styled.SelectDropdown>
    </Styled.SelectContainer>
  );
};

SelectListbox.displayName = "Form.SelectListbox";

export default SelectListbox;
