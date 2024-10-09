import { FunctionComponent, PropsWithChildren } from "react";
import * as Styled from "./styles";

export interface FrameProps {
  aspectRatio: string;
  zoom?: number;
  position?: string;
  className?: string;
}

const defaultRatio = "16:9";
const defaultPosition = "50% 50%";
const defaultZoom = 1;

const Frame: FunctionComponent<PropsWithChildren<FrameProps>> = ({
  aspectRatio = defaultRatio,
  position = defaultPosition,
  zoom = defaultZoom,
  className,
  children,
}) => {
  let ratio = aspectRatio.split(":");

  if (ratio.length < 2) {
    ratio = defaultRatio.split(":");
  }

  const [n, d] = ratio;

  return (
    <Styled.Frame
      style={{
        "--n": n,
        "--d": d,
        "--position-img": position,
        "--zoom-img": zoom,
      }}
      className={className}
    >
      {children}
    </Styled.Frame>
  );
};

Frame.displayName = "Atomic.Frame";

export default Frame;
