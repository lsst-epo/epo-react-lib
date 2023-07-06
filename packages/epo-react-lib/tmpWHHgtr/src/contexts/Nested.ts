import { createContext, useContext } from "react";

const NestedContext = createContext(false);

export const useNestedContext = () => useContext(NestedContext);

export default NestedContext;
