import { IconComposer, ScreenreaderText } from "@rubin-epo/epo-react-lib";
import * as Styled from "../styles";
import { NavigationRailItem } from "../types";

export interface Props {
  item: NavigationRailItem;
  /** When false the label is exposed to screenreaders only. */
  showLabel?: boolean;
  isActive?: boolean;
  onSelect: (id: string) => void;
  className?: string;
}

export default function NavigationRailItemButton({
  item: { id, label, icon, color },
  showLabel = true,
  isActive = false,
  onSelect,
  className,
}: Props) {
  return (
    <Styled.NavigationRailButton
      type="button"
      className={className}
      onClick={() => onSelect(id)}
      aria-pressed={isActive}
      style={{ "--nav-item-color": color }}
    >
      {typeof icon === "string" ? <IconComposer icon={icon} /> : icon ?? null}
      {showLabel ? (
        <span>{label}</span>
      ) : (
        <ScreenreaderText>{label}</ScreenreaderText>
      )}
    </Styled.NavigationRailButton>
  );
}

NavigationRailItemButton.displayName = "Layout.NavigationRail.Item";
