import {
  FunctionComponent,
  PropsWithChildren,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { useOnClickOutside, useKeyDownEvent } from "@/hooks/listeners";
import MenuContext from "@/contexts/Menu";
import {
  StyledOverlay,
  StyledMenuContainer,
  StyledMenuHeader,
  StyledMenuTitle,
  StyledMenuCallToAction,
  StyledMenuCloseButton,
} from "./styles";
import { MENU_TRANSITION_TIME } from "./constants";
import IconComposer from "@/svg/IconComposer/IconComposer";

interface SlideoutMenuProps {
  title: string;
  callToAction: string;
  id: string;
  isOpen: boolean;
  isSubMenuOpen?: boolean;
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
}) => {
  const menuRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const menuItems = useRef<Set<HTMLButtonElement>>(new Set()).current;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHidden, setIsHidden] = useState(!isOpen);

  const isActive = isOpen && !isSubMenuOpen;

  const value = useMemo(
    () => ({ menuItems, currentIndex }),
    [menuItems, currentIndex]
  );

  useEffect(() => {
    if (isOpen) {
      setTimeout(firstItem);
      setIsHidden(false);
      onOpenCallback && onOpenCallback();
    } else {
      setTimeout(() => {
        setIsHidden(true);
      }, MENU_TRANSITION_TIME);
    }
  }, [isOpen]);

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
        Escape: handleClose,
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
  useOnClickOutside(menuRef, handleClose);

  return (
    <StyledOverlay
      role="none"
      aria-hidden={!isOpen}
      style={{ "--visibility": !isHidden && "visible" }}
    >
      <StyledMenuContainer
        ref={menuRef}
        role="menu"
        aria-labelledby={menuTitleId}
        id={menuId}
      >
        <StyledMenuHeader>
          <StyledMenuTitle
            id={menuTitleId}
            ref={titleRef}
            tabIndex={menuItems.size === 0 ? 0 : undefined}
          >
            {title}
          </StyledMenuTitle>
          <StyledMenuCallToAction>{callToAction}</StyledMenuCallToAction>
          <StyledMenuCloseButton
            type="button"
            onClick={() => handleClose()}
            tabIndex={-1}
          >
            <IconComposer icon="close" size={25} />
          </StyledMenuCloseButton>
        </StyledMenuHeader>
        <MenuContext.Provider value={value}>{children}</MenuContext.Provider>
      </StyledMenuContainer>
    </StyledOverlay>
  );
};

SlideoutMenu.displayName = "Layout.SlideoutMenu";

export default SlideoutMenu;
