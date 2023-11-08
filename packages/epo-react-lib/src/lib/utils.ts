/**
 * utils module.
 * Follows the implementation described in Josh W. Comeau's blog
 * https://www.joshwcomeau.com/react/file-structure/
 *
 * All code in here should be portable between projects and contain
 * no project or business logic. When in doubt, ask:
 * "could this be in lodash?" and if no, it does not belong here.
 */

export const capitalize = (string: string): string => {
  if (typeof string !== "string") return "";
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export const isAbsoluteUrl = (url: string): boolean =>
  /^https?:\/\//i.test(url);

/**
 * params should come in as an object, { key: "value" }
 * however, if there is a querystring in the pathname, we must split them
 * so they are ready to be like this in the calling component:
 * const href = {
 *   pathname: simplePathname,
 *   query: { ...pathParams, ...params },
 * };
 * @param pathnameInput
 * @returns
 */
export const normalizePathData = (
  pathnameInput: string
): { pathname?: string; pathParams: { [key: string]: string } } => {
  if (!pathnameInput) return { pathParams: {} };

  const pathnameArray = pathnameInput.split("?");
  const simplePathname = pathnameArray.shift() || "";
  const pathname =
    simplePathname.startsWith("/") || simplePathname.startsWith("mailto")
      ? simplePathname
      : "/" + simplePathname;
  const urlParams = new URLSearchParams(pathnameArray.shift());
  const pathParams = Object.fromEntries(urlParams);

  return { pathname, pathParams };
};

/** split RGBA string into array of values */
export const parseRgba = (rgba: string) =>
  rgba.replace(/[^\d,]/g, "").split(",");

export const parseHsla = (hsla: string) =>
  hsla.replace(/[^\d,.%]/g, "").split(",");

export const isRgba = (color: string) =>
  new RegExp(
    /rgba\(\s*(-?\d+|-?\d*\.\d+(?=%))(%?)\s*,\s*(-?\d+|-?\d*\.\d+(?=%))(\2)\s*,\s*(-?\d+|-?\d*\.\d+(?=%))(\2)\s*,\s*(-?\d+|-?\d*.\d+)\s*\)/
  ).test(color);

export const isHsla = (color: string) =>
  new RegExp(
    /hsla\(\s*(-?\d+|-?\d*.\d+)\s*,\s*(-?\d+|-?\d*.\d+)%\s*,\s*(-?\d+|-?\d*.\d+)%\s*,\s*(-?\d+|-?\d*.\d+)\s*\)/
  ).test(color);

export const isColorTransparent = (color: string) => {
  if (color === "transparent") return true;
  if (isRgba(color)) return parseRgba(color)[3] === "0";
  if (isHsla(color)) return parseHsla(color)[3] === "0";

  return false;
};

export function isStyleSupported(prop: string, value: string): boolean {
  // If no value is supplied, use "inherit"
  value = arguments.length === 2 ? value : "inherit";
  // Try the native standard method first
  if (typeof window !== "undefined") {
    if ("CSS" in window && "supports" in window.CSS) {
      return window.CSS.supports(prop, value);
    }
    // Check Opera's native method
    if ("supportsCSS" in window) {
      return (
        window.supportsCSS as (property: string, value: string) => boolean
      )(prop, value);
    }
  }

  // node, no way around this
  if (typeof document === "undefined") {
    return true;
  }

  // Convert to camel-case for DOM interactions
  const camel = prop.replace(/-([a-z]|[0-9])/gi, function (all, letter) {
    return (letter + "").toUpperCase();
  });
  // Create test element
  const el = document.createElement("div");
  // Check if the property is supported
  const support = camel in el.style;
  // Assign the property and value to invoke
  // the CSS interpreter
  el.style.cssText = prop + ":" + value;
  // Ensure both the property and value are
  // supported and return
  return support && el.style[camel as any] !== "";
}
