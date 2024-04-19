import "@testing-library/jest-dom";
import "jest-canvas-mock";

beforeAll(() => {
  class ResizeObserver {
    observe() {
      // do nothing
    }

    unobserve() {
      // do nothing
    }

    disconnect() {
      // do nothing
    }
  }

  window.ResizeObserver = ResizeObserver;
  global.CSS = {
    supports: () => false,
    escape: (k) => k,
  };
});
