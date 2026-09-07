// src/components/ui/ThemeToggle.jsx
import React from 'react';
import { FiMoon, FiSun } from 'react-icons/fi';
import { useTheme } from '../../hooks/useTheme';
import { Button } from './Button';

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button variant="ghost" size="icon" onClick={toggleTheme} aria-label="Toggle theme">
      {theme === 'dark' ? (
        <FiSun className="h-5 w-5 text-slate-100" />
      ) : (
        <FiMoon className="h-5 w-5 text-slate-700" />
      )}
    </Button>
  );
};
