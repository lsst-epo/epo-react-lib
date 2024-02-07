import { FunctionComponent, MouseEventHandler } from "react";
export interface ControlsProps {
    playing: boolean;
    handleStartStop: MouseEventHandler<HTMLButtonElement>;
    handleNext: MouseEventHandler<HTMLButtonElement>;
    handlePrevious: MouseEventHandler<HTMLButtonElement>;
    className?: string;
    isDisabled?: boolean;
}
declare const Controls: FunctionComponent<ControlsProps>;
export default Controls;
