import {ReactNode} from 'react';
import * as Styled from "./styles";

type SlideFrom = "top" | "right" | "bottom" | "left";
interface SlideoutInfoCardProps {
  isOpen?: boolean;
  slideFrom?: SlideFrom;
  className?: string;
  children: ReactNode,
};

function SlideoutInfoCard({
  isOpen = false, 
  slideFrom = "left", 
  children
} : SlideoutInfoCardProps) {

  return (
    <Styled.SlideoutInfoCard isOpen={isOpen} slideFrom={slideFrom}>
      {children}
    </Styled.SlideoutInfoCard>
  );
}

export default SlideoutInfoCard;