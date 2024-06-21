import { create } from "@storybook/theming/create";
import * as tokens from "@rubin-epo/epo-style-dictionary/rubin";

export default create({
  base: "light",

  appBg: tokens.COLOR_BACKGROUND_PAGE_PRIMARY,
  appBorderColor: "#d3d4d5",
  appBorderRadius: 5,

  barTextColor: tokens.COLOR_FONT_PRIMARY,
  barBg: tokens.COLOR_BACKGROUND_PAGE_PRIMARY,

  booleanBg: "#dce0e3",

  buttonBg: tokens.COLOR_BACKGROUND_BUTTON_TERTIARY_DEFAULT,
  buttonBorder: tokens.COLOR_BORDER_BUTTON_TERTIARY,

  colorPrimary: tokens.COLOR_RUBIN_TEAL_400,
  colorSecondary: tokens.COLOR_FONT_ACCENT,

  fontBase: tokens.FONT_STACK_BASE,

  inputBorder: tokens.COLOR_FONT_ACCENT,
  inputTextColor: "#000",
  inputBorderRadius: 6,

  textColor: tokens.COLOR_FONT_PRIMARY,
  textMutedColor: tokens.COLOR_FONT_MUTED,

  brandTitle: "Rubin Observatory Education & Public Outreach",
  brandUrl: "https://rubinobservatory.org/",
  brandImage:
    "https://rubin.canto.com/direct/image/7k1113rl05423djdspflk1g34s/iSOjxbDAamJpaJjntPfLPxHkWDg/original?content-type=image%2Fpng&name=Compact-Horizontal-Color.png",
  brandTarget: "_self",
});
