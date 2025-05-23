"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Navigation items for easy reuse
  const navItems = [
    { href: "/", label: "About Me" },
    { href: "/resume", label: "Resume" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="w-full bg-white shadow-md fixed top-0 left-0 z-40">
      <nav className="max-w-6xl mx-auto flex justify-between items-center py-3 px-4 md:px-10">
        {/* Logo/Brand */}
        <div className="brand flex items-center">
          <Link href="/" className="logo flex items-center group">
            <span className="poppins-semibold text-[22px] md:text-[25px] tracking-tight text-[#222] group-hover:text-[var(--accent)] transition-colors">
              Ewan Dirubut {/* Updated name */}
            </span>
            <span className="montserrat-thin text-[13px] md:text-[17px] ml-2 text-[#3c53f5] tracking-widest">
              | SOFTWARE ENGINEER
            </span>
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="menu hidden md:block">
          <ul className="flex space-x-7 text-[16px]">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`transition-colors duration-150 border-b-2 ${
                    pathname === item.href
                      ? "text-[var(--accent)] border-[var(--accent)]"
                      : "border-transparent hover:text-[var(--accent)] hover:border-[var(--accent)]"
                  } pb-1`}
                  style={{
                    fontWeight: pathname === item.href ? 600 : 400,
                  }}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Hamburger Menu */}
        <button
          className="hamburger md:hidden flex flex-col justify-center items-center w-9 h-9 rounded focus:outline-none relative z-50"
          onClick={toggleMenu}
          aria-label="Open menu"
        >
          <span
            className={`block w-7 h-0.5 bg-black transition-all duration-300 ${
              mobileMenuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`block w-7 h-0.5 bg-black my-1 transition-all duration-300 ${
              mobileMenuOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block w-7 h-0.5 bg-black transition-all duration-300 ${
              mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </button>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="mobile-menu fixed inset-0 bg-white/95 z-40 flex flex-col">
            <div className="flex justify-between items-center px-6 pt-6 pb-2">
              <Link
                href="/"
                className="logo flex items-center"
                onClick={toggleMenu}
              >
                <span className="poppins-semibold text-[22px] tracking-tight text-[#222]">
                  Ewan Dirubut {/* Updated name */}
                </span>
                <span className="montserrat-thin text-[13px] ml-2 text-[#3c53f5] tracking-widest">
                  | SOFTWARE ENGINEER
                </span>
              </Link>
              <button
                onClick={toggleMenu}
                className="text-3xl font-bold text-[#3c53f5] focus:outline-none"
                aria-label="Close menu"
              >
                &times;
              </button>
            </div>
            <ul className="flex flex-col items-center justify-center flex-1 space-y-8 text-xl font-medium">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`transition-colors duration-150 ${
                      pathname === item.href
                        ? "text-[var(--accent)]"
                        : "hover:text-[var(--accent)]"
                    }`}
                    style={{
                      fontWeight: pathname === item.href ? 600 : 400,
                    }}
                    onClick={toggleMenu}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
