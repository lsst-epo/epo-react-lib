import { createContext } from "react";

const MenuContext =
  createContext<{
    menuItems: Set<HTMLButtonElement>;
    currentIndex: number;
  } | null>(null);

export default MenuContext;
