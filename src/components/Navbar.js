"use client";

import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Scheduling', path: '/scheduling' },
    { name: 'Innovations', path: '/innovations' },
    { name: 'Comparison', path: '/comparison' },
    { name: 'About', path: '/about' },
  ];

  return (
    <nav className="bg-slate-900/90 backdrop-blur-sm sticky top-0 z-50 border-b border-slate-800">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <div className="w-8 h-8 rounded-md bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center mr-2">
                <span className="text-white font-bold text-sm">OS</span>
              </div>
              <span className="text-white font-bold text-xl">CPUScheduler</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-4">
            {navItems.map((item) => (
              <Link 
                key={item.path} 
                href={item.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                  pathname === item.path 
                    ? 'text-white bg-slate-700/50' 
                    : 'text-gray-300 hover:bg-slate-700/30 hover:text-white'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
          
          {/* Mobile Navigation Button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-slate-800">
            {navItems.map((item) => (
              <Link 
                key={item.path} 
                href={item.path}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  pathname === item.path 
                    ? 'text-white bg-slate-700' 
                    : 'text-gray-300 hover:bg-slate-700 hover:text-white'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
} 