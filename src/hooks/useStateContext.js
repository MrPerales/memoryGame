import { useContext } from "react";
import { StatesContext } from "../context/context";

export default function useStateContext() {
  return useContext(StatesContext);
}
