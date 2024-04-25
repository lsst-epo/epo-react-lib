import { FunctionComponent, HTMLProps, MouseEventHandler } from "react";
interface PlaybackControlProps extends HTMLProps<HTMLButtonElement> {
    icon: string;
    label: string;
    handleClick: MouseEventHandler<HTMLButtonElement>;
}
declare const PlaybackControl: FunctionComponent<PlaybackControlProps>;
export default PlaybackControl;
