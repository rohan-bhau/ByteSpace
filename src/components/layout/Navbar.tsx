'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ShoppingBag } from 'lucide-react';
import Container from '@/components/ui/Container';
import GridBackground from '@/components/ui/GridBackground';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Courses', href: '#courses' },
    { name: 'Creators', href: '#creators' },
  ];

  return (
    <header className="w-full bg-[#003BE2] text-white sticky top-0 z-50 border-b border-white/10 relative">
      {/* Background grid */}
      <GridBackground size={80} opacity={0.12} />

      <Container className="relative z-10">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2 group">
              <Image
                src="/assets/brand/logo.svg"
                alt="ByteSpace Logo"
                width={152}
                height={34}
                priority
                className="h-8 w-auto object-contain transition-transform group-hover:scale-[1.02]"
              />
            </Link>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-white hover:text-[#d4fa20] font-medium text-[16px] tracking-wide transition-colors duration-200"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Auth & Cart actions */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/login"
              className="text-white hover:text-[#d4fa20] font-medium text-[16px] transition-colors duration-200"
            >
              Sign In
            </Link>

            <Link
              href="/register"
              className="text-white hover:text-[#d4fa20] font-medium text-[16px] transition-colors duration-200"
            >
              Join Us
            </Link>

            {/* Cart Icon without border */}
            <button
              type="button"
              aria-label="Shopping Cart"
              className="text-white hover:text-[#d4fa20] transition-colors duration-200 p-1 flex items-center justify-center cursor-pointer"
            >
              <ShoppingBag className="w-5 h-5 stroke-[2]" />
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden items-center gap-4">
            <button
              type="button"
              aria-label="Shopping Cart"
              className="text-white p-1"
            >
              <ShoppingBag className="w-5 h-5" />
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
              className="p-1.5 text-white hover:text-[#d4fa20] focus:outline-none"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#0034c4] border-t border-white/10 px-4 pt-3 pb-6 space-y-3 relative z-20">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-white hover:text-[#d4fa20] py-2 px-3 text-base font-medium rounded-lg hover:bg-white/5 transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
            <Link
              href="/login"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-center text-white py-2.5 font-medium text-sm rounded-lg hover:bg-white/5"
            >
              Sign In
            </Link>
            <Link
              href="/register"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-center text-white py-2.5 font-medium text-sm rounded-lg hover:bg-white/5"
            >
              Join Us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
