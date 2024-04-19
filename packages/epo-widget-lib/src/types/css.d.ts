// My css.d.ts file

declare module "csstype" {
  interface Properties {
    // Allow any CSS Custom Properties
    [index: `--${string}`]: any;
  }
}
