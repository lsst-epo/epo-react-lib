import { useNavigationRailContext } from "../Context";
import NavigationRailDrawer from "../Drawer";
import NavigationRailPrevNext from "../PrevNext";
import * as Styled from "./styles";

interface Props extends React.ComponentProps<typeof NavigationRailPrevNext> {
  showPrevNext?: boolean;
}

export default function NavigationRailHeader({
  previousLabel,
  nextLabel,
  showPrevNext,
}: Props) {
  const { items, activeId } = useNavigationRailContext();

  const showDrawer = items.every((item) => !!item.icon);
  const item = items.find((item) => item.id === activeId);

  return (
    <Styled.Header>
      {showDrawer && (
        <NavigationRailDrawer {...{ items }} label="Orbits menu" />
      )}
      {item?.header && <h3 aria-live="polite">{item.header}</h3>}
      {showPrevNext && (
        <NavigationRailPrevNext {...{ previousLabel, nextLabel }} />
      )}
    </Styled.Header>
  );
}
