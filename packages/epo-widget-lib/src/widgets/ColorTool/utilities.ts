import flattenDeep from "lodash/flattenDeep";
import find from "lodash/find";
import isEmpty from "lodash/isEmpty";
import { AstroCategory, AstroObject, ImageFilter } from "./ColorTool";

export const getBrightnessValue = (min: number, max: number, value: number) => {
  const s = max - min;
  return s * (value / 100) + min;
};

export const isFilterActive = (filters: ImageFilter[]) =>
  filters.some((f) => f.active);

export const isResetButtonActive = (data: AstroObject) => {
  if (isEmpty(data)) return false;

  return isFilterActive(data.filters);
};

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

export const resetFilters = (filters: ImageFilter[]): ImageFilter[] =>
  filters.map((filter) => {
    const { defaultValue, min, max } = filter;
    const value = defaultValue || 1;

    return {
      ...filter,
      active: false,
      color: "",
      brightness: getBrightnessValue(value, min, max),
      value,
    };
  });
