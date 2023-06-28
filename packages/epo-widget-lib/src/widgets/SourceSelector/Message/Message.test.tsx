import { render, screen, waitFor } from "@testing-library/react";
import Message from ".";

const props = {
  children: "My message",
  onMessageChangeCallback: jest.fn(),
  isVisible: false,
};

describe("Message", () => {
  it(`should be visible if isVisible is set`, () => {
    const { rerender } = render(<Message {...props} />);

    const message = screen.getByRole("status");
    const style = getComputedStyle(message);

    expect(message).toBeInTheDocument();

    waitFor(() => {
      expect(style.height).toBe("0px");
    });

    rerender(<Message {...{ ...props, isVisible: true }} />);

    const rerenderedSyle = getComputedStyle(message);

    expect(rerenderedSyle.height).not.toBe("0px");
  });
});
