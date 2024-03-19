import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const store = {
    isAdmin: false,
    getTheme: [theme, setTheme],
  };

  return <AppContext.Provider value={store}>{children}</AppContext.Provider>;
};
