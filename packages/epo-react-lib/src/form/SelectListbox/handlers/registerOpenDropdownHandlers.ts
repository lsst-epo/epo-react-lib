import { onChangeCallback, Option } from "@/types/select-listbox";

interface registerOpenDropdownHandlersArgs {
  options: Option[];
  activeIndex: number;
  setActiveIndex: (i: number) => void;
  select: (value: string | null) => void;
}

const registerOpenDropdownHandlers: (
  args: registerOpenDropdownHandlersArgs
) => any = ({ options, activeIndex, setActiveIndex, select }) => {
  const keyDownCallback = (e: KeyboardEvent) => {
    e.preventDefault();
    switch (e.key) {
      case "Up":
      case "ArrowUp":
        e.preventDefault();
        setActiveIndex(activeIndex <= 0 ? options.length - 1 : activeIndex - 1);
        return;
      case "Down":
      case "ArrowDown":
        e.preventDefault();
        setActiveIndex(
          activeIndex + 1 === options.length ? 0 : activeIndex + 1
        );
        return;
      case "Enter":
      case " ": // Space
        e.preventDefault();
        select(options[activeIndex].value);
        return;
      case "Esc":
      case "Escape":
        e.preventDefault();
        select(null);
        return;
      case "PageUp":
      case "Home":
        e.preventDefault();
        setActiveIndex(0);
        return;
      case "PageDown":
      case "End":
        e.preventDefault();
        setActiveIndex(options.length - 1);
        return;
    }
  };

  document.addEventListener("keydown", keyDownCallback);
  return () => {
    document.removeEventListener("keydown", keyDownCallback);
  };
};

export default registerOpenDropdownHandlers;
