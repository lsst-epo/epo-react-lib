import { render, screen } from "@testing-library/react";
import LinkedInButton from "./LinkedInButton";

const url = "https://rubinobservatory.org";
const title = "New image gallery posts!";

const props = { url, title };

describe("LinkedInButton", () => {
  it("renders icon", () => {
    render(<LinkedInButton {...props} />);

    const button = screen.getByRole("button");

    const icon = button.querySelector("svg");
    expect(icon).toBeInTheDocument();
  });
});
