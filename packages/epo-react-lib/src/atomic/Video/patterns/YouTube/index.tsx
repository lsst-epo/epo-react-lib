import { FunctionComponent } from "react";
import ReactPlayer, { YouTubePlayerProps } from "react-player/youtube";
import * as Styled from "./styles";

const YouTubePlayer: FunctionComponent<YouTubePlayerProps> = (props) => {
  return (
    <Styled.VideoWrapper>
      <ReactPlayer {...props} data-testid="video-player" />
    </Styled.VideoWrapper>
  );
};

YouTubePlayer.displayName = "Atomic.Video.YouTube";

export default YouTubePlayer;
