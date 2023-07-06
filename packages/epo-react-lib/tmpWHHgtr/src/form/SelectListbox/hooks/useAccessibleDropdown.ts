import { RefObject, useEffect, useRef, useState } from "react";
import { ListboxOption } from "@/types/select-listbox";
import { isSafari } from "../utilities";
import { registerOpenDropdownHandlers } from "../handlers";

type useAccessibleDropdownArgs<TMultiselect = boolean> =
  TMultiselect extends true
    ? {
        value: string[] | null;
        isMultiselect: true;
        onChangeCallback: (value: string[] | null) => void;
        options: ListboxOption[];
      }
    : {
        value: string | null;
        isMultiselect: false;
        onChangeCallback: (value: string | null) => void;
        options: ListboxOption[];
      };

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
    if (onChangeCallback) {
      if (isMultiselect === true && selectedValue) {
        const arrayValue = value ? [value].flat() : [];

        const newValue = arrayValue.includes(selectedValue.toString())
          ? arrayValue.filter((v) => v !== selectedValue)
          : [...arrayValue, selectedValue];
        onChangeCallback(newValue);
        // this must be else if so that TypeScript infers the type of onChangeCallback correctly
      } else if (isMultiselect === false) {
        onChangeCallback(selectedValue);
      }
    }
    setIsDropdownOpen(false);
  };

  const setIsDropdownOpen = (v: boolean) => {
    if (v) {
      const selected = options.findIndex(
        (o) => value && value.includes(o.value)
      );
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
