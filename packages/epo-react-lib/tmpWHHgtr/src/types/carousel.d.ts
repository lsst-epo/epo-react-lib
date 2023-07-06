interface CarouselOptions {
  selectedAttraction?: number;
  friction?: number;
  pageDots?: boolean;
  prevNextButtons?: boolean;
  lazyLoad?: boolean;
  adaptiveHeight?: boolean;
  initialIndex?: number;
  ariaLabel?: string;
  wrapAround?: boolean;
  percentPosition?: boolean;
}

interface CarouselProps {
  ref: MutableRefObject;
  id: string;
  "aria-roledescription": string;
  "aria-label": string;
}

interface SlideProps {
  role: string;
  "aria-roledescription": string;
}

interface CarouselButtonProps {
  "aria-controls": string;
  "aria-disabled": boolean;
  readonly onClick: (() => void) | void;
}

interface PageDotProps {
  "aria-controls": string;
}

interface CarouselConfig {
  active: number;
  setActive: (index: number) => void;
  length: number;
  carouselProps: CarouselProps;
  slideProps: SlideProps;
  prevButtonProps: CarouselButtonProps;
  nextButtonProps: CarouselButtonProps;
  pageDotProps: PageDotProps;
}

export type { CarouselOptions, CarouselConfig };
