import * as Styled from "./styles";
import NavigationRailItemButton from "./Item";
import { useNavigationRailContext } from "./Context";

export type { NavigationRailItem } from "./types";

export interface Props {
  label?: string;
  className?: string;
}

/**
 * Vertical rail of buttons for switching between a widget's views or datasets.
 * Positioned absolutely, so it should be placed in a container with
 * `position: relative` applied.
 */
function NavigationRail({ label, className }: Props) {
  const { activeId, setActiveId, isMenuOpen, items } =
    useNavigationRailContext();

  const hasIcons = items.every((item) => !!item.icon);

  return (
    <Styled.NavigationRail
      aria-label={label}
      data-has-icons={hasIcons}
      inert={isMenuOpen}
      className={className}
    >
      {items.map((item) => (
        <NavigationRailItemButton
          key={item.id}
          {...{ item }}
          showLabel={!hasIcons}
          isActive={item.id === activeId}
          onSelect={setActiveId}
        />
      ))}
    </Styled.NavigationRail>
  );
}

NavigationRail.displayName = "Layout.NavigationRail";

export default NavigationRail;
