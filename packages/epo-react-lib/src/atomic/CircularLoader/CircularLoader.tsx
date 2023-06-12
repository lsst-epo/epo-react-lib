import { FunctionComponent } from "react";
import IconComposer from "@/svg/IconComposer";
import { ScreenreaderText } from "@/styles/utils";
import * as Styled from "./styles";

interface CircularLoaderProps {
  withOverlay?: boolean;
  isVisible?: boolean;
  speed?: Styled.LoaderSpeed;
  description?: string;
  className?: string;
}

const CircularLoader: FunctionComponent<CircularLoaderProps> = ({
  withOverlay = false,
  isVisible = false,
  speed = "normal",
  description,
  className,
}) => (
  <Styled.LoaderContainer
    {...{ withOverlay, isVisible, speed, className }}
    role="status"
    aria-live="assertive"
    aria-atomic="true"
    aria-describedby={description && "loaderDescription"}
  >
    {description && (
      <ScreenreaderText id="loaderDescription">{description}</ScreenreaderText>
    )}
    <IconComposer icon="CircularLoader" size={100} />
  </Styled.LoaderContainer>
);

CircularLoader.displayName = "Atomic.CircularLoader";

export default CircularLoader;
