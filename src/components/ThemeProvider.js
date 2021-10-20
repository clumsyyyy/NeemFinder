import React, { createContext, useState } from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [darkTheme, setTheme] = useState(
    localStorage.getItem("darkTheme") === "true" ?? false
  );

  const toggleTheme = () => {
    localStorage.setItem("darkTheme", !darkTheme);
    setTheme(!darkTheme);
  };

  return (
    <ThemeContext.Provider
      value={{ toggleDark: toggleTheme, darkTheme: darkTheme }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeContext;
