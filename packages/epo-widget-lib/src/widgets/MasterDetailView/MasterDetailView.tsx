import {
  NavigationRail,
  NavigationRailContainer,
  NavigationRailHeader,
  NavigationRailProvider,
} from "@/layout/NavigationRail";
import { useState } from "react";
import * as Styled from "./styles";

interface Props {
  slides: {
    imageSrc: string;
    alt?: string;
    label: string;
    header?: string;
  }[];
  navLabel?: string;
}

export default function MasterDetailView({ slides, navLabel }: Props) {
  const [activeSlide, setActiveSlide] = useState(slides[0]);

  const navItems = slides.map((slide) => ({
    id: slide.imageSrc,
    label: slide.label,
    header: slide.header,
  }));

  const handleSetSlide = (id: string) => {
    const newSlide = slides.find((slide) => slide.imageSrc === id);
    setActiveSlide(newSlide || slides[0]);
  };

  return (
    <NavigationRailProvider items={navItems} onSelect={handleSetSlide}>
      <NavigationRailHeader />
      <NavigationRailContainer>
        <NavigationRail label={navLabel} />
        <div>
          <Styled.Image
            src={activeSlide.imageSrc}
            alt={activeSlide.alt || ""}
          />
        </div>
      </NavigationRailContainer>
    </NavigationRailProvider>
  );
}
