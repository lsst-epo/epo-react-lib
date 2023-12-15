import { FunctionComponent, PropsWithChildren, useRef } from "react";
import { Transition } from "@headlessui/react";
import { useOnClickOutside, useKeyDownEvent } from "@/hooks/listeners";
import * as Styled from "./styles";

type SlideFrom = "top" | "right" | "bottom" | "left";

export interface SlideoutProps {
  isOpen?: boolean;
  onCloseCallback?: () => void;
  onOpenCallback?: () => void;
  slideFrom?: SlideFrom;
  showBackground?: boolean;
}

const getX = (slideFrom: SlideFrom) => {
  switch (slideFrom) {
    case "left":
      return "-100%";
    case "right":
      return "100%";
    default:
      return "0";
  }
};

const getY = (slideFrom: SlideFrom) => {
  switch (slideFrom) {
    case "top":
      return "-100%";
    case "bottom":
      return "100%";
    default:
      return "0";
  }
};

const Slideout: FunctionComponent<PropsWithChildren<SlideoutProps>> = ({
  isOpen = false,
  onOpenCallback,
  onCloseCallback,
  slideFrom = "left",
  showBackground = true,
  children,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const translation = `translate(${getX(slideFrom)}, ${getY(slideFrom)})`;
  const styles = {
    [slideFrom]: 0,
    [slideFrom === "bottom" || slideFrom === "top" ? "width" : "height"]:
      "100%",
  };

  function handleKeyDown(event: KeyboardEvent) {
    if (isOpen) {
      const { key } = event;

      const keyMap: { [key: string]: () => void } = {
        Escape: () => onCloseCallback && onCloseCallback(),
      };

      const action = keyMap[key];
      if (action) {
        event.preventDefault();
        action();
      }
    }
  }

  useOnClickOutside(containerRef, () => onCloseCallback && onCloseCallback());
  useKeyDownEvent(handleKeyDown);

  return (
    <Transition
      as={Styled.Transition}
      show={isOpen}
      afterEnter={() => onOpenCallback && onOpenCallback()}
      afterLeave={() => onCloseCallback && onCloseCallback()}
      data-testid="slideout"
    >
      {showBackground && (
        <Transition.Child
          as={Styled.Overlay}
          role="none"
          enterFrom="closed"
          enter="opening"
          enterTo="open"
          leaveFrom="open"
          leave="closing"
          leaveTo="closed"
        />
      )}
      <Transition.Child
        ref={containerRef}
        as={Styled.SlideoutContainer}
        style={{ "--transform": translation, ...styles }}
        enterFrom="closed"
        enter="opening"
        enterTo="open"
        leaveFrom="open"
        leave="closing"
        leaveTo="closed"
        data-testid="slideoutContainer"
      >
        {children}
      </Transition.Child>
    </Transition>
  );
};

Slideout.displayName = "Atomic.Slideout";

export default Slideout;
