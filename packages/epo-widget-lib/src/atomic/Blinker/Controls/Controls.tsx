import { FunctionComponent, MouseEventHandler } from "react";
import { useTranslation } from "react-i18next";
import PlaybackControl from "@/atomic/PlaybackControl";
import * as Styled from "./styles";

interface ControlsProps {
  playing: boolean;
  handleStartStop: MouseEventHandler<HTMLButtonElement>;
  handleNext: MouseEventHandler<HTMLButtonElement>;
  handlePrevious: MouseEventHandler<HTMLButtonElement>;
  className?: string;
  isDisabled?: boolean;
}

const Controls: FunctionComponent<ControlsProps> = ({
  playing,
  handleStartStop,
  handleNext,
  handlePrevious,
  className,
  isDisabled,
}) => {
  const { t } = useTranslation();

  return (
    <Styled.ControlsContainer
      data-testid="blinker-controls"
      className={className}
    >
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
    </Styled.ControlsContainer>
  );
};

Controls.displayName = "Atomic.Blinker.Controls";

export default Controls;
