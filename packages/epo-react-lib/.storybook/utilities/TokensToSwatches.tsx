import { FunctionComponent } from "react";
import { ColorPalette, ColorItem } from "@storybook/blocks";
import capitalize from "lodash/capitalize";
import kebabCase from "lodash/kebabCase";
import * as tokens from "@rubin-epo/epo-style-dictionary/rubin";

const TokensToSwatches: FunctionComponent = () => {
  const colorsOnly = Object.entries(tokens).filter(
    ([key]) => key.indexOf("COLOR_RUBIN") === 0
  );

  const colorGroups = colorsOnly.reduce<Record<string, any>>(
    (prev, [key, value]) => {
      const group = key.split("_")[2];
      const cssVar = `--${kebabCase(key)}`;

      if (!prev[group]) {
        prev[group] = {};
      }

      prev[group][cssVar] = value;

      return prev;
    },
    {}
  );

  return (
    <ColorPalette>
      {Object.keys(colorGroups).map((group) => (
        <ColorItem
          key={group}
          title={`Rubin ${capitalize(group)}`}
          subtitle=""
          colors={colorGroups[group]}
        />
      ))}
    </ColorPalette>
  );
};

export default TokensToSwatches;
