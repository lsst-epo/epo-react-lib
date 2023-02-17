import { FunctionComponent } from "react";
import { useUID } from "react-uid";
import { useTranslation } from "react-i18next";
import { onChangeCallback, Option } from "@/types/select-listbox";
import IconComposer from "@/svg/IconComposer";
import * as Styled from "./styles";
import { useAccessibleDropdown, useOnOutsideClick } from "./hooks";

interface SelectListboxProps {
  value: string;
  options: Option[];
  onChangeCallback: onChangeCallback;
  isDisabled?: boolean;
  placeholder?: string;
  labelledById?: string;
  namespace?: string;
}

const SelectListbox: FunctionComponent<SelectListboxProps> = ({
  value,
  options,
  onChangeCallback,
  isDisabled,
  labelledById,
  placeholder: unsafePlaceholder,
  namespace,
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
  } = useAccessibleDropdown({ options, value, uid, onChangeCallback });
  const chosen = options.find((o) => o.value === value);
  const { t } = useTranslation();

  const clickOutsideCallback = () => {
    setIsDropdownOpen(false);
    setIsFocus(false);
  };

  const { wrapperRef } = useOnOutsideClick(() => clickOutsideCallback());

  const placeholder = unsafePlaceholder
    ? unsafePlaceholder
    : t("select_listbox.placeholder");

  return (
    <Styled.SelectContainer ref={wrapperRef}>
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
        {chosen ? chosen.label : placeholder}
        <IconComposer icon="caretThin" size={12} />
      </Styled.SelectButton>
      <Styled.SelectDropdown
        role="listbox"
        ref={listRef}
        id={`${uid}_dropdown`}
        tabIndex={-1}
        aria-multiselectable={false}
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
                  type="radio"
                  value={optionValue}
                  checked={chosen && chosen.value === optionValue}
                  onChange={() => select(optionValue)}
                />
                {chosen && chosen.value === optionValue ? (
                  <IconComposer icon="checkmark" size={11} />
                ) : icon ? (
                  icon
                ) : null}
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
