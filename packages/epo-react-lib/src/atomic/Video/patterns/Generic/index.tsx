import { FunctionComponent } from "react";
import { Trans } from "react-i18next";
import * as Styled from "./styles";

export interface GenericVideoProps {
  url: string;
  id?: string;
  width?: number | string;
  height?: number | string;
  thumbnail?: string;
}

const GenericVideo: FunctionComponent<GenericVideoProps> = ({
  thumbnail: poster,
  url,
  id,
  width,
  height,
}) => {
  if (!url) return null;

  return (
    <Styled.Video controls {...{ width, height, id, poster }}>
      <source src={url} type="video/mp4" />
      <Trans>video.unsupported</Trans>
    </Styled.Video>
  );
};

GenericVideo.displayName = "Atomic.Video.Generic";

export default GenericVideo;
