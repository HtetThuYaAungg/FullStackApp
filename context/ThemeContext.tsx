"use client"

import React, { createContext, ReactNode, useState } from "react";

interface ThemeContextProps {
  toggle: () => void;
  mode: string;
}

export const ThemeContext = createContext<ThemeContextProps>({} as ThemeContextProps);

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [mode, setMode] = useState<string>("dark");

  const toggle = () => {
    setMode((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeContext.Provider value={{ mode, toggle }}>
      <body className={`theme ${mode} container`}>
        {children}
    </body  >
    </ThemeContext.Provider>
  );
};
