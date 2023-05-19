const srcs = [
  {},
  {
    fontStyle: "italic",
  },
  {
    fontWeight: "700",
  },
  {
    fontWeight: "700",
    fontStyle: "italic",
  },
  {
    fontWeight: "900",
  },
  {
    fontWeight: "900",
    fontStyle: "italic",
  },
];

const buildUrl = (baseUrl: string, fontWeight?: string, fontStyle?: string) =>
  `${baseUrl}${fontWeight ? `-${fontWeight}` : ""}${
    fontStyle ? `-${fontStyle}` : ""
  }`;

const embedFont = (
  fontFamily: string,
  baseUrl: string,
  fontWeight?: string,
  fontStyle?: string
) => `@font-face {
  font-family: '${fontFamily}';
  src: url('${buildUrl(baseUrl, fontWeight, fontStyle)}.woff2') format('woff2'),
        url('${buildUrl(baseUrl, fontWeight, fontStyle)}.woff') format('woff');
  font-weight: ${fontWeight || 400};
  font-style: ${fontStyle || "normal"};
}`;

export const baseFont = srcs.reduce<string>((result, src) => {
  result += embedFont(
    "Source Sans Pro",
    "/fonts/source-sans-pro-v18-latin",
    src.fontWeight,
    src.fontStyle
  );

  return result;
}, "");
