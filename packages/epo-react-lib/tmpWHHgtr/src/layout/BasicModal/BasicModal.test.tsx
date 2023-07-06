import { render, screen, fireEvent } from "@testing-library/react";
import BasicModal from ".";

const props = {
  children:
    "Cosmic ipsum universe right ascension pole star solstice cosmic rays extragalactic black body NASA cluster muttnik synodic superior planets gravitational constant new moon telescope inferior planets syzygy perturbation falling star quasar red dwarf satellite density day dust vernal equinox zodiac inclination azimuth weightlessness spectrum variable star magnitude flare Mir minor planet transparency cosmology full moon terrestrial quarter moon red shift seeing gravity binary star red giant star space station local group",
  open: true,
  onClose: jest.fn(),
  title: "Title",
  description: "Description",
};

beforeEach(() => {
  // IntersectionObserver isn't available in test environment
  const mockIntersectionObserver = jest.fn();
  mockIntersectionObserver.mockReturnValue({
    observe: () => null,
    unobserve: () => null,
    disconnect: () => null,
  });
  window.IntersectionObserver = mockIntersectionObserver;
});

describe("BasicModal", () => {
  it("should create a modal dialog", () => {
    render(<BasicModal {...props} />);

    const dialog = screen.getByRole("dialog");
    expect(dialog).toBeDefined();
    expect(dialog).toHaveAttribute("aria-modal", "true");
  });
  it("should fire a callback on close", () => {
    render(<BasicModal {...props} />);

    const closeButton = screen.getByRole("button");
    fireEvent.click(closeButton);
    expect(props.onClose).toBeCalled();
  });
});
