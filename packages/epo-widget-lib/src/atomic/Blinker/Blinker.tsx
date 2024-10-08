import {
  FunctionComponent,
  PropsWithChildren,
  ReactNode,
  useState,
  MouseEventHandler,
} from "react";
import { getClampedArrayIndex } from "@/lib/utils";
import useInterval from "@/hooks/useInterval";
import ImageStack from "../ImageStack";
import Controls from "./Controls/Controls";
import * as Styled from "./styles";

export interface BlinkerProps {
  images: {
    url: string;
    width?: number;
    height?: number;
  }[];
  activeIndex: number;
  autoplay?: boolean;
  loop?: boolean;
  interval?: number;
  blinkCallback?: (activeIndex: number) => void;
  onClickCallback?: MouseEventHandler<HTMLDivElement>;
  loadedCallback?: () => void;
  className?: string;
  showControls?: boolean;
  extraControls?: ReactNode;
}

const Blinker: FunctionComponent<PropsWithChildren<BlinkerProps>> = ({
  images = [],
  activeIndex = 0,
  autoplay = true,
  loop = true,
  interval = 200,
  blinkCallback,
  onClickCallback,
  loadedCallback,
  className,
  showControls = true,
  children,
  extraControls,
}) => {
  const [playing, setPlaying] = useState(autoplay);
  const [loaded, setLoaded] = useState(false);
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

  useInterval(nextBlink, canBlink && loaded && playing ? interval : null);

  return (
    <Styled.BlinkerContainer
      data-testid="blinker-container"
      onClick={(event) => onClickCallback && onClickCallback(event)}
      className={className}
    >
      <ImageStack
        loadCallback={() => {
          setLoaded(true);
          loadedCallback && loadedCallback();
        }}
        visible={activeIndex}
        {...{ images }}
      />
      {children}
      <Styled.ControlsContainer>
        {canBlink && showControls && (
          <>
            <Controls
              isDisabled={!loaded}
              {...{
                playing,
                handleStartStop,
                handleNext,
                handlePrevious,
              }}
            />
            {extraControls}
          </>
        )}
      </Styled.ControlsContainer>
    </Styled.BlinkerContainer>
  );
};

Blinker.displayName = "Atomic.Blinker";

export default Blinker;
