import {FunctionComponent, ReactNode} from 'react';
import * as Styled from "./styles";

export type SlideFrom = "top" | "right" | "bottom" | "left";

export interface SlideoutInfoCardProps {
  isOpen?: boolean;
  slideFrom?: SlideFrom;
  className?: string;
  children: ReactNode,
};

const SlideoutInfoCard: FunctionComponent<SlideoutInfoCardProps> = ({
  isOpen = false, 
  slideFrom = "left", 
  children,
  className,
}) => {

  return (
    <Styled.SlideoutInfoCard isOpen={isOpen} slideFrom={slideFrom} className={className}>
      {children}
    </Styled.SlideoutInfoCard>
  );
}

export default SlideoutInfoCard;