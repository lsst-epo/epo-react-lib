import { FunctionComponent } from "react";
import { SVGProps } from "@/types/svg";
import defaultProps from "./defaultProps";

const Pdf: FunctionComponent<SVGProps> = ({
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
      <title>PDF icon</title>
      <path d="M12.79 18.007c-.352-1.125-.345-3.3-.141-3.3.591.002.535 2.593.141 3.3Zm-.12 3.319a32.444 32.444 0 0 1-2 4.409 25.891 25.891 0 0 1 4.423-1.54 9.108 9.108 0 0 1-2.423-2.869ZM6.054 30.1c0 .056.928-.38 2.454-2.827A9.718 9.718 0 0 0 6.054 30.1Zm11.384-18.85H27v23.063A1.683 1.683 0 0 1 25.313 36H1.688A1.683 1.683 0 0 1 0 34.313V1.688A1.683 1.683 0 0 1 1.688 0H15.75v9.563a1.692 1.692 0 0 0 1.688 1.687Zm-.562 12.08a7.057 7.057 0 0 1-3-3.783c.316-1.3.816-3.277.436-4.514a1.761 1.761 0 0 0-3.361-.478c-.352 1.287-.028 3.1.57 5.414A66.025 66.025 0 0 1 8.648 26c-.007 0-.007.007-.014.007-1.905.977-5.175 3.129-3.832 4.781a2.185 2.185 0 0 0 1.512.7c1.259 0 2.51-1.266 4.3-4.345a40.079 40.079 0 0 1 5.555-1.631 10.656 10.656 0 0 0 4.5 1.371 1.82 1.82 0 0 0 1.385-3.052c-.977-.956-3.818-.682-5.175-.506Zm9.632-15.947L19.617.492A1.686 1.686 0 0 0 18.422 0H18v9h9v-.429a1.682 1.682 0 0 0-.492-1.188ZM21.3 25.334c.288-.19-.176-.837-3.009-.633 2.609 1.111 3.009.633 3.009.633Z" />
    </svg>
  );
};

Pdf.displayName = "SVG.Pdf";

export default Pdf;
