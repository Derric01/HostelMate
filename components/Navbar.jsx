'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // This would be replaced with actual auth state management
  useEffect(() => {
    // Check if user is logged in based on localStorage
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
  }, []);  return (
    <div className="navbar bg-base-100 shadow-md px-2 sm:px-4 sticky top-0 z-10">
      <div className="navbar-start">
        <div className="dropdown">          <div tabIndex={0} role="button" className="btn btn-ghost btn-sm lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <div className="w-5 h-5 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 object-contain" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
          </div>
          {isMenuOpen && (
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-2 z-[2] p-2 shadow bg-base-100 rounded-box w-52">
              <li><Link href="/" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
              {isLoggedIn ? (
                <>
                  <li><Link href="/matches" onClick={() => setIsMenuOpen(false)}>Matches</Link></li>
                  <li><Link href="/browse" onClick={() => setIsMenuOpen(false)}>Browse</Link></li>
                  <li><Link href="/chat" onClick={() => setIsMenuOpen(false)}>Messages</Link></li>
                </>
              ) : (
                <>
                  <li><Link href="/login" onClick={() => setIsMenuOpen(false)}>Login</Link></li>
                  <li><Link href="/signup" onClick={() => setIsMenuOpen(false)}>Sign Up</Link></li>
                </>
              )}
            </ul>
          )}        </div>
        <Link href="/" className="btn btn-ghost text-lg sm:text-xl normal-case px-2">
          <span className="text-primary font-bold">HostelMate</span>
        </Link>
      </div>      
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-1">
          <li><Link href="/" className="btn btn-ghost btn-sm">Home</Link></li>
          {isLoggedIn ? (
            <>
              <li><Link href="/matches" className="btn btn-ghost btn-sm">Matches</Link></li>
              <li><Link href="/browse" className="btn btn-ghost btn-sm">Browse</Link></li>
              <li><Link href="/chat" className="btn btn-ghost btn-sm">Messages</Link></li>
            </>          ) : (
            <>
              <li><Link href="/login" className="btn btn-ghost btn-sm">Login</Link></li>
              <li><Link href="/signup" className="btn btn-ghost btn-sm">Sign Up</Link></li>
            </>
          )}
        </ul>
      </div>
      <div className="navbar-end">
        <ThemeToggle />
        {isLoggedIn && (
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-8 rounded-full">
                <img alt="User profile" src="/avatar.jpg" />
              </div>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li><Link href="/profile">Profile</Link></li>
              <li><Link href="/matches">My Matches</Link></li>
              <li>
                <a onClick={() => {
                  localStorage.removeItem('token');
                  setIsLoggedIn(false);
                  window.location.href = '/';
                }}>Logout</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
