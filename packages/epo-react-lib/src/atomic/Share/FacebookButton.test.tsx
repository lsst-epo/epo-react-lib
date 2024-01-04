import { render, screen, within } from "@testing-library/react";
import FacebookButton from "./FacebookButton";

const url = "https://rubinobservatory.org";
const title = "New image gallery posts!";

const props = { url, title };

describe("FacebookButton", () => {
  it("renders screenreader text", () => {
    render(<FacebookButton {...props} />);

    const srText = screen.getByText("Facebook");

    expect(srText).toBeInTheDocument();
  });
  it("renders icon", () => {
    render(<FacebookButton {...props} />);

    const button = screen.getByRole("button");
    const icon = within(button).getByRole("presentation");
    expect(icon).toBeInTheDocument();
  });
});
