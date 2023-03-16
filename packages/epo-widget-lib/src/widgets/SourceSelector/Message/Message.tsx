import { FunctionComponent, ReactNode, useEffect } from "react";
import * as Styled from "./styles";

interface MessageProps {
  children?: ReactNode;
  isVisible?: boolean;
  onMessageChangeCallback: () => void;
  /** list of ID's that contributed to this status message eg. if clicking on \<svg id="mySvg"/> created a message, pass ['mySvg'] */
  forIds?: string[];
}

const Message: FunctionComponent<MessageProps> = ({
  children,
  isVisible = false,
  onMessageChangeCallback,
  forIds,
}) => {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onMessageChangeCallback && onMessageChangeCallback();
      }, 1800);
      return () => clearTimeout(timer);
    }
  }, [children, isVisible]);

  return (
    <Styled.Message {...{ forIds }} isOpen={isVisible}>
      {children}
    </Styled.Message>
  );
};

Message.displayName = "Widgets.SourceSelector.Message";

export default Message;
