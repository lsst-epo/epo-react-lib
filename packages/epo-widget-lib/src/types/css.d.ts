import "react";

type CustomProp = { [key in `--${string}`]: any };
declare module "react" {
  export interface CSSProperties extends CustomProp {}
}
