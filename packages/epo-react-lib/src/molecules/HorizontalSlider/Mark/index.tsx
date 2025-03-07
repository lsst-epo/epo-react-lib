import { FunctionComponent, HTMLProps, RefCallback } from "react";
import isNil from "lodash/isNil";
import * as Styled from "./styles";

interface Props<T = HTMLSpanElement> extends Omit<HTMLProps<T>, "value"> {
  value?: number | readonly number[] | undefined;
  markValue?: string | number | null;
  ref: RefCallback<T>;
}

const getDoubleHandleColor = (
  markValue: string | number,
  value: readonly number[]
) => {
  if (Number(markValue) < value[0]) return {};
  if (Number(markValue) > value[1]) return {};

  return {
    "--color-background-mark": "var(--color-background-track)",
    "--color-border-mark": "var(--color-background-track)",
  };
};

const getSingleHandleColor = (markValue: string | number, value: number) =>
  Number(markValue) <= value
    ? {
        "--color-background-mark": "var(--color-background-track)",
        "--color-border-mark": "var(--color-background-track)",
      }
    : {};

const Mark: FunctionComponent<Props> = ({
  style,
  markValue,
  value,
  ...props
}) => {
  if (isNil(markValue) || isNil(value)) return null;

  const dynamicStyle =
    typeof value === "object"
      ? getDoubleHandleColor(markValue, value)
      : getSingleHandleColor(markValue, value);

  return <Styled.Mark style={{ ...style, ...dynamicStyle }} {...props} />;
};

Mark.displayName = "Form.HorizontalSlider.Mark";

export default Mark;
