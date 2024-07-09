import {
  FunctionComponent,
  MouseEventHandler,
  ReactNode,
  useState,
} from "react";
import { Alert, Source } from "@/types/astro";
import { useTranslation } from "react-i18next";
import AspectRatio from "@/layout/AspectRatio";
import Message from "./Message";
import Loader from "@/atomic/Loader";
import ElapsedTime from "@/atomic/ElapsedTime";
import { Point } from "@/types/charts";
import IconComposer from "@rubin-epo/epo-react-lib/IconComposer";
import SourceMap from "./SourceMap";
import { getRadius, toDecimalPercent } from "./utils";
import * as Styled from "./styles";

interface BlinkConfig {
  autoplay?: boolean;
  loop?: boolean;
  duration?: number;
}

interface SourceSelectorProps {
  width?: number;
  height?: number;
  sources: Source[];
  alerts: Alert[];
  selectedSource?: string[];
  activeAlertIndex?: number;
  alertChangeCallback?: (index: number) => void;
  selectionCallback?: (data: string[]) => void;
  blinkConfig?: BlinkConfig;
  isDisplayOnly?: boolean;
  isLoading?: boolean;
  className?: string;
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

const clickIsInsideCircle = (
  click: Point,
  width: number,
  height: number,
  sources: Array<Source>
): string | undefined => {
  return sources.find(({ x, y, radius, type }) => {
    return pointInsideCircle(
      click,
      {
        x: toDecimalPercent(x) * width,
        y: toDecimalPercent(y) * height,
      },
      getRadius(type, radius) * width
    );
  })?.id;
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

const SourceSelector: FunctionComponent<SourceSelectorProps> = ({
  width = 600,
  height = 600,
  selectedSource = [],
  sources,
  alerts = [],
  activeAlertIndex = 0,
  alertChangeCallback,
  selectionCallback,
  blinkConfig,
  isDisplayOnly = false,
  isLoading: isLoadingExternal,
  className,
}) => {
  const [isLoading, setLoading] = useState(true);
  const [message, setMessage] = useState<ReactNode>();
  const [isMessageVisible, setMessageVisible] = useState(false);
  const { t } = useTranslation();
  const isPrepared = !isLoading && !isLoadingExternal;

  const notFound = () => {
    setMessage(t("source_selector.messages.failure"));
    setMessageVisible(true);
  };

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
      height,
      sources
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

  const sourcesToShow = sources.filter(({ id }) => selectedSource.includes(id));

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
      <Styled.BackgroundBlinker
        images={images}
        activeIndex={activeAlertIndex}
        blinkCallback={alertChangeCallback}
        loadedCallback={() => setLoading(false)}
        onClickCallback={handleClick}
        extraControls={
          alerts.length > 0 &&
          !isDisplayOnly && <ElapsedTime {...{ day, hour }} />
        }
        interval={400}
        {...blinkConfig}
      >
        <SourceMap sources={sourcesToShow} {...{ width, height }} />
      </Styled.BackgroundBlinker>
      {!isPrepared && <Loader />}
    </AspectRatio>
  );
};

SourceSelector.displayName = "Widgets.SourceSelector";

export default SourceSelector;
