import { createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("base");

  function handleTypeTheme(type) {
    setTheme(type);
  }

  return (
    <ThemeContext.Provider
      value={{
        handleTypeTheme,
        theme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
