import { createContext, useState } from "react";

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("Light");

  //App theme
  if(theme === 'Dark'){
    document.body.classList.add('dark-mode');
    document.body.classList.remove('light-mode');
  }else{
     document.body.classList.add('light-mode');
    document.body.classList.remove('dark-mode');
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
