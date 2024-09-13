import {
  CSSProperties,
  FunctionComponent,
  useState,
  useCallback,
  useRef,
  useEffect,
} from "react";
import after from "lodash/after";
import * as Styled from "./styles";

export interface ImageStackProps {
  images: Array<{
    url: string;
    width?: number;
    height?: number;
  }>;
  visible?: number | Array<boolean>;
  describedById?: string;
  loadCallback?: () => void;
  mixBlendMode?: CSSProperties["mixBlendMode"];
  className?: string;
  width?: number;
  height?: number;
  showBackdrop?: boolean;
  showLoader?: boolean;
}

const ImageStack: FunctionComponent<ImageStackProps> = ({
  images,
  visible,
  describedById,
  mixBlendMode,
  loadCallback,
  className,
  width,
  height,
  showBackdrop = true,
  showLoader = true,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // must be wrapped in useEffect so the callback does not happen during render
    if (!loading) {
      loadCallback && loadCallback();
    }
  }, [loading]);

  const onComplete = useCallback(
    after(images.length, () => {
      setLoading(false);
    }),
    []
  );

  if (!images || images.length === 0) return null;

  if (loading && containerRef.current) {
    const imageElements = Array.from(
      containerRef.current.getElementsByTagName("img")
    );

    const hasCompleted = imageElements.every(({ complete }) => !!complete);

    // additional safety in the event images are loaded from disk
    // and do not fire the onLoad event
    if (hasCompleted) {
      setLoading(false);
    }
  }

  return (
    <Styled.StackContainer
      ref={containerRef}
      role="img"
      aria-describedby={describedById}
      className={className}
      style={{
        "--image-stack-background": showBackdrop && "var(--neutral95, #1f2121)",
        aspectRatio: `${width || images[0].width} / ${
          height || images[0].height
        }`,
      }}
    >
      {showLoader && loading && <Styled.StackLoader isVisible />}
      {images.map(({ url, width, height }, i) => {
        const isVisible = Array.isArray(visible) ? visible[i] : visible === i;

        return (
          <Styled.StackedImage
            key={i}
            role="presentation"
            src={url}
            {...{ width, height }}
            onLoad={onComplete}
            onError={onComplete}
            style={{ mixBlendMode }}
            hidden={!isVisible}
          />
        );
      })}
    </Styled.StackContainer>
  );
};

ImageStack.displayName = "Atomic.ImageStack";

export default ImageStack;
