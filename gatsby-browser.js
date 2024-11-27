import React from "react";
import { GlobalStateProvider } from "./src/context/ordersContext";
import "./src/styles/global.css";

export const wrapRootElement = ({ element }) => {
  return <GlobalStateProvider>{element}</GlobalStateProvider>;
};
