import { FunctionComponent, MouseEvent, ReactNode, useState } from "react";
import { Alert, Source } from "@/types/astro";
import { useTranslation } from "react-i18next";
import { ImageShape } from "@rubin-epo/epo-react-lib";
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

interface Elapsed {
  day: number;
  hour: number;
}

interface SourceSelectorProps {
  width?: number;
  height?: number;
  sources: Source[];
  alerts?: Alert[];
  selectedSource?: Source[];
  images: ImageShape[];
  selectionCallback?: (data: Source[]) => void;
  blinkConfig?: BlinkConfig;
  color?: string;
  isDisplayOnly?: boolean;
}

const SourceSelector: FunctionComponent<SourceSelectorProps> = ({
  width = 600,
  height = 600,
  selectedSource = [],
  sources,
  alerts,
  images,
  selectionCallback,
  blinkConfig,
  color,
  isDisplayOnly = false,
}) => {
  const [isLoaded, setLoaded] = useState(false);
  const [message, setMessage] = useState<ReactNode>();
  const [isMessageVisible, setMessageVisible] = useState(false);
  const [elapsed, setElapsed] = useState<Elapsed | null>(null);
  const [imageIndex, setIndex] = useState(0);
  const { t } = useTranslation();
  const svgId = "sourceSelectorWidget";

  const findData = (data: Source[], id: string, type: string) =>
    data.filter((d) => d.id === id && d.type === type);

  const handleClick = (event: MouseEvent<SVGElement>) => {
    if (isLoaded && !isDisplayOnly) {
      const { target } = event;
      const { id, type } = (target as SVGElement).dataset;

      if (id && type) {
        const isAlreadySelected = findData(selectedSource, id, type).length > 0;

        if (!isAlreadySelected) {
          const newSelect = findData(sources, id, type);
          selectionCallback &&
            selectionCallback(selectedSource.concat(newSelect));
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

  const handleBlinkChange = (index: number) => {
    setIndex(index);
    if (alerts && alerts.length > 1) {
      const currentAlert = alerts[index];
      const diff = currentAlert.date - alerts[0].date;

      setElapsed({
        day: Math.round(diff),
        hour: Math.round((24 / diff) % 24) || 0,
      });
    }
  };

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
        activeIndex={imageIndex}
        blinkCallback={handleBlinkChange}
        loadedCallback={() => {
          console.log("loaded");
          setLoaded(true);
        }}
        {...blinkConfig}
      >
        {elapsed && <Styled.ElapsedDisplay {...elapsed} />}
        <Styled.SVG
          preserveAspectRatio="xMidYMid meet"
          viewBox={`0 0 ${width} ${height}`}
          onClick={handleClick}
          id={svgId}
          $isDisplayOnly={isDisplayOnly}
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
