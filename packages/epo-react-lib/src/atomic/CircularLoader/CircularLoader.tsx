import { FunctionComponent } from "react";
import IconComposer from "@/svg/IconComposer";
import * as Styled from "./styles";

interface CircularLoaderProps {
  fullScreen?: boolean;
  isVisible?: boolean;
}

const CircularLoader: FunctionComponent<CircularLoaderProps> = ({
  fullScreen = false,
  isVisible = false,
}) => (
  <Styled.LoaderContainer {...{ fullScreen, isVisible }}>
    <IconComposer icon="CircularLoader" size={100} />
  </Styled.LoaderContainer>
);

CircularLoader.displayName = "Atomic.CircularLoader";

export default CircularLoader;
