import {FunctionComponent, ReactNode} from 'react';
import * as Styled from "./styles";

type SlideFrom = "top" | "right" | "bottom" | "left";

interface SlideoutInfoCardProps {
  isOpen?: boolean;
  slideFrom?: SlideFrom;
  className?: string;
  children: ReactNode,
};

const SlideoutInfoCard: FunctionComponent<SlideoutInfoCardProps> = ({
  isOpen = false, 
  slideFrom = "left", 
  children,
}) => {

  return (
    <Styled.SlideoutInfoCard isOpen={isOpen} slideFrom={slideFrom}>
      {children}
    </Styled.SlideoutInfoCard>
  );
}

export default SlideoutInfoCard;