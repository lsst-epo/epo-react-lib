import { FunctionComponent, PropsWithChildren } from "react";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import * as Styled from "./styles";

type SlideFrom = "top" | "right" | "bottom" | "left";

export interface SlideoutProps {
  isOpen?: boolean;
  onCloseCallback?: () => void;
  onOpenCallback?: () => void;
  slideFrom?: SlideFrom;
  showBackground?: boolean;
  className?: string;
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
  className,
  children,
}) => {
  const translation = `translate(${getX(slideFrom)}, ${getY(slideFrom)})`;
  const styles = {
    [slideFrom]: 0,
    [slideFrom === "bottom" || slideFrom === "top" ? "width" : "height"]:
      "100%",
  };

  return (
    <Dialog
      as={Styled.Wrapper}
      open={isOpen}
      onClose={() => onCloseCallback && onCloseCallback()}
      className={className}
      data-testid="slideout"
    >
      {showBackground && (
        <DialogBackdrop
          onTransitionEnd={() => isOpen && onOpenCallback && onOpenCallback()}
          transition
          as={Styled.Overlay}
          data-testid="slideoutBackdrop"
        />
      )}
      <DialogPanel
        as={Styled.Slideout}
        style={{ "--transform": translation, ...styles }}
        data-testid="slideoutContainer"
        transition
      >
        {children}
      </DialogPanel>
    </Dialog>
  );
};

Slideout.displayName = "Atomic.Slideout";

export default Slideout;
