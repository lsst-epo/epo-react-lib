import { FunctionComponent, ReactNode, useState } from "react";
import { Alert, Source } from "@/types/astro";
import { useTranslation } from "react-i18next";
import IconComposer from "@rubin-epo/epo-react-lib/IconComposer";
import AspectRatio from "@/layout/AspectRatio";
import Message from "./Message";
import Loader from "@/atomic/Loader";
import ElapsedTime from "@/atomic/ElapsedTime";
import Blinker from "@/atomic/Blinker";
import PointSelector from "./PointSelector";

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
  const svgId = "sourceSelectorWidget";
  const isPrepared = !isLoading && !isLoadingExternal;

  const notFound = () => {
    setMessage(t("source_selector.messages.failure"));
    setMessageVisible(true);
  };

  const handleClick = (clickedId?: string) => {
    if (!isPrepared || isDisplayOnly) return;

    if (clickedId) {
      const isValidSource = !!sources.find(({ id }) => id === clickedId);
      const isUnselected = !selectedSource.includes(clickedId);

      if (isValidSource && isUnselected) {
        selectionCallback &&
          selectionCallback(selectedSource.concat(clickedId));
        setMessage(
          <>
            <IconComposer icon="checkmark" />
            {t("source_selector.messages.success")}
          </>
        );
        setMessageVisible(true);
      } else {
        notFound();
      }
    } else {
      notFound();
    }
  };

  const handleMessageChange = () => {
    setMessageVisible(false);
  };

  const { day, hour } = calculateDiff(alerts, activeAlertIndex);

  const images = isDisplayOnly
    ? [alerts[activeAlertIndex]?.image]
    : alerts.map(({ image }) => image);

  return (
    <AspectRatio ratio="square" {...{ className }}>
      {!isDisplayOnly && (
        <Message
          onMessageChangeCallback={handleMessageChange}
          isVisible={isMessageVisible}
          forIds={[svgId]}
        >
          {message}
        </Message>
      )}
      <Blinker
        images={images}
        activeIndex={activeAlertIndex}
        blinkCallback={alertChangeCallback}
        loadedCallback={() => setLoading(false)}
        extraControls={
          alerts.length > 0 &&
          !isDisplayOnly && <ElapsedTime {...{ day, hour }} />
        }
        {...blinkConfig}
      >
        <PointSelector
          id={svgId}
          onSelectCallback={handleClick}
          {...{ width, height, sources, selectedSource }}
        />
      </Blinker>
      {!isPrepared && <Loader />}
    </AspectRatio>
  );
};

SourceSelector.displayName = "Widgets.SourceSelector";

export default SourceSelector;
