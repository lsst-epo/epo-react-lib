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

const Container: Decorator = (StoryFn) => {
  return (
    <div
      style={{
        "--widget-max-height": "calc(100vh - 2rem)",
        containerType: "inline-size",
      }}
    >
      {StoryFn()}
    </div>
  );
};

// export all decorators that should be globally applied in an array
export const globalDecorators = [
  withTheme,
  withTests({
    results,
  }),
  Container,
];
