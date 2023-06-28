import { FunctionComponent, useEffect, useState } from "react";
import { ImageShape } from "@rubin-epo/epo-react-lib";
import { tokens } from "@rubin-epo/epo-react-lib/styles";
import useInterval from "@/hooks/useInterval";
import useResizeObserver from "use-resize-observer";
import * as Styled from "./styles";
import { getClampedArrayIndex } from "@/lib/utils";

export interface BlinkerProps {
  images: ImageShape[];
  activeIndex?: number;
  autoplay?: boolean;
  loop?: boolean;
  interval?: number;
  blinkCallback?: (activeIndex: number) => void;
  loadedCallback?: () => void;
  className?: string;
}

const Blinker: FunctionComponent<BlinkerProps> = ({
  images = [],
  activeIndex: presetIndex = 0,
  autoplay = true,
  loop = true,
  interval = 200,
  blinkCallback,
  loadedCallback,
  className,
}) => {
  const { ref, width = 1 } = useResizeObserver<HTMLDivElement>();
  const [playing, setPlaying] = useState(autoplay);
  const [activeIndex, setActiveIndex] = useState(presetIndex);
  const [loaded, setLoaded] = useState(false);
  const { BREAK_MOBILE } = tokens;
  const canBlink = images.length > 1;
  const isCondensed = width < parseInt(BREAK_MOBILE);

  useEffect(() => {
    blinkCallback && blinkCallback(activeIndex);
  }, [activeIndex]);

  useEffect(() => {
    if (loaded) {
      loadedCallback && loadedCallback();
    }
  }, [loaded]);

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

      setActiveIndex(nextIndex);
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
    setActiveIndex(getBlink(-1));
  };

  useInterval(nextBlink, canBlink && loaded && playing ? interval : null);

  return (
    <Styled.BlinkerContainer className={className} ref={ref}>
      <Styled.BlinkerImages
        loadedCallback={() => setLoaded(true)}
        {...{ images, activeIndex, $isCondensed: isCondensed }}
      />
      {canBlink && (
        <Styled.BlinkerControls
          isDisabled={!loaded}
          {...{
            playing,
            handleStartStop,
            handleNext,
            handlePrevious,
            $isCondensed: isCondensed,
          }}
        />
      )}
    </Styled.BlinkerContainer>
  );
};

Blinker.displayName = "Atomic.Blinker";

export default Blinker;
