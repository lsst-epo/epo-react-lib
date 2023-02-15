import "@testing-library/jest-dom";
import "jest-canvas-mock";
import { toMatchImageSnapshot } from "jest-image-snapshot";

expect.extend({ toMatchImageSnapshot });
