import * as CSS from "csstype";
declare module "csstype" {
  interface Properties {
    [key: `--${string}`]: string | number | undefined | null | boolean;
  }
}
