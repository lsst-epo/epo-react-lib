import { CarouselConfig } from "@/types/carousel";
import { createContext, useContext } from "react";

const CarouselContext = createContext(null as unknown as CarouselConfig);

export default CarouselContext;

export function useCarouselContext() {
  const context = useContext(CarouselContext);
  if (!context) {
    throw new Error(
      `Carousel components cannot be rendered outside the Carousel.Provider component.`
    );
  }
  return context;
}
