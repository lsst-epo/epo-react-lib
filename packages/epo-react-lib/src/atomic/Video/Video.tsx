import { FunctionComponent } from "react";
import ReactPlayer from "react-player/youtube";
import * as Styled from "./styles";

export interface VideoProps {
  url: string;
}

const Video: FunctionComponent<VideoProps> = ({ url }) => {
  return (
    <Styled.VideoWrapper>
      <ReactPlayer url={url} data-testid="video-player" />
    </Styled.VideoWrapper>
  );
};

Video.displayName = "Atomic.Video";

export default Video;
