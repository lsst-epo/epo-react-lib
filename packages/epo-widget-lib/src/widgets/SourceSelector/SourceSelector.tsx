import { FunctionComponent, ReactNode, useState } from "react";
import { Alert, Source } from "@/types/astro";
import { useTranslation } from "react-i18next";
import IconComposer from "@rubin-epo/epo-react-lib/IconComposer";
import { Container } from "@/styles/svg";
import * as Styled from "./styles";
import Message from "./Message";
import { PointSelector } from ".";

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
  className?: string;
}

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
  className,
}) => {
  const [isLoaded, setLoaded] = useState(false);
  const [message, setMessage] = useState<ReactNode>();
  const [isMessageVisible, setMessageVisible] = useState(false);
  const { t } = useTranslation();
  const svgId = "sourceSelectorWidget";

  const handleClick = (id?: string) => {
    if (isLoaded && !isDisplayOnly) {
      if (id) {
        const isAlreadySelected = selectedSource.includes(id);

        if (!isAlreadySelected) {
          selectionCallback && selectionCallback(selectedSource.concat(id));
          setMessage(
            <>
              <IconComposer icon="checkmark" />
              {t("source_selector.messages.success")}
            </>
          );
          setMessageVisible(true);
        }
      } else {
        setMessage(t("source_selector.messages.failure"));
        setMessageVisible(true);
      }
    }
  };

  const handleMessageChange = () => {
    setMessageVisible(false);
  };

  const currentAlert = alerts[activeAlertIndex];
  const diff = currentAlert.date - alerts[0].date;
  const day = Math.round(diff);
  const hour = Math.round((24 / diff) % 24) || 0;

  const images = isDisplayOnly
    ? [alerts[activeAlertIndex].image]
    : alerts.map(({ image }) => image);

  return (
    <Container
      style={{ aspectRatio: `${width} / ${height}` }}
      {...{ className }}
    >
      {!isDisplayOnly && (
        <Message
          onMessageChangeCallback={handleMessageChange}
          isVisible={isMessageVisible}
          forIds={[svgId]}
        >
          {message}
        </Message>
      )}
      <Styled.BackgroundBlinker
        images={images}
        activeIndex={activeAlertIndex}
        blinkCallback={alertChangeCallback}
        loadedCallback={() => setLoaded(true)}
        {...blinkConfig}
      >
        {alerts.length > 0 && !isDisplayOnly && (
          <Styled.ElapsedDisplay {...{ day, hour }} />
        )}
        <PointSelector
          id={svgId}
          onSelectCallback={handleClick}
          {...{ width, height, sources, selectedSource }}
        />
      </Styled.BackgroundBlinker>
    </Container>
  );
};

SourceSelector.displayName = "Widgets.SourceSelector";

export default SourceSelector;
