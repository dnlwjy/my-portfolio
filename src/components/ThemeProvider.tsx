
import { createContext, useContext, ReactNode } from "react";

type ThemeContextType = {
  theme: "dark";
};

const ThemeContext = createContext<ThemeContextType>({ theme: "dark" });

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  // Since this is a dark-themed portfolio, we're always using the dark theme
  const value = { theme: "dark" as const };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};
