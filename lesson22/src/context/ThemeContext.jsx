import { createContext, useState } from "react";

// 1️⃣ Create a Context object
export const ThemeContext = createContext();

// 2️⃣ Create a Provider component
export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  // Toggle between light/dark themes
  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  // 3️⃣ Provide both the value and function to children
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
