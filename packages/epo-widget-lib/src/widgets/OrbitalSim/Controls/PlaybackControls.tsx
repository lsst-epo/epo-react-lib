import { FC, MouseEventHandler } from "react";
import PlaybackControl from "@/atomic/PlaybackControl";
import { useTranslation } from "react-i18next";
import * as Styled from "./styles";

export interface PlaybackControlsProps {
  playing: boolean;
  handleStartStop: MouseEventHandler<HTMLButtonElement>;
  handleNext: MouseEventHandler<HTMLButtonElement>;
  handlePrevious: MouseEventHandler<HTMLButtonElement>;
  handleReset: MouseEventHandler<HTMLButtonElement>;
  className?: string;
  isDisabled?: boolean;
}

const PlaybackControls: FC<PlaybackControlsProps> = ({
        playing,
        handleStartStop,
        handleNext,
        handlePrevious,
        handleReset,
        isDisabled,
}) => {
    const { t } = useTranslation();

    return (
        <Styled.PlaybackControlsContainer>
            <PlaybackControl
                data-testid="blinker-backward"
                icon="Backward"
                label={t("blinker.controls.backward")}
                handleClick={handlePrevious}
                disabled={isDisabled}
            />
            <PlaybackControl
                data-testid="blinker-start-stop"
                icon={playing ? "Pause" : "Play"}
                label={
                playing ? t("blinker.controls.pause") : t("blinker.controls.play")
                }
                handleClick={handleStartStop}
                disabled={isDisabled}
            />
            <PlaybackControl
                data-testid="blinker-forward"
                icon="Forward"
                label={t("blinker.controls.forward")}
                handleClick={handleNext}
                disabled={isDisabled}
            />
            <PlaybackControl
                data-testid="blinker-forward"
                icon="RotateLeft"
                label={t("blinker.controls.reset")}
                handleClick={handleReset}
                disabled={isDisabled}
            />
        </Styled.PlaybackControlsContainer>
    )

}

export default PlaybackControls;