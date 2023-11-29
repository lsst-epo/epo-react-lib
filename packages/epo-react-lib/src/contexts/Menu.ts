import { createContext } from "react";

const MenuContext = createContext<{
  menuItems: Set<HTMLButtonElement | HTMLDivElement | HTMLAnchorElement>;
  currentIndex: number;
} | null>(null);

export default MenuContext;
