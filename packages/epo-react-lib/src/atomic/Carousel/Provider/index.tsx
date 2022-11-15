import { FunctionComponent, ReactNode } from "react";
import { CarouselConfig, CarouselOptions } from "@/types/carousel";
import useCarousel from "@/hooks/useCarousel";
import CarouselContext from "../context";

interface CarouselProviderProps {
  options: CarouselOptions;
  children: ReactNode;
}

const Provider: FunctionComponent<CarouselProviderProps> = ({
  options,
  children,
}) => {
  const value: CarouselConfig = useCarousel(options);

  return (
    <CarouselContext.Provider value={value}>
      {children}
    </CarouselContext.Provider>
  );
};

Provider.displayName = "Carousel.Provider";

export default Provider;
