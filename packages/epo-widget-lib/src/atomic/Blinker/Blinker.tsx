import { FunctionComponent, useState } from "react";
import useInterval from "@/hooks/useInterval";
import * as Styled from "./styles";
import { Image } from "@rubin-epo/epo-react-lib/dist/types/image";
import { getClampedArrayIndex } from "@/lib/utils";

export interface BlinkerProps {
  images: Image[];
  activeIndex: number;
  autoplay?: boolean;
  loop?: boolean;
  interval?: number;
  blinkCallback: (activeIndex: number) => void;
}

const Blinker: FunctionComponent<BlinkerProps> = ({
  images = [],
  activeIndex = 0,
  autoplay = true,
  loop = true,
  interval = 200,
  blinkCallback,
}) => {
  const [playing, setPlaying] = useState(autoplay);
  const canBlink = images.length > 1;

  const getBlink = (direction = 0) => {
    const lastIndex = images.length - 1;

    return getClampedArrayIndex(activeIndex + direction, lastIndex);
  };

  const nextBlink = () => {
    if (canBlink) {
      const nextIndex = getBlink(1);

      if (loop === false && nextIndex === images.length - 1) {
        stopBlink();
      }

      blinkCallback && blinkCallback(nextIndex);
    }
  };

  const stopBlink = () => {
    setPlaying(false);
  };

  const handleStartStop = () => {
    setPlaying((value) => !value);
  };
  const handleNext = () => {
    stopBlink();
    nextBlink();
  };
  const handlePrevious = () => {
    stopBlink();
    blinkCallback && blinkCallback(getBlink(-1));
  };

  useInterval(nextBlink, canBlink && playing ? interval : null);

  return (
    <Styled.BlinkerContainer>
      <Styled.BlinkerImages {...{ images, activeIndex }} />
      {canBlink && (
        <Styled.BlinkerControls
          {...{ playing, handleStartStop, handleNext, handlePrevious }}
        />
      )}
    </Styled.BlinkerContainer>
  );
};

Blinker.displayName = "Atomic.Blinker";

export default Blinker;
