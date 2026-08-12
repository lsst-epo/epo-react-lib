import { useCallback, useEffect, useId, useRef } from "react";
import { IconComposer, ScreenreaderText } from "@rubin-epo/epo-react-lib";
import * as Styled from "./styles";
import NavigationRailItemButton from "../Item";
import { useNavigationRailContext } from "../Context";
import { NavigationRailItem } from "../types";

export interface Props {
  items: NavigationRailItem[];
  /** Accessible name of the drawer itself. */
  label?: string;
  /** Accessible name of the button that opens it. */
  menuLabel?: string;
  className?: string;
}

/**
 * A drawer with the same navigation items as NavgiationRail.
 */
export default function NavigationRailDrawer({
  items,
  label = "Menu",
  menuLabel = "Menu",
  className,
}: Props) {
  const { activeId, setActiveId, isMenuOpen, setIsMenuOpen } =
    useNavigationRailContext();

  const wrapperRef = useRef<HTMLDivElement>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const dialogId = useId();

  const close = useCallback(() => {
    dialogRef.current?.close();
    setIsMenuOpen(false);
  }, [setIsMenuOpen]);

  const handleToggle = () => {
    if (!dialogRef.current) return;
    const isOpen = dialogRef.current.open;

    if (isOpen) {
      close();
    } else {
      const selected = dialogRef.current?.querySelector<HTMLButtonElement>(
        'button[aria-pressed="true"]',
      );
      dialogRef.current.show();
      selected?.focus();
      setIsMenuOpen(true);
    }
  };

  // Close the dialog on escape
  useEffect(() => {
    const dialogEl = dialogRef.current;

    if (!dialogEl) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        close();
      }
    };

    dialogEl.addEventListener("keydown", onKeyDown);

    return () => {
      dialogEl.removeEventListener("keydown", onKeyDown);
    };
  }, [close]);

  // Close on click outside
  useEffect(() => {
    const onPointerDown = ({ target }: PointerEvent) => {
      if (!isMenuOpen) return;
      if (wrapperRef.current?.contains(target as Node)) return;
      close();
    };

    document.addEventListener("pointerdown", onPointerDown);

    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, [isMenuOpen, close]);

  const handleSelect = (id: string) => {
    setActiveId(id);
    close();
  };

  return (
    <Styled.Wrapper ref={wrapperRef} className={className}>
      <Styled.MenuButton
        type="button"
        aria-expanded={isMenuOpen}
        aria-controls={dialogId}
        onClick={handleToggle}
      >
        <IconComposer icon={isMenuOpen ? "Close" : "Hamburger"} />
        <ScreenreaderText>{menuLabel}</ScreenreaderText>
      </Styled.MenuButton>
      <Styled.Dialog
        ref={dialogRef}
        id={dialogId}
        aria-label={label}
        data-testid="navigationRailDrawer"
      >
        {items.map((item) => (
          <NavigationRailItemButton
            key={item.id}
            {...{ item }}
            showLabel
            isActive={item.id === activeId}
            onSelect={handleSelect}
          />
        ))}
      </Styled.Dialog>
    </Styled.Wrapper>
  );
}

NavigationRailDrawer.displayName = "Layout.NavigationRail.Drawer";
