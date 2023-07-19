import { render, screen, fireEvent, within } from "@testing-library/react";
import CopyUrlButton from "./CopyUrlButton";

const url = "https://rubinobservatory.org";

const props = { url };
const originalClipboard = { ...global.navigator.clipboard };

beforeEach(() => {
  let clipboardData = ""; //initalizing clipboard data so it can be used in testing
  const mockClipboard = {
    writeText: jest.fn((data) => {
      clipboardData = data;

      return Promise.resolve();
    }),
    readText: jest.fn(() => {
      return clipboardData;
    }),
  };
  (global.navigator.clipboard as any) = mockClipboard;
});

afterEach(() => {
  jest.resetAllMocks();
  (global.navigator.clipboard as any) = originalClipboard;
});

describe("CopyUrlButton", () => {
  it("copies URL to the clipboard", () => {
    render(<CopyUrlButton {...props} />);

    const button = screen.getByRole("button");
    fireEvent.click(button);
    expect(navigator.clipboard.readText()).toBe(props.url);
    expect(navigator.clipboard.writeText).toBeCalledTimes(1);
    expect(navigator.clipboard.writeText).toHaveBeenCalledWith(props.url);
  });
  it("renders screenreader text", () => {
    render(<CopyUrlButton {...props} />);

    const srText = screen.getByText("share.copy_url");

    expect(srText).toBeInTheDocument();
  });
  it("renders icon", () => {
    render(<CopyUrlButton {...props} />);

    const button = screen.getByRole("button");

    const icon = within(button).getByTitle("Copy URL");
    expect(icon).toBeInTheDocument();
  });
});
