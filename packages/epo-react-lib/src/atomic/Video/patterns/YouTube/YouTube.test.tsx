import { render, screen } from "@testing-library/react";
import Video from "../..";
const props = {
  url: "https://www.youtube.com/watch?v=wd2hL3yI_-E",
};

jest.mock("react-player/youtube", () => ({
  __esModule: true,
  default: ({ url }: { url: string }) => (
    <div data-testid="video-player">
      <iframe title="test-frame" src={url} />
    </div>
  ),
}));

test("attaches the video URL correctly", () => {
  render(<Video {...props} />);

  const iframe = screen.getByTestId("video-player").querySelector("iframe");

  expect(iframe).toBeDefined();
  expect(iframe).toHaveAttribute("src", props.url);
});
