/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import PropTypes from "prop-types";

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

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
