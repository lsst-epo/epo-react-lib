import React from "react";
import { DecoratorFn } from "@storybook/react";
import { withTests } from "@storybook/addon-jest";
import results from "../.jest-test-results.json";
import { GlobalStyles } from "@rubin-epo/epo-react-lib";

const withTheme: DecoratorFn = (StoryFn) => {
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
