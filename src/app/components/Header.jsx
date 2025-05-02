'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="fixed top-0 w-full z-50 bg-white/30 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo / Brand */}
          <Link href="/" className="text-2xl font-serif text-gray-800 tracking-wide">
            Azure <span className="text-sky-600">Haven</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-sky-600 transition">Home</Link>
            <Link href="/suites" className="text-gray-700 hover:text-sky-600 transition">Suites</Link>
            <Link href="/experiences" className="text-gray-700 hover:text-sky-600 transition">Experiences</Link>
            <Link href="/about" className="text-gray-700 hover:text-sky-600 transition">About</Link>
            <Link href="/contact" className="text-gray-700 hover:text-sky-600 transition">Contact</Link>
          </nav>

          {/* Mobile Menu Button */}
          <button onClick={toggleMenu} className="md:hidden text-gray-800">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white/90 backdrop-blur p-4 space-y-4">
          <Link href="/" onClick={toggleMenu} className="block text-gray-700 hover:text-sky-600">Home</Link>
          <Link href="/suites" onClick={toggleMenu} className="block text-gray-700 hover:text-sky-600">Suites</Link>
          <Link href="/experiences" onClick={toggleMenu} className="block text-gray-700 hover:text-sky-600">Experiences</Link>
          <Link href="/about" onClick={toggleMenu} className="block text-gray-700 hover:text-sky-600">About</Link>
          <Link href="/contact" onClick={toggleMenu} className="block text-gray-700 hover:text-sky-600">Contact</Link>
        </div>
      )}
    </header>
  );
};

export default Header;
