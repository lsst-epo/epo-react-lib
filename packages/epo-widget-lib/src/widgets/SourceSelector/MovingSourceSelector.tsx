import {
  FunctionComponent,
  MouseEventHandler,
  ReactNode,
  useState,
} from "react";
import { Alert, MovingSources } from "@/types/astro";
import { useTranslation } from "react-i18next";
import AspectRatio from "@/layout/AspectRatio";
import Message from "./Message";
import Loader from "@/atomic/Loader";
import ElapsedTime from "@/atomic/ElapsedTime";
import { Point } from "@/types/charts";
import IconComposer from "@rubin-epo/epo-react-lib/IconComposer";
import MovingSourceMap from "./MovingSourceMap";
import { getRadius, toDecimalPercent } from "./utils";
import * as Styled from "./styles";
import useInterval from "@/hooks/useInterval";

interface BlinkConfig {
  autoplay?: boolean;
  loop?: boolean;
  duration?: number;
}

interface SourceSelectorProps {
  width?: number;
  height?: number;
  alerts: Alert[];
  selectedSource?: string[];
  activeAlertIndex?: number;
  alertChangeCallback?: (index: number) => void;
  selectionCallback?: (data: string[]) => void;
  blinkConfig?: BlinkConfig;
  isDisplayOnly?: boolean;
  isLoading?: boolean;
  className?: string;
  movingSources: MovingSources[];
}

const calculateDiff = (alerts: Array<Alert>, activeIndex: number) => {
  const zeroDay = { day: 0, hour: 0 };
  const currentAlert = alerts[activeIndex];

  if (!currentAlert) return zeroDay;

  const diff = currentAlert?.date - alerts[0]?.date;

  if (!diff) return zeroDay;

  return {
    day: Math.round(diff) || 0,
    hour: Math.round((24 / diff) % 24) || 0,
  };
};

const pointInsideCircle = (click: Point, center: Point, radius: number) => {
  return (
    Math.pow(click.x - center.x, 2) + Math.pow(click.y - center.y, 2) <=
    Math.pow(radius, 2)
  );
};

const buildImageStack = (
  alerts: Array<Alert>,
  activeIndex: number,
  isDisplayOnly: boolean
) => {
  if (isDisplayOnly) {
    return alerts[activeIndex] ? [alerts[activeIndex].image] : [];
  } else {
    return alerts.map(({ image }) => image);
  }
};

const MovingSourceSelector: FunctionComponent<SourceSelectorProps> = ({
  width = 600,
  height = 600,
  selectedSource = [],
  alerts = [],
  activeAlertIndex = 0,
  alertChangeCallback,
  selectionCallback,
  blinkConfig,
  isDisplayOnly = false,
  isLoading: isLoadingExternal,
  className,
  movingSources = []
}) => {
    const [ currentIndex, setCurrentIndex ] = useState<number>(0);
    const [isLoading, setLoading] = useState(true);
    const [isPlaying, setIsPlaying] = useState(true);
    const [message, setMessage] = useState<ReactNode>();
    const [isMessageVisible, setMessageVisible] = useState(false);
    const { t } = useTranslation();
    const isPrepared = !isLoading && !isLoadingExternal;

    const clickIsInsideCircle = (
        click: Point,
        width: number,
        height: number
        ): string | undefined => {
        if (movingSources) {
            for(let movingSource of movingSources) {
                const currentFrame = movingSource.sources[currentIndex];
                let foundSource = pointInsideCircle(
                    click,
                    {
                        x: toDecimalPercent(currentFrame.x) * width,
                        y: toDecimalPercent(currentFrame.y) * height,
                    },
                    getRadius(movingSource.type, movingSource.radius) * width
                )
                if (foundSource) {
                    return movingSource.id;
                }
            }
        }
    };

    const notFound = () => {
        setMessage(t("source_selector.messages.failure"));
        setMessageVisible(true);
    };

    const handlePause = () => {
        setIsPlaying(e => !e);
    }
    const sourceFound = () => {
        setMessage(
        <>
            <IconComposer icon="checkmark" />
            {t("source_selector.messages.success")}
        </>
        );
        setMessageVisible(true);
    };

    const handleClick: MouseEventHandler<HTMLDivElement> = ({
        clientX: x,
        clientY: htmlY,
        target,
    }) => {
        if (!isPrepared || isDisplayOnly) return;

        const {
        tagName,
        clientWidth: width,
        clientHeight: height,
        } = target as HTMLElement;

        if (tagName.toLowerCase() !== "img") return;

        const { left, top } = (target as HTMLElement).getBoundingClientRect();

        /** remember that Y for SVG starts on the top side, click value needs to be flipped */
        const clickedId = clickIsInsideCircle(
            { x: x - left, y: height - htmlY + top },
            width,
            height
        );

        if (clickedId) {
            const isAlreadySelected = selectedSource.includes(clickedId);

            if (isAlreadySelected) return;
            selectionCallback && selectionCallback(selectedSource.concat(clickedId));
            sourceFound();
        } else {
            notFound();
        }
    };

    const handleMessageChange = () => {
        setMessageVisible(false);
    };

    const { day, hour } = calculateDiff(alerts, activeAlertIndex);

    const images = buildImageStack(alerts, activeAlertIndex, isDisplayOnly);

    const nextBlink = () => {
        if (isPlaying) {
          if(currentIndex > movingSources[0].sources.length - 2) {
            setCurrentIndex(0)
          } else {
            setCurrentIndex(e => e + 1);
          }
        }
    };
    useInterval(nextBlink, 500);
    
    return (
        <AspectRatio ratio={1} {...{ className }}>
            {!isDisplayOnly && (
                <Message
                onMessageChangeCallback={handleMessageChange}
                isVisible={isMessageVisible}
                >
                {message}
                </Message>
            )}
        {movingSources && (
            <Styled.BackgroundBlinker
                images={images}
                activeIndex={currentIndex}
                blinkCallback={alertChangeCallback}
                loadedCallback={() => setLoading(false)}
                onClickCallback={handleClick}
                extraControls={
                alerts.length > 0 &&
                !isDisplayOnly && <ElapsedTime {...{ day, hour }} />
                }
                interval={400}
                pauseCallback={handlePause}
                {...blinkConfig}
            >
                <MovingSourceMap {...{ width, height, isPlaying, currentIndex, movingSources, selectedSource }} /> 
            </Styled.BackgroundBlinker>
         )}
        {!isPrepared && <Loader />}
        </AspectRatio>
    );
};

MovingSourceSelector.displayName = "Widgets.MovingSourceSelector";

export default MovingSourceSelector;
