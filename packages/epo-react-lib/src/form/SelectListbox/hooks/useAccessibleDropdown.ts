import { RefObject, useEffect, useRef, useState } from "react";
import { onChangeCallback, Option } from "@/types/select-listbox";
import { isSafari } from "../utilities";
import { registerOpenDropdownHandlers } from "../handlers";

interface useAccessibleDropdownArgs {
  options: Option[];
  value: string;
  onChangeCallback: onChangeCallback;
  uid: string;
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
  uid,
}) => {
  const [isDropdownOpen, setIsDropdownOpenInternal] = useState(false);
  const listRef = useRef<HTMLUListElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isFocus, setIsFocus] = useState(false);

  const select = (value: string | null) => {
    if (value) {
      onChangeCallback && onChangeCallback(value);
    }
    setIsDropdownOpen(false);
  };

  const setIsDropdownOpen = (v: boolean) => {
    if (v) {
      const selected = options.findIndex((o) => o.value === value);
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
