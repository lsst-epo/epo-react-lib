import { render, screen, within } from "@testing-library/react";
import EmailButton from "./EmailButton";

const url = "https://rubinobservatory.org";
const title = "New image gallery posts!";

const props = { url, title };

describe("EmailButton", () => {
  it("renders icon", () => {
    render(<EmailButton {...props} />);

    const button = screen.getByRole("button");
    const icon = button.querySelector("svg");
    expect(icon).toBeInTheDocument();
  });
});
