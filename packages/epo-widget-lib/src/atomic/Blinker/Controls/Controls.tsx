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
}

const Controls: FunctionComponent<ControlsProps> = ({
  playing,
  handleStartStop,
  handleNext,
  handlePrevious,
  className,
}) => {
  const { t } = useTranslation();

  return (
    <Styled.ControlsContainer
      data-testid="blinker-controls"
      className={className}
    >
      <PlaybackControl
        data-testid="blinker-rewind"
        icon="Rewind"
        label={t("blinker.controls.rewind")}
        handleClick={handlePrevious}
      />
      <PlaybackControl
        data-testid="blinker-start-stop"
        icon={playing ? "Pause" : "Play"}
        label={
          playing ? t("blinker.controls.pause") : t("blinker.controls.play")
        }
        handleClick={handleStartStop}
      />
      <PlaybackControl
        data-testid="blinker-forward"
        icon="Forward"
        label={t("blinker.controls.forward")}
        handleClick={handleNext}
      />
    </Styled.ControlsContainer>
  );
};

Controls.displayName = "Atomic.Blinker.Controls";

export default Controls;
