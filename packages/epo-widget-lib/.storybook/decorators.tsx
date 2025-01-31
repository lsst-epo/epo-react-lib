import React from "react";
import { Decorator } from "@storybook/react";
import { withTests } from "@storybook/addon-jest";
import results from "../.jest-test-results.json";

const Container: Decorator = (StoryFn) => {
  return (
    <div
      style={{
        "--widget-max-height": "calc(100vh - 2rem)",
        "--widget-padding": "var(--PADDING_SMALL,20px)",
        containerType: "inline-size",
      }}
    >
      {StoryFn()}
    </div>
  );
};

// export all decorators that should be globally applied in an array
export const globalDecorators = [
  withTests({
    results,
  }),
  Container,
];
