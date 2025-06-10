'use client';

import { useEffect } from 'react';

export default function ThemeScript() {
  useEffect(() => {
    try {
      // Try to get the theme from localStorage
      const savedTheme = localStorage.getItem('theme') || 'light';
      // Apply theme to html element
      document.documentElement.setAttribute('data-theme', savedTheme);
    } catch (e) {
      // Fallback to default theme if localStorage is not available
      document.documentElement.setAttribute('data-theme', 'light');
    }
  }, []);

  return null;
}
