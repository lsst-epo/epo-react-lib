import React from "react";
import { Decorator } from "@storybook/react";
import { withTests } from "@storybook/addon-jest";
import results from "../.jest-test-results.json";
import { GlobalStyles } from "@rubin-epo/epo-react-lib/styles";

const withTheme: Decorator = (StoryFn) => {
  return (
    <>
      <GlobalStyles />
      {StoryFn()}
    </>
  );
};

// export all decorators that should be globally applied in an array
export const globalDecorators = [
  withTheme,
  withTests({
    results,
  }),
];
