import { FunctionComponent, useLayoutEffect, useState } from "react";
import { useUID } from "react-uid";
import { useTranslation } from "react-i18next";
import { onChangeCallback, Option } from "@/types/select-listbox";
import IconComposer from "@/svg/IconComposer";
import * as Styled from "./styles";
import { useAccessibleDropdown, useOnOutsideClick } from "./hooks";

interface SelectListboxProps {
  value: string | string[] | null;
  options: Option[];
  onChangeCallback: onChangeCallback;
  isDisabled?: boolean;
  placeholder?: string;
  labelledById?: string;
  namespace?: string;
  isMultiselect?: boolean;
  maxWidth?: string;
  width?: string;
}

const SelectListbox: FunctionComponent<SelectListboxProps> = ({
  value = null,
  options,
  onChangeCallback,
  isDisabled,
  labelledById,
  placeholder: unsafePlaceholder,
  namespace,
  isMultiselect = false,
  maxWidth = "200px",
  width,
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
  });
  const [selectWidth, setSelectWidth] = useState(0);
  const { t } = useTranslation();

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

  const placeholder = unsafePlaceholder
    ? unsafePlaceholder
    : t("select_listbox.placeholder");

  const selectionLabel = Array.isArray(value)
    ? value.map((v) => getOptionFromValue(v)?.label).join(", ")
    : getOptionFromValue(value)?.label;

  return (
    <Styled.SelectContainer
      ref={wrapperRef}
      {...{ width, maxWidth, minWidth: selectWidth }}
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
      >
        <Styled.ButtonText>{selectionLabel || placeholder}</Styled.ButtonText>
        <IconComposer icon="caretThin" size={12} />
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
