import { FunctionComponent, HTMLProps, MouseEventHandler } from "react";
import { IconKey } from "@rubin-epo/epo-react-lib";
interface PlaybackControlProps extends HTMLProps<HTMLButtonElement> {
    icon: IconKey;
    label: string;
    handleClick: MouseEventHandler<HTMLButtonElement>;
}
declare const PlaybackControl: FunctionComponent<PlaybackControlProps>;
export default PlaybackControl;
