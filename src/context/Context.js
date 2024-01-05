import { createContext } from "react";
export const StatesContext = createContext();
export default function StatesProvider({ children }) {
  const valueContext = {};
  return (
    <StatesContext.Provider value={valueContext}>
      {children}
    </StatesContext.Provider>
  );
}
