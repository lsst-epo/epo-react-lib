import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { NavigationRailItem } from "../types";

export interface NavigationRailContextValue {
  activeId?: string;
  setActiveId: (id: string) => void;
  items: NavigationRailItem[];
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
}

const NavigationRailContext = createContext<NavigationRailContextValue | null>(
  null,
);

export default NavigationRailContext;

export function useNavigationRailContext() {
  const context = useContext(NavigationRailContext);

  if (!context) {
    throw new Error(
      "NavigationRail components cannot be rendered outside the NavigationRailProvider component.",
    );
  }

  return context;
}

export interface Props {
  children: ReactNode;
  defaultActiveId?: string;
  items: NavigationRailItem[];
  onSelect?: (id: string) => void;
}

/**
 * Owns the shared activeId and the menu drawer's open state.
 */
export function NavigationRailProvider({
  children,
  defaultActiveId,
  items,
  onSelect,
}: Props) {
  const itemIds = items.map((item) => item.id);
  const [activeId, setActiveIdState] = useState(defaultActiveId || itemIds[0]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Kept in a ref so `setActiveId` stays stable even when consumers pass a new
  // `onSelect` identity on every render.
  const onSelectRef = useRef(onSelect);
  useEffect(() => {
    onSelectRef.current = onSelect;
  });

  const setActiveId = useCallback((id: string) => {
    setActiveIdState(id);
    onSelectRef.current?.(id);
  }, []);

  const value = useMemo(
    () => ({
      activeId,
      setActiveId,
      itemIds,
      items,
      isMenuOpen,
      setIsMenuOpen,
    }),
    [activeId, setActiveId, itemIds, isMenuOpen],
  );

  return (
    <NavigationRailContext.Provider {...{ value }}>
      {children}
    </NavigationRailContext.Provider>
  );
}

NavigationRailProvider.displayName = "Layout.NavigationRail.Provider";
