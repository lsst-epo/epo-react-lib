import { useRef, useState, useLayoutEffect } from "react";

type ImageStatus = "loading" | "loaded" | "failed";

interface useImageProps {
  url: string;
  crossOrigin?: "anonymous" | "use-credentials";
  referrerpolicy?:
    | "no-referrer"
    | "no-referrer-when-downgrade"
    | "origin"
    | "origin-when-cross-origin"
    | "same-origin"
    | "strict-origin"
    | "strict-origin-when-cross-origin"
    | "unsafe-url";
  onLoadCallback?: () => void;
  onErrorCallback?: () => void;
}

function useImage({
  url,
  crossOrigin,
  referrerpolicy,
  onLoadCallback,
  onErrorCallback,
}: useImageProps): [undefined | HTMLImageElement, ImageStatus] {
  // lets use refs for image and status
  // so we can update them during render
  // to have instant update in status/image when new data comes in
  const statusRef = useRef<ImageStatus>("loading");
  const imageRef = useRef<HTMLImageElement>();

  // we are not going to use token
  // but we need to just to trigger state update
  const [_, setStateToken] = useState(0);

  // keep track of old props to trigger changes
  const oldUrl = useRef<string>();
  const oldCrossOrigin = useRef<string>();
  const oldReferrerPolicy = useRef<string>();
  if (
    oldUrl.current !== url ||
    oldCrossOrigin.current !== crossOrigin ||
    oldReferrerPolicy.current !== referrerpolicy
  ) {
    statusRef.current = "loading";
    imageRef.current = undefined;
    oldUrl.current = url;
    oldCrossOrigin.current = crossOrigin;
    oldReferrerPolicy.current = referrerpolicy;
  }

  useLayoutEffect(
    function () {
      if (!url) return;
      var img = document.createElement("img");

      function onload() {
        statusRef.current = "loaded";
        imageRef.current = img;
        onLoadCallback && onLoadCallback();
        setStateToken(Math.random());
      }

      function onerror() {
        statusRef.current = "failed";
        imageRef.current = undefined;
        onErrorCallback && onErrorCallback();
        setStateToken(Math.random());
      }

      img.addEventListener("load", onload);
      img.addEventListener("error", onerror);
      crossOrigin && (img.crossOrigin = crossOrigin);
      referrerpolicy && (img.referrerPolicy = referrerpolicy);
      img.src = url;

      return function cleanup() {
        img.removeEventListener("load", onload);
        img.removeEventListener("error", onerror);
      };
    },
    [url, crossOrigin, referrerpolicy]
  );

  // return array because it is better to use in case of several useImage hooks
  // const [background, backgroundStatus] = useImage(url1);
  // const [patter] = useImage(url2);
  return [imageRef.current, statusRef.current];
}

export default useImage;
