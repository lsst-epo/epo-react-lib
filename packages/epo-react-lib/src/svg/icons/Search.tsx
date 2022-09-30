import { FunctionComponent } from "react";
import { SVGProps } from "@/types/svg";
import defaultProps from "./defaultProps";

const Search: FunctionComponent<SVGProps> = ({
  className,
  size = 36,
  fill = "currentColor",
}) => {
  const uniqueProps = {
    viewBox: "0 0 36 36",
    width: size,
    height: size,
    fill,
    className,
  };

  const mergedSvgProps = Object.assign(defaultProps, uniqueProps);
  return (
    <svg {...mergedSvgProps}>
      <title>Search icon</title>
      <path d="m34.953 33.202-9.1915-9.1923a14.125 14.125 0 1 0-2.3201 2.1174l9.2928 9.2936zm-27.559-10.732a10.987 10.987 0 1 1 7.7686 3.2168 10.998 10.998 0 0 1-7.7686-3.2168z" />
    </svg>
  );
};

Search.displayName = "SVG.Search";

export default Search;
