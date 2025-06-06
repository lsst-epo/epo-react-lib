import flattenDeep from "lodash/flattenDeep";
import find from "lodash/find";
import isEmpty from "lodash/isEmpty";
import { AstroCategory, AstroObject, ImageFilter } from "..";

/** calculates a value that can be used in the CSS {@link https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/brightness brightness filter } */
export const getBrightnessValue = (min: number, max: number, value: number) => {
  const s = max - min;
  return s * (value / 100) + min;
};

export const isFilterActive = (filters: ImageFilter[]) =>
  filters.some((f) => f.active);

export const updateFilters = (datum: AstroObject) =>
  datum.filters.map((f) => {
    const { value, defaultValue, defaultColor, min, max, color } = f;
    const sliderValue = value || defaultValue || 1;
    const updatedColor = defaultColor || color;

    return {
      ...f,
      brightness: getBrightnessValue(min, max, sliderValue),
      color: updatedColor,
    };
  });

export const prepareData = (data: AstroObject): AstroObject => {
  if (isEmpty(data)) return data;

  const preparedData = {
    ...data,
    filters: updateFilters(data),
  };

  return preparedData;
};

export const getDataFiltersByName = (
  data: AstroCategory[],
  name: string
): ImageFilter[] => {
  const preparedData = flattenDeep(
    data.map((category) => {
      return category.objects
        .filter((datum) => datum.name === name)
        .map(updateFilters);
    })
  );
  return preparedData;
};

export const getCategoryName = (data: AstroCategory[], objectName: string) => {
  const selectedObject = find(data, { objects: [{ name: objectName }] });
  const { type = null } = selectedObject || {};
  return type;
};

export const areActionsActive = (data: AstroObject) => {
  if (isEmpty(data)) return false;

  return isFilterActive(data.filters);
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
