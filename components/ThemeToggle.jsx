'use client';

import { useState, useEffect } from 'react';

export default function ThemeToggle() {
  const themes = [
    "light", "dark", "cupcake", "bumblebee", "emerald", "corporate", 
    "synthwave", "retro", "cyberpunk", "valentine", "halloween", 
    "garden", "forest", "aqua", "lofi", "pastel", "fantasy", 
    "wireframe", "black", "luxury", "dracula", "cmyk", "autumn", 
    "business", "acid", "lemonade", "night", "coffee", "winter", 
    "dim", "nord", "sunset"
  ];
  
  const [theme, setTheme] = useState("light");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    // Check if user has a saved theme preference
    const savedTheme = localStorage.getItem('theme') || "light";
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);
  const changeTheme = (newTheme) => {
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    
    // Dispatch an event for other tabs/components
    window.dispatchEvent(new StorageEvent('storage', {
      key: 'theme',
      newValue: newTheme
    }));
    
    setIsDropdownOpen(false);
  };

  return (
    <div className="dropdown dropdown-end mx-1 sm:mx-2">      <div 
        tabIndex={0} 
        role="button" 
        className="btn btn-ghost btn-sm sm:btn-md btn-circle shadow-sm hover:shadow-md" 
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        aria-label="Theme selector"
      >
        <div className="w-5 h-5 flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 object-contain">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.098 19.902a3.75 3.75 0 0 0 5.304 0l6.401-6.402M6.75 21A3.75 3.75 0 0 1 3 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 0 0 3.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008Z" />
          </svg>
        </div>
      </div>{isDropdownOpen && (
        <div tabIndex={0} className="dropdown-content z-[2] menu p-2 shadow-lg bg-base-100 rounded-box w-52 max-h-80 overflow-y-auto border border-base-300">
          <div className="grid grid-cols-2 gap-1">
            {themes.map((t) => (
              <button 
                key={t}
                className={`btn btn-xs sm:btn-sm ${theme === t ? 'btn-primary' : 'btn-ghost'}`}
                onClick={() => changeTheme(t)}
              >
                {t}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
