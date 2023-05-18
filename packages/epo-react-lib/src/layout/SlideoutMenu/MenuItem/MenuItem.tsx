import {
  FunctionComponent,
  PropsWithChildren,
  useContext,
  useRef,
  useEffect,
} from "react";
import MenuContext from "@/contexts/Menu";
import { StyledMenuItem, StyledMenuItemWrapper } from "./styles";
import { ButtonProps } from "@/atomic/Button";

interface MenuItemProps extends ButtonProps {
  text: string;
}

const MenuItem: FunctionComponent<PropsWithChildren<MenuItemProps>> = ({
  text,
  children,
  ...buttonProps
}) => {
  const menuContext = useContext(MenuContext);
  const menuItemRef = useRef<HTMLButtonElement>();

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

  return (
    <StyledMenuItemWrapper role="none">
      <StyledMenuItem
        {...(buttonProps as any)}
        ref={menuItemRef}
        role="menuitem"
        tabIndex={isActive ? 0 : -1}
        iconSize={20}
      >
        {text}
      </StyledMenuItem>
      {children}
    </StyledMenuItemWrapper>
  );
};

MenuItem.displayName = "Layout.SlideoutMenu.MenuItem";

export default MenuItem;
