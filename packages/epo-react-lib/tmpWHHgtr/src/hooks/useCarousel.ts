import { CarouselConfig, CarouselOptions } from "@/types/carousel";
import { useState, useEffect, useRef, useCallback } from "react";
import { useUID } from "react-uid";

const DEFAULT_OPTIONS: Required<CarouselOptions> = {
  selectedAttraction: 0.075,
  friction: 0.48,
  pageDots: false,
  prevNextButtons: false,
  lazyLoad: true,
  adaptiveHeight: false,
  initialIndex: 0,
  ariaLabel: "Slideshow",
  wrapAround: true,
  percentPosition: false,
};

/**
 * useCarousel
 *
 * Use Flickity (https://flickity.metafizzy.co/) as a hook,
 * with additional accessibility features based on the WAI-ARIA carousel pattern
 * (https://www.w3.org/TR/wai-aria-practices-1.1/examples/carousel/carousel-1.html)
 */
export default function useCarousel(options: CarouselOptions): CarouselConfig {
  const flickity = useRef<Flickity>();
  const [carouselRef, setCarouselRef] = useState<HTMLDivElement>();

  /**
   * with the ref being required to initialize flickity, the ref
   * setter needs to be memoized and the ref set by useState
   * so that useEffect can accurately see when it has been set
   * or not.
   */
  const carouselRefWrapper = useCallback((node: HTMLDivElement) => {
    if (node !== null) {
      setCarouselRef(node);
    }
  }, []);

  const uid = useUID();

  const mergedOptions: Required<CarouselOptions> = Object.assign(
    {},
    DEFAULT_OPTIONS,
    options
  );

  const [active, setActiveIndex] = useState(mergedOptions.initialIndex);
  const [length, setLength] = useState(0);

  // async load flickity, attach to ref, and bind active state change to internal flickity `change` event
  useEffect(() => {
    async function loadFlickity() {
      if (carouselRef) {
        const Flickity = (await import("flickity")).default;
        flickity.current = new Flickity(carouselRef, mergedOptions);

        const length =
          flickity.current && flickity.current.cells
            ? flickity.current.cells.length
            : 0;
        setLength(length);
        flickity.current.on("change", (index) =>
          setActiveIndex(index as unknown as number)
        );
      }
    }

    loadFlickity();

    // destroy flickity instance in clean-up
    return () => {
      if (!flickity.current) return;
      flickity.current.destroy();
    };
  }, [carouselRef, JSON.stringify(mergedOptions)]);

  // call flickity's `select` event when active state changes
  // required for using custom button and pager components
  useEffect(() => {
    if (!flickity.current) return;
    flickity.current.select(active);
  }, [active]);

  const setActive = useCallback((index: number) => setActiveIndex(index), []);

  const carouselProps = {
    ref: carouselRefWrapper,
    id: uid,
    "aria-roledescription": "carousel",
    "aria-label": mergedOptions.ariaLabel,
  };

  const slideProps = {
    role: "group",
    "aria-roledescription": "slide",
  };

  const prevButtonProps = {
    "aria-controls": uid,
    "aria-disabled": !mergedOptions.wrapAround && active === 0,
    get onClick() {
      if (this["aria-disabled"]) return;
      return () =>
        setActiveIndex((prevActive) =>
          prevActive === 0 ? length - 1 : prevActive - 1
        );
    },
  };

  const nextButtonProps = {
    "aria-controls": uid,
    "aria-disabled": !mergedOptions.wrapAround && active === length - 1,
    get onClick() {
      if (this["aria-disabled"]) return;
      return () =>
        setActiveIndex((prevActive) =>
          prevActive === length - 1 ? 0 : prevActive + 1
        );
    },
  };

  const pageDotProps = {
    "aria-controls": uid,
  };

  return {
    active,
    setActive,
    length,
    carouselProps,
    slideProps,
    prevButtonProps,
    nextButtonProps,
    pageDotProps,
  };
}
