import { createFocusTrap } from "focus-trap";
import { useEffect } from "react";

interface Options {
  escapeDeactivates?: boolean;
  clickOutsideDeactivates?: boolean;
}

export function useFocusTrap(
  elementRef: React.MutableRefObject<HTMLDivElement | null>,
  showing: boolean,
  options: Options = {}
) {
  useEffect(() => {
    let trap: ReturnType<typeof createFocusTrap>;

    function focusElement() {
      if (!elementRef.current) {
        console.error("No element found to found");
        return;
      }

      trap = createFocusTrap(elementRef.current, {
        escapeDeactivates: false,
        clickOutsideDeactivates: true,
        fallbackFocus: '[tabindex="-1"]',
        ...options,
      });

      trap.activate();
    }

    function focusTrigger() {
      if (!trap) {
        return;
      }

      trap.deactivate();
    }

    if (showing) {
      focusElement();
      return () => {
        focusTrigger();
      };
    }
  }, [showing]);
}
