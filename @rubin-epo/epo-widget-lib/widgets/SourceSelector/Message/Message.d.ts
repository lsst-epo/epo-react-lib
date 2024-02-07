import { FunctionComponent, ReactNode } from "react";
export interface MessageProps {
    children?: ReactNode;
    isVisible?: boolean;
    onMessageChangeCallback: () => void;
    /** list of ID's that contributed to this status message eg. if clicking on \<svg id="mySvg"/> created a message, pass ['mySvg'] */
    forIds?: string[];
}
declare const Message: FunctionComponent<MessageProps>;
export default Message;
