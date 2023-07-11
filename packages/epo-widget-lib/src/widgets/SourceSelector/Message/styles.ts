import styled from "styled-components";
import Toast from "@rubin-epo/epo-react-lib/Toast";

export const Message = styled(Toast)<{ $isOpen: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1ch;
  width: 100%;
  height: ${({ $isOpen }) => ($isOpen ? 24 : 0)}px;
  overflow: hidden;
  background-color: var(--black, #000);
  color: #30e0e3;
  font-size: 1rem;
  font-weight: var(--FONT_WEIGHT_BOLD, 600);
  text-align: center;
  transition: height ease var(--DURATION_SLOW, 0.4s);

  @media (prefers-reduced-motion) {
    transition: unset;
  }
`;
