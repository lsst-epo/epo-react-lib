import { FunctionComponent, HTMLProps, MouseEventHandler } from "react";
import IconComposer from "@rubin-epo/epo-react-lib/IconComposer";
import * as Styled from "./styles";

interface PlaybackControlProps extends HTMLProps<HTMLButtonElement> {
  icon: string;
  label: string;
  handleClick: MouseEventHandler<HTMLButtonElement>;
}

const PlaybackControl: FunctionComponent<PlaybackControlProps> = ({
  icon,
  label,
  handleClick,
  ...buttonProps
}) => {
  const iconSize = 15;
  return (
    <Styled.PlaybackButton {...(buttonProps as any)} onClick={handleClick}>
      <Styled.IconContainer>
        <IconComposer icon={icon} size={iconSize} />
      </Styled.IconContainer>
      <span>{label}</span>
    </Styled.PlaybackButton>
  );
};

PlaybackControl.displayName = "Atomic.PlaybackControl";

export default PlaybackControl;
