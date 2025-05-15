import React from 'react';
import { useTheme } from '../../Context/ThemeContext';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';

export default function ThemeToggle() {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <button
      onClick={toggleDarkMode}
      className={`fixed bottom-8 right-8 z-50 p-3 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 focus:outline-none
        ${darkMode 
          ? 'bg-gradient-to-r from-dark-primary via-dark-accent to-indigo-500 text-dark-text ring-2 ring-dark-accent/20' 
          : 'bg-gradient-to-r from-indigo-600 to-indigo-700 text-white'
        }`}
      aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <div className="relative">
        {darkMode ? (
          <SunIcon className="h-6 w-6 animate-pulse drop-shadow-md" />
        ) : (
          <MoonIcon className="h-6 w-6" />
        )}
        {darkMode && (
          <span className="absolute -top-1 -right-1 h-2 w-2 rounded-full bg-yellow-300 animate-ping"></span>
        )}
      </div>
      <span className="sr-only">{darkMode ? 'Light Mode' : 'Dark Mode'}</span>
    </button>
  );
} 