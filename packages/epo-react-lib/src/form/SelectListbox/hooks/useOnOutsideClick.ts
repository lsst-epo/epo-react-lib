import { useEffect, useRef } from "react";

const useOnOutsideClick = (clickOutsideCallback: () => void) => {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside({ target }: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(target as Node)) {
        clickOutsideCallback();
      }
    }
    // Bind the event listener
    document.addEventListener("click", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("click", handleClickOutside);
    };
  }, [wrapperRef]);

  return { wrapperRef };
};

export default useOnOutsideClick;
