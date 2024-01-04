import { FunctionComponent } from "react";
import { SVGProps } from "@/types/svg";
import defaultProps from "./defaultProps";

const Word: FunctionComponent<SVGProps> = ({
  className,
  size = 36,
  fill = "currentColor",
}) => {
  const uniqueProps = {
    viewBox: "0 0 27 36",
    width: size,
    height: size,
    fill,
    className,
  };

  const mergedSvgProps = Object.assign(defaultProps, uniqueProps);

  return (
    <svg {...mergedSvgProps}>
      <path d="M15.75 9.563V0H1.688A1.683 1.683 0 0 0 0 1.688v32.625A1.683 1.683 0 0 0 1.688 36h23.625A1.683 1.683 0 0 0 27 34.313V11.25h-9.562a1.692 1.692 0 0 1-1.688-1.687ZM19.765 18h1.68a.844.844 0 0 1 .823 1.034L19.6 30.846a.836.836 0 0 1-.823.654H16.1a.843.843 0 0 1-.816-.64c-1.814-7.277-1.462-5.709-1.8-7.77h-.035c-.077 1.005-.169 1.223-1.8 7.77a.843.843 0 0 1-.816.64H8.227a.842.842 0 0 1-.823-.661L4.746 19.027A.841.841 0 0 1 5.569 18h1.722a.843.843 0 0 1 .83.682c1.1 5.484 1.413 7.7 1.477 8.592.113-.717.513-2.3 2.067-8.627a.837.837 0 0 1 .823-.64h2.046a.843.843 0 0 1 .823.647c1.688 7.059 2.025 8.719 2.081 9.1-.014-.788-.183-1.252 1.519-9.084a.815.815 0 0 1 .808-.67ZM27 8.571V9h-9V0h.429a1.686 1.686 0 0 1 1.2.492l6.884 6.891A1.682 1.682 0 0 1 27 8.571Z" />
    </svg>
  );
};

Word.displayName = "SVG.Word";

export default Word;
