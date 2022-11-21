import {
  Children,
  ReactNode,
  FunctionComponent,
  isValidElement,
  cloneElement,
} from "react";
import Carousel from "@/atomic/Carousel";
import { CarouselOptions } from "@/types/carousel";

interface CarouselLayoutProps {
  children: ReactNode;
  options?: CarouselOptions;
  className?: string;
}

const CarouselLayout: FunctionComponent<CarouselLayoutProps> = ({
  children,
  options = {},
  className,
}) => {
  if (!children) return null;

  return (
    <Carousel.Provider options={options}>
      <Carousel.Wrapper className={className}>
        <Carousel.Status />
        <Carousel.PrevButton />
        <Carousel.Carousel>
          {Children.map<ReactNode, any>(children, (child, index) =>
            isValidElement(child) ? (
              <Carousel.Slide key={index}>{cloneElement(child)}</Carousel.Slide>
            ) : null
          )}
        </Carousel.Carousel>
        <Carousel.NextButton />
        <Carousel.Pager />
      </Carousel.Wrapper>
    </Carousel.Provider>
  );
};

CarouselLayout.displayName = "Layout.Carousel";

export default CarouselLayout;
