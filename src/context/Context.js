import { createContext, useState } from "react";
export const StatesContext = createContext();
export default function StatesProvider({ children }) {
  const [score, setScore] = useState(0);

  const points = (score) => {
    setScore(score);
  };

  const valueContext = { score, points };
  return (
    <StatesContext.Provider value={valueContext}>
      {children}
    </StatesContext.Provider>
  );
}
