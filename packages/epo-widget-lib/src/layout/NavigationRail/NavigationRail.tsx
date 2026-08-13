import * as Styled from "./styles";
import { NavigationRailProvider } from "./Context";
import { PropsWithChildren } from "react";
import NavigationRailHeader from "./Header";
import NavigationRailNav from "./Nav/NavigationRailNav";

export type { NavigationRailItem } from "./types";

type Props = React.ComponentProps<typeof NavigationRailProvider> & {
  label?: string;
  showPrevNext?: boolean;
  previousLabel?: string;
  nextLabel?: string;
} & PropsWithChildren;

/**
 * Vertical rail of buttons for switching between a widget's views or datasets.
 * Positioned absolutely, so it should be placed in a container with
 * `position: relative` applied.
 */
function NavigationRail({
  children,
  items,
  onSelect,
  label,
  showPrevNext,
  previousLabel,
  nextLabel,
}: Props) {
  return (
    <NavigationRailProvider {...{ onSelect, items }}>
      <NavigationRailHeader {...{ showPrevNext, previousLabel, nextLabel }} />
      <Styled.NavigationRailContainer>
        <NavigationRailNav label={label} />
        {children}
      </Styled.NavigationRailContainer>
    </NavigationRailProvider>
  );
}

NavigationRail.displayName = "Layout.NavigationRail";

export default NavigationRail;
