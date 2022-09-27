import SourceSansProWoff from "@/assets/fonts/source-sans-pro-v18-latin-regular.woff";
import SourceSansProWoff2 from "@/assets/fonts/source-sans-pro-v18-latin-regular.woff2";
import SourceSansProItalicWoff from "@/assets/fonts/source-sans-pro-v18-latin-italic.woff";
import SourceSansProItalicWoff2 from "@/assets/fonts/source-sans-pro-v18-latin-italic.woff2";
import SourceSansProBoldWoff from "@/assets/fonts/source-sans-pro-v18-latin-700.woff";
import SourceSansProBoldWoff2 from "@/assets/fonts/source-sans-pro-v18-latin-700.woff2";
import SourceSansProBoldItalicWoff from "@/assets/fonts/source-sans-pro-v18-latin-700italic.woff";
import SourceSansProBoldItalicWoff2 from "@/assets/fonts/source-sans-pro-v18-latin-700italic.woff2";
import SourceSansProBlackWoff from "@/assets/fonts/source-sans-pro-v18-latin-900.woff";
import SourceSansProBlackWoff2 from "@/assets/fonts/source-sans-pro-v18-latin-900.woff2";
import SourceSansProBlackItalicWoff from "@/assets/fonts/source-sans-pro-v18-latin-900italic.woff";
import SourceSansProBlackItalicWoff2 from "@/assets/fonts/source-sans-pro-v18-latin-900italic.woff2";

const srcs = [
  {
    srcWoff: SourceSansProWoff,
    srcWoff2: SourceSansProWoff2,
  },
  {
    srcWoff: SourceSansProItalicWoff,
    srcWoff2: SourceSansProItalicWoff2,
    fontWeight: "normal",
    fontStyle: "italic",
  },
  {
    srcWoff: SourceSansProBoldWoff,
    srcWoff2: SourceSansProBoldWoff2,
    fontWeight: "700",
  },
  {
    srcWoff: SourceSansProBoldItalicWoff,
    srcWoff2: SourceSansProBoldItalicWoff2,
    fontWeight: "700",
    fontStyle: "italic",
  },
  {
    srcWoff: SourceSansProBlackWoff,
    srcWoff2: SourceSansProBlackWoff2,
    fontWeight: "900",
  },
  {
    srcWoff: SourceSansProBlackItalicWoff,
    srcWoff2: SourceSansProBlackItalicWoff2,
    fontWeight: "900",
    fontStyle: "italic",
  },
];

const embedFont = (
  fontFamily: string,
  srcWoff: string,
  srcWoff2: string,
  fontWeight: string = "400",
  fontStyle: string = "normal"
) => `@font-face {
  font-family: '${fontFamily}';
  src: url(${srcWoff2}) format('woff2'),
        url(${srcWoff}) format('woff);
  font-weight: ${fontWeight},
  font-style: ${fontStyle}
}`;

export const baseFont = srcs.reduce<string>((result, src) => {
  result += embedFont(
    "Source Sans Pro",
    src.srcWoff,
    src.srcWoff2,
    src.fontWeight,
    src.fontStyle
  );

  return result;
}, "");
