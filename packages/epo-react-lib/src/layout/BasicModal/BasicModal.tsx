import IconComposer from "@/svg/IconComposer";
import * as Styled from "./styles";
import { FunctionComponent, MouseEvent, ReactNode } from "react";

interface BasicModalProps {
  children: ReactNode;
  open?: boolean;
  onClose: (event?: MouseEvent) => void;
  darkMode?: boolean;
  title?: string;
  description?: string;
}

const BasicModal: FunctionComponent<BasicModalProps> = ({
  children,
  open = false,
  onClose,
  darkMode = false,
  title,
  description,
}) => {
  return (
    <Styled.Dialog open={open} onClose={() => onClose()}>
      <Styled.Overlay aria-hidden={true} />
      <Styled.Inner $darkMode={darkMode}>
        <Styled.CloseButton type="button" aria-label="Close" onClick={onClose}>
          <IconComposer icon="close" />
        </Styled.CloseButton>
        <Styled.Content aria-live="polite">
          {title && <Styled.Title>{title}</Styled.Title>}
          {description && (
            <Styled.Description>{description}</Styled.Description>
          )}
          {children}
        </Styled.Content>
      </Styled.Inner>
    </Styled.Dialog>
  );
};

BasicModal.displayName = "Layout.Modal";

export default BasicModal;
