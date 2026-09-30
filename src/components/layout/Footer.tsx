"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-white border-t border-gray-100 pt-16 sm:pt-20 pb-12">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        {/* Top Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Brand & Newsletter */}
          <div className="lg:col-span-5 max-w-md">
            <Link href="/" className="inline-block">
              <Image
                src="/assets/brand/logo-dark.svg"
                alt="ByteSpace Logo"
                width={152}
                height={34}
                className="h-8 w-auto object-contain"
              />
            </Link>

            <p className="mt-6 text-sm text-[#4F4F4F] leading-relaxed">
              Stay up to date with our latest features and releases by joining our newsletter.
            </p>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-6 flex flex-wrap sm:flex-nowrap items-center gap-3"
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full sm:w-auto flex-1 min-w-[220px] px-5 py-2.5 rounded-full border border-[#CED0D3] text-sm text-[#040819] placeholder-[#82868E] focus:outline-none focus:border-[#003BE2] transition-colors"
              />
              <button
                type="submit"
                className="w-full sm:w-auto bg-[#D4FB20] text-[#040819] text-sm font-semibold px-6 py-2.5 rounded-full hover:brightness-105 active:scale-95 transition-all shadow-xs"
              >
                Search
              </button>
            </form>

            <p className="mt-3 text-[11px] text-[#82868E] leading-normal">
              By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
            </p>
          </div>

          {/* Right Columns: Links */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8 sm:gap-12">
            {/* Col 1 */}
            <div className="space-y-3.5">
              {[
                { name: "Featured Courses", href: "#courses" },
                { name: "Featured Categories", href: "#categories" },
                { name: "Business", href: "#" },
                { name: "IT", href: "#" },
                { name: "Design", href: "#" },
              ].map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="block text-sm text-[#4F4F4F] hover:text-[#003BE2] transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Col 2 */}
            <div className="space-y-3.5">
              {[
                { name: "Development", href: "#" },
                { name: "Marketing", href: "#" },
                { name: "Photography", href: "#" },
                { name: "Finance", href: "#" },
                { name: "Sport", href: "#" },
              ].map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="block text-sm text-[#4F4F4F] hover:text-[#003BE2] transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Col 3 */}
            <div className="space-y-3.5 col-span-2 sm:col-span-1">
              {[
                { name: "Become a Creator", href: "/register" },
                { name: "Affiliate Program", href: "#" },
                { name: "Contact", href: "#" },
                { name: "Help", href: "#" },
                { name: "About", href: "#" },
              ].map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="block text-sm text-[#4F4F4F] hover:text-[#003BE2] transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#CED0D3]/60 pt-8 mt-16 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#82868E]">
          <p>© 2023 ByteSpace. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <Link href="#" className="hover:text-[#003BE2] transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-[#003BE2] transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="hover:text-[#003BE2] transition-colors">
              Cookies Settings
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
