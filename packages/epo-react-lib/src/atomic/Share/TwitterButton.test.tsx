import { render, screen, within } from "@testing-library/react";
import TwitterButton from "./TwitterButton";

const url = "https://rubinobservatory.org";
const title = "New image gallery posts!";

const props = { url, title };

describe("TwitterButton", () => {
  it("renders screenreader text", () => {
    render(<TwitterButton {...props} />);

    const srText = screen.getByText("Twitter");

    expect(srText).toBeInTheDocument();
  });
  it("renders icon", () => {
    render(<TwitterButton {...props} />);

    const button = screen.getByRole("button");

    const icon = within(button).getByRole("presentation");
    expect(icon).toBeInTheDocument();
  });
});
