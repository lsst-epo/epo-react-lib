import {
  FunctionComponent,
  PropsWithChildren,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import Slideout from "@/atomic/Slideout";
import { useKeyDownEvent } from "@/hooks/listeners";
import MenuContext from "@/contexts/Menu";
import * as Styled from "./styles";
import IconComposer from "@/svg/IconComposer";

interface SlideoutMenuProps {
  title: string;
  callToAction: string;
  id: string;
  isOpen: boolean;
  isSubMenuOpen?: boolean;
  className?: string;
  onOpenCallback?: () => void;
  onCloseCallback?: () => void;
}

const SlideoutMenu: FunctionComponent<PropsWithChildren<SlideoutMenuProps>> = ({
  title,
  callToAction,
  id,
  isOpen = false,
  isSubMenuOpen = false,
  onOpenCallback,
  onCloseCallback,
  children,
  className,
}) => {
  const menuRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const menuItems = useRef<Set<HTMLButtonElement>>(new Set()).current;

  const [currentIndex, setCurrentIndex] = useState(0);

  const isActive = isOpen && !isSubMenuOpen;

  const value = useMemo(
    () => ({ menuItems, currentIndex }),
    [menuItems, currentIndex]
  );

  useEffect(() => {
    if (isActive) {
      focusIndex(currentIndex);
    }
  }, [isSubMenuOpen]);

  const handleClose = () => {
    if (isActive) {
      return onCloseCallback && onCloseCallback();
    }
  };

  const nextItem = () => {
    const next = (currentIndex + 1) % menuItems.size;
    focusIndex(next);
  };
  const prevItem = () => {
    const prev = (currentIndex - 1 + menuItems.size) % menuItems.size;
    focusIndex(prev);
  };
  const firstItem = () => {
    focusIndex(0);
  };
  const lastItem = () => {
    const last = menuItems.size - 1;
    focusIndex(last);
  };

  const focusIndex = (i: number) => {
    setCurrentIndex(i);
    const items = Array.from(menuItems);
    const item = items[i];
    if (item) {
      item.focus();
    } else {
      titleRef.current && titleRef.current.focus();
    }
  };

  function handleKeyDown(event: KeyboardEvent) {
    if (isActive) {
      const { key } = event;

      const keyMap: { [key: string]: () => void } = {
        ArrowDown: nextItem,
        ArrowUp: prevItem,
        Home: firstItem,
        End: lastItem,
      };

      const action = keyMap[key];
      if (action) {
        event.preventDefault();
        action();
      }
    }
  }

  const menuId = `slideOutMenu-${id}`;
  const menuTitleId = `slideOutMenuTitle-${id}`;

  useKeyDownEvent(handleKeyDown);

  return (
    <Slideout
      onCloseCallback={handleClose}
      {...{ isOpen, onOpenCallback, className }}
    >
      <Styled.MenuContainer
        ref={menuRef}
        role="menu"
        aria-labelledby={menuTitleId}
        id={menuId}
      >
        <Styled.MenuHeader>
          <Styled.MenuTitle
            id={menuTitleId}
            ref={titleRef}
            tabIndex={menuItems.size === 0 ? 0 : undefined}
          >
            {title}
          </Styled.MenuTitle>
          <Styled.MenuCallToAction>{callToAction}</Styled.MenuCallToAction>
          <Styled.MenuCloseButton
            type="button"
            onClick={() => handleClose()}
            tabIndex={-1}
          >
            <IconComposer icon="close" size={25} />
          </Styled.MenuCloseButton>
        </Styled.MenuHeader>
        <MenuContext.Provider value={value}>{children}</MenuContext.Provider>
      </Styled.MenuContainer>
    </Slideout>
  );
};

SlideoutMenu.displayName = "Layout.SlideoutMenu";

export default SlideoutMenu;
