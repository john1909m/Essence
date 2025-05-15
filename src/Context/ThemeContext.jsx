import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export function useTheme() {
  return useContext(ThemeContext);
}

export function ThemeProvider({ children }) {
  // Check local storage for saved theme preference or default to light
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('darkMode');
    return savedTheme === 'true' ? true : false;
  });

  // Toggle between dark and light mode
  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode);
  };

  // Apply dark mode class to document whenever darkMode changes
  useEffect(() => {
    localStorage.setItem('darkMode', darkMode);
    
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
} 