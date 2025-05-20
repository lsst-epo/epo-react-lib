import {
  PropsWithChildren,
  useContext,
  useRef,
  useEffect,
  ReactElement,
  ReactNode,
  ComponentProps,
} from "react";
import MenuContext from "@/contexts/Menu";
import { IconKey } from "@/svg/icons";
import IconComposer from "@/svg/IconComposer";
import * as Styled from "./styles";

interface MenuButtonProps {
  type?: "button";
  text: string;
  icon: IconKey | ReactNode;
}

interface MenuLinkProps extends ComponentProps<"a"> {
  type?: "link";
  text: string;
  icon: IconKey | ReactNode;
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
        {typeof icon === "string" ? (
          <IconComposer icon={icon} size={20} />
        ) : (
          icon
        )}
        {text}
      </Styled.MenuItem>
      {children}
    </Styled.MenuItemWrapper>
  );
}

MenuItem.displayName = "Layout.SlideoutMenu.MenuItem";

export default MenuItem;
