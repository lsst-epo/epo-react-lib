import { FunctionComponent, useContext, useRef, useEffect } from "react";
import MenuContext from "@/contexts/Menu";
import { StyledMenuItemRadio, StyledMenuItemWrapper } from "./styles";
import { useKeyDownEvent } from "@/hooks/listeners";

interface MenuItemRadioProps {
  text: string;
  isChecked: boolean;
  onCheckCallback: (close?: boolean) => void;
}

const MenuItemRadio: FunctionComponent<MenuItemRadioProps> = ({
  text,
  isChecked,
  onCheckCallback,
}) => {
  const menuContext = useContext(MenuContext);
  const menuItemRef = useRef<HTMLDivElement>(null);

  if (!menuContext) {
    throw new Error("Menu item must be used within a Menu Context");
  }

  const { menuItems, currentIndex } = menuContext;

  useEffect(() => {
    const menuItemNode = menuItemRef.current;

    if (menuItemNode) {
      menuItems && menuItems.add(menuItemNode);
    }

    return () => {
      menuItems && menuItemNode && menuItems.delete(menuItemNode);
    };
  }, [menuItems, currentIndex]);

  const isActive =
    menuItemRef.current &&
    [...menuItems].indexOf(menuItemRef.current) === currentIndex;

  function handleKeyDown(event: KeyboardEvent) {
    if (!isChecked && isActive) {
      const { code } = event;

      const keyMap: { [key: string]: () => void } = {
        Space: () => onCheckCallback && onCheckCallback(),
        Enter: () => onCheckCallback && onCheckCallback(true),
      };

      const action = keyMap[code];
      if (action) {
        event.preventDefault();
        action();
      }
    }
  }

  useKeyDownEvent(handleKeyDown);

  return (
    <StyledMenuItemWrapper role="none">
      <StyledMenuItemRadio
        ref={menuItemRef}
        role="menuitemradio"
        tabIndex={isActive ? 0 : -1}
        aria-checked={isChecked}
        onClick={() => onCheckCallback && onCheckCallback()}
      >
        {text}
      </StyledMenuItemRadio>
    </StyledMenuItemWrapper>
  );
};

MenuItemRadio.displayName = "Layout.SlideoutMenu.MenuItemRadio";

export default MenuItemRadio;
