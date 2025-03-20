import { render, screen, waitFor } from "@testing-library/react";
import Slideout from ".";
import userEvent from "@testing-library/user-event";

const slideFrom = "bottom";
const onCloseCallback = jest.fn();

describe("Slideout", () => {
  it("is visible when opened", () => {
    render(<Slideout isOpen={true} />);

    const slideout = screen.getByTestId("slideout");

    expect(slideout).toBeVisible();
  });
  it("enters from the side selected", () => {
    render(<Slideout isOpen={true} slideFrom={slideFrom} />);

    const slideout = screen.getByTestId("slideoutContainer");

    expect(slideout).toHaveStyle({ [slideFrom]: "0" });
  });
  it("closes when Escape is pressed", () => {
    render(<Slideout isOpen={true} onCloseCallback={onCloseCallback} />);

    userEvent.keyboard("{Esc}");

    waitFor(() => {
      expect(onCloseCallback).toBeCalled();
    });
  });
  it("closes when clicked outside of content", () => {
    render(<Slideout isOpen={true} onCloseCallback={onCloseCallback} />);

    const overlay = screen.getByTestId("slideoutBackdrop");
    userEvent.click(overlay);

    waitFor(() => {
      expect(onCloseCallback).toBeCalled();
    });
  });
});
