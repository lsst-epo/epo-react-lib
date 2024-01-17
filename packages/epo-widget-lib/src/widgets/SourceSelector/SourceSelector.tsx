import { FunctionComponent, MouseEvent, ReactNode, useState } from "react";
import { Alert, Source } from "@/types/astro";
import { useTranslation } from "react-i18next";
import IconComposer from "@rubin-epo/epo-react-lib/IconComposer";
import * as Styled from "./styles";
import Points from "./Points";
import Message from "./Message";
import { getLinearScale } from "./utilities";

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
  alertChangeCallback: (index: number) => void;
  selectionCallback: (data: string[]) => void;
  blinkConfig?: BlinkConfig;
  color?: string;
  isDisplayOnly?: boolean;
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
  color,
  isDisplayOnly = false,
}) => {
  const [isLoaded, setLoaded] = useState(false);
  const [message, setMessage] = useState<ReactNode>();
  const [isMessageVisible, setMessageVisible] = useState(false);
  const { t } = useTranslation();
  const svgId = "sourceSelectorWidget";

  const handleClick = (event: MouseEvent<SVGElement>) => {
    if (isLoaded && !isDisplayOnly) {
      const { target } = event;
      const { id, type } = (target as SVGElement).dataset;

      if (id && type) {
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
    <Styled.SourceSelectorContainer {...{ width, height }}>
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
        loadedCallback={() => {
          console.log("loaded");
          setLoaded(true);
        }}
        {...blinkConfig}
      >
        {alerts.length > 0 && <Styled.ElapsedDisplay {...{ day, hour }} />}
        <Styled.SVG
          preserveAspectRatio="xMidYMid meet"
          style={{ cursor: isDisplayOnly ? "default" : "pointer" }}
          viewBox={`0 0 ${width} ${height}`}
          onClick={handleClick}
          id={svgId}
        >
          <Points
            xScale={getLinearScale([0, width], [0, width])}
            yScale={getLinearScale([0, height], [height, 0])}
            {...{
              color,
              sources,
              selectedSource,
            }}
          />
        </Styled.SVG>
      </Styled.BackgroundBlinker>
    </Styled.SourceSelectorContainer>
  );
};

SourceSelector.displayName = "Widgets.SourceSelector";

export default SourceSelector;
