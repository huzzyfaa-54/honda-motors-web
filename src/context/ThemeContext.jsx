// src/context/ThemeContext.jsx
import { createContext, useState, useEffect } from 'react';

// 1. Create the Context (The Brain)
export const ThemeContext = createContext();

// 2. Create the Provider (The wrapper that passes data down)
export const ThemeProvider = ({ children }) => {
  // Check if they previously chose dark mode; default to false
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem('honda-theme') === 'dark';
  });

  // Whenever isDarkMode changes, update the HTML body and save to local storage
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
      localStorage.setItem('honda-theme', 'dark');
    } else {
      document.body.classList.remove('dark-mode');
      localStorage.setItem('honda-theme', 'light');
    }
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};