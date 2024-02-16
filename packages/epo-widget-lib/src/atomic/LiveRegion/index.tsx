import { FunctionComponent, PropsWithChildren } from "react";
import * as Styled from "./styles";

const LiveRegion: FunctionComponent<PropsWithChildren<{ id: string }>> = ({
  id,
  children,
}) => {
  return (
    <Styled.OffscreenLabel aria-live="polite" id={id}>
      {children}
    </Styled.OffscreenLabel>
  );
};

LiveRegion.displayName = "Atomic.LiveRegion";

export default LiveRegion;
