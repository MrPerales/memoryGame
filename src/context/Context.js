import { createContext, useState } from "react";
export const StatesContext = createContext();
export default function StatesProvider({ children }) {
  const [score, setScore] = useState(0);
  const [name, setName] = useState("");
  const [openModalExit, setOpenModalExit] = useState(false);

  const points = (score) => {
    setScore(score);
  };

  const valueContext = {
    score,
    points,
    name,
    setName,
    openModalExit,
    setOpenModalExit,
  };
  return (
    <StatesContext.Provider value={valueContext}>
      {children}
    </StatesContext.Provider>
  );
}
