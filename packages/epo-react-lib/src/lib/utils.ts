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
