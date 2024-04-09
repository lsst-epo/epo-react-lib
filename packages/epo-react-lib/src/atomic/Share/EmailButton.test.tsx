import { render, screen, within } from "@testing-library/react";
import EmailButton from "./EmailButton";

const url = "https://rubinobservatory.org";
const title = "New image gallery posts!";

const props = { url, title };

describe("EmailButton", () => {
  it("renders screenreader text", () => {
    render(<EmailButton {...props} />);

    const srText = screen.getByText("share.email");

    expect(srText).toBeInTheDocument();
  });
  it("renders icon", () => {
    render(<EmailButton {...props} />);

    const button = screen.getByRole("button");
    const icon = within(button).getByRole("presentation");
    expect(icon).toBeInTheDocument();
  });
});
