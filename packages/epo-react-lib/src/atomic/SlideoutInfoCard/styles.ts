import styled from "styled-components";

const directions = {
  right: 'translateX(100%)',
  left: 'translateX(-100%)',
  top: 'translateY(-100%)',
  bottom: 'translateY(100%)',
}

type Direction = keyof typeof directions;

export const SlideoutInfoCard = styled.div<{isOpen?: boolean; slideFrom?: Direction;}>`
  position: absolute;

  transition: transform 0.5s ease-in-out;
  transform: ${(
    {isOpen, slideFrom}) => 
      isOpen ? 'translate(0, 0)' : 
      slideFrom ? directions[slideFrom] : directions["left"]};
  
  opacity: ${props => (props.isOpen ? 1 : 0)};
  z-index: ${props => (props.isOpen ? 100 : -1)};
`;