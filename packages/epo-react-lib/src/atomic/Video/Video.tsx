import { FunctionComponent } from "react";
import ReactPlayer, { YouTubePlayerProps } from "react-player/youtube";
import * as Styled from "./styles";

const Video: FunctionComponent<YouTubePlayerProps> = (props) => {
  return (
    <Styled.VideoWrapper>
      <ReactPlayer {...props} data-testid="video-player" />
    </Styled.VideoWrapper>
  );
};

Video.displayName = "Atomic.Video";

export default Video;
