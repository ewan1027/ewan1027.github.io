"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false); // State for dark mode
  const pathname = usePathname();

  // Toggle menu for mobile
  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  // Persist dark mode state in localStorage and apply dark class to body
  useEffect(() => {
    const savedDarkMode = localStorage.getItem("darkMode");
    if (savedDarkMode === "true") {
      setDarkMode(true);
    } else {
      setDarkMode(false);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode.toString());
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

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
            <span
              className={`poppins-semibold text-[22px] md:text-[25px] tracking-tight ${
                darkMode ? "text-white" : "text-[#222]"
              } group-hover:text-[var(--accent)] transition-colors`}
            >
              Ewan Dirubut
            </span>
            <span
              className={`montserrat-thin text-[13px] md:text-[17px] ml-2 ${
                darkMode ? "text-[#3c53f5]" : "text-[#3c53f5]"
              } tracking-widest`}
            >
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

        {/* Dark Mode Toggle */}
        <button
          onClick={toggleDarkMode}
          className={`p-2 rounded-full transition-colors ${darkMode ? "bg-[#3c53f5] text-white" : "bg-gray-300"}`}
          aria-label={`Switch to ${darkMode ? "light" : "dark"} mode`}
        >
          {darkMode ? "🌙" : "💡"}
        </button>

        {/* Hamburger Menu for mobile */}
        <button
          className="hamburger md:hidden flex flex-col justify-center items-center w-9 h-9 rounded focus:outline-none relative z-50"
          onClick={toggleMenu}
          aria-label="Open menu"
        >
          <span
            className={`block w-7 h-0.5 bg-black transition-all duration-300 ${mobileMenuOpen ? "rotate-45 translate-y-2" : ""}`}
          ></span>
          <span
            className={`block w-7 h-0.5 bg-black my-1 transition-all duration-300 ${mobileMenuOpen ? "opacity-0" : ""}`}
          ></span>
          <span
            className={`block w-7 h-0.5 bg-black transition-all duration-300 ${mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}
          ></span>
        </button>
      </nav>

      {/* Mobile Menu (Conditional Render) */}
      {mobileMenuOpen && (
        <div className="mobile-menu fixed inset-0 bg-white flex flex-col items-center pt-10 z-40">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-lg mb-4 text-center font-semibold"
              onClick={() => setMobileMenuOpen(false)} // Close the menu when clicking on a link
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
