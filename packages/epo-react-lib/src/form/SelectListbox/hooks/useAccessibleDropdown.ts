import { RefObject, useEffect, useRef, useState } from "react";
import { onChangeCallback, Option } from "@/types/select-listbox";
import { isSafari } from "../utilities";
import { registerOpenDropdownHandlers } from "../handlers";

interface useAccessibleDropdownArgs {
  options: Option[];
  value: string | string[];
  onChangeCallback: onChangeCallback;
  isMultiselect: boolean;
}

interface useAccessibleDropdownResult {
  isDropdownOpen: boolean;
  setIsDropdownOpen: (v: boolean) => void;
  activeIndex: number;
  setActiveIndex: (v: number) => void;
  select: (value: string) => void;
  setIsFocus: (v: boolean) => void;
  listRef: RefObject<HTMLUListElement>;
  buttonRef: RefObject<HTMLButtonElement>;
}

const useAccessibleDropdown: (
  props: useAccessibleDropdownArgs
) => useAccessibleDropdownResult = ({
  options,
  value,
  onChangeCallback,
  isMultiselect,
}) => {
  const [isDropdownOpen, setIsDropdownOpenInternal] = useState(false);
  const listRef = useRef<HTMLUListElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isFocus, setIsFocus] = useState(false);

  const select = (selectedValue: string | null) => {
    if (selectedValue && onChangeCallback) {
      if (isMultiselect) {
        const arrayValue = Array.isArray(value) ? value : [value];

        const newValue = arrayValue.includes(selectedValue)
          ? arrayValue.filter((v) => v !== selectedValue)
          : [...arrayValue, selectedValue];
        onChangeCallback(newValue);
      } else {
        onChangeCallback(selectedValue);
      }
    }
    setIsDropdownOpen(false);
  };

  const setIsDropdownOpen = (v: boolean) => {
    if (v) {
      const selected = options.findIndex((o) => value.includes(o.value));
      setActiveIndex(selected < 0 ? 0 : selected);
      if (listRef.current && isSafari()) {
        requestAnimationFrame(() => {
          listRef.current && listRef.current.focus();
        });
      }
    } else {
      if (listRef.current && isSafari()) {
        requestAnimationFrame(() => {
          buttonRef.current?.focus();
        });
      }
    }
    setIsDropdownOpenInternal(v);
  };

  useEffect(() => {
    if (isDropdownOpen && isFocus) {
      return registerOpenDropdownHandlers({
        activeIndex,
        setActiveIndex,
        options,
        select,
      });
    }
  }, [isDropdownOpen, activeIndex, isFocus]);

  return {
    isDropdownOpen,
    setIsDropdownOpen,
    activeIndex,
    setActiveIndex,
    select,
    setIsFocus,
    listRef,
    buttonRef,
  };
};

export default useAccessibleDropdown;
