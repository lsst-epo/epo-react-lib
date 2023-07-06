// My css.d.ts file
import type * as CSS from "csstype";

declare module "csstype" {
  interface Properties {
    // Allow any CSS Custom Properties
    [index: `--${string}`]: any;
  }
}
