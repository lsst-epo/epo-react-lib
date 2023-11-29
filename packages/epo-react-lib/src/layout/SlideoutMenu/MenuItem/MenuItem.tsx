import {
  PropsWithChildren,
  useContext,
  useRef,
  useEffect,
  HTMLProps,
  ReactElement,
} from "react";
import MenuContext from "@/contexts/Menu";
import * as Styled from "./styles";
import { IconKey } from "@/svg/icons";
import IconComposer from "@/svg/IconComposer";

interface MenuButtonProps {
  type?: "button";
  text: string;
  icon: IconKey;
}

interface MenuLinkProps extends HTMLProps<HTMLAnchorElement> {
  type?: "link";
  text: string;
  icon: IconKey;
}

function MenuItem(props: PropsWithChildren<MenuLinkProps>): ReactElement;
function MenuItem(props: PropsWithChildren<MenuButtonProps>): ReactElement;
function MenuItem({
  children,
  icon,
  text,
  type = "button",
  ...restProps
}: PropsWithChildren<MenuButtonProps | MenuLinkProps>): ReactElement {
  const menuContext = useContext(MenuContext);
  const menuItemRef = useRef<HTMLButtonElement | HTMLAnchorElement>();

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
    <Styled.MenuItemWrapper role="none">
      <Styled.MenuItem
        {...restProps}
        as={type === "link" ? "a" : undefined}
        ref={menuItemRef as any}
        role="menuitem"
        tabIndex={isActive ? 0 : -1}
      >
        <IconComposer icon={icon} size={20} />
        {text}
      </Styled.MenuItem>
      {children}
    </Styled.MenuItemWrapper>
  );
}

MenuItem.displayName = "Layout.SlideoutMenu.MenuItem";

export default MenuItem;
