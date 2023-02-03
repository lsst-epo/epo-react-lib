import { render, screen } from "@testing-library/react";
import ColorSwatch from ".";
const props = {
  color: "#009fa1",
  content: "Color: #009fa1",
};

const hexToRgb = (hex: string) => {
  const bigint = parseInt(hex.replace("#", ""), 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;

  return `rgb(${r}, ${g}, ${b})`;
};

test("should pass a color prop to the swatch", () => {
  render(<ColorSwatch {...props} />);
  const swatch = screen.getByTestId("color-swatch");
  const styles = getComputedStyle(swatch);

  expect(swatch).toBeDefined();
  expect(styles.backgroundColor).toBe(hexToRgb(props.color));
});
test("should include screenreader text", () => {
  render(<ColorSwatch {...props} />);
  const srText = screen.getByText(props.content);

  expect(srText).toBeDefined();
});
