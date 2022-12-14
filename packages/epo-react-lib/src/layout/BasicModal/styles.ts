import styled from "styled-components";
import { fluidScale, zStack } from "@/styles/globalStyles";
import { Dialog as BaseDialog } from "@headlessui/react";
import BaseFormButtons from "@/form/FormButtons";
import { ReactNode } from "react";
import { protoButton } from "@/styles/mixins/appearance";

interface InnerProps {
  $darkMode: boolean;
}

interface DialogProps {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
}

export const Overlay = styled(BaseDialog.Overlay)`
  background-color: rgba(0, 0, 0, 0.7);
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
`;

export const Dialog = styled(BaseDialog)<DialogProps>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: ${zStack.dialog};
  overflow: auto;
  padding: 1rem;
  display: flex;
  align-items: start;
  justify-content: center;
`;

export const Title = BaseDialog.Title;

export const Description = styled(BaseDialog.Description)`
  font-size: 0.909em;
  line-height: 1.5;

  &:not(:first-child) {
    margin-block-start: 1.4em;
  }
`;

export const Inner = styled.div<InnerProps>`
  position: relative;
  display: flex;
  background: var(--white);
  max-width: 100vw;

  ${({ $darkMode }) =>
    $darkMode &&
    `
      color: #fff;
      background-color: #161818;
    `}
`;

export const Content = styled.div`
  flex: 1 1 auto;
  padding: ${fluidScale("60px", "15px")};
  padding-block-start: 60px;
  width: calc(100vw - 30px);
  max-width: 550px;
`;

export const CloseButton = styled.button`
  ${protoButton()}
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  right: ${fluidScale("10px", "15px")};
  top: ${fluidScale("10px", "15px")};
  width: 42px;
  height: 42px;
  border-radius: 100%;
  background: var(--neutral10);
`;

export const FormButtons = styled(BaseFormButtons)`
  margin-block-start: 44px;
`;
