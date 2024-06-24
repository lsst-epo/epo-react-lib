import { withTests } from "@storybook/addon-jest";
import results from "../.jest-test-results.json";

// export all decorators that should be globally applied in an array
export const globalDecorators = [
  withTests({
    results,
  }),
];
