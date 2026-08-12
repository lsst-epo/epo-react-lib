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
    ...global.CSS,
    supports: () => false,
    escape: (k) => k,
  };

  // jsdom 20 ships HTMLDialogElement without any of its methods; they did not
  // land until jsdom 26, which needs jest 30.
  HTMLDialogElement.prototype.show = function () {
    this.open = true;
  };
  HTMLDialogElement.prototype.showModal = function () {
    this.open = true;
  };
  HTMLDialogElement.prototype.close = function () {
    this.open = false;
    this.dispatchEvent(new Event("close"));
  };
});
