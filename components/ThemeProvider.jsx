'use client';

import { useEffect } from 'react';

export default function ThemeProvider({ children }) {
  useEffect(() => {
    // Check localStorage for theme
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    
    // Add event listener for theme changes
    const handleStorageChange = (event) => {
      if (event.key === 'theme') {
        document.documentElement.setAttribute('data-theme', event.newValue || 'light');
      }
    };
    
    window.addEventListener('storage', handleStorageChange);
    
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  return children;
}
