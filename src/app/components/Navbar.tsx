"use client";

import Link from "next/link";
import { MenuBook, PersonAdd, Login, Close, Menu } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { navLinks, NavLink } from "@/data/navLinks";

export default function Navbar() {
  const [isSticky, setIsSticky] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <>
      <header
        className={`absolute z-10 w-full py-4 font-[Poppins] ${
          isSticky ? "sticky top-0 bg-white shadow-md z-50" : "top-5"
        }`}
        style={{
          transition: "all 0.3s ease",
        }}
      >
        <div className="lg:w-11/12 mx-auto">
          <div className="container mx-auto flex justify-between items-center px-6">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center text-xl font-[Baloo 2] font-bold text-teal-700"
            >
              <MenuBook className="h-8 w-8 mr-2 text-teal-800" />
              FreshTech Creators
            </Link>

            {/* Desktop Menu */}
            <nav className="hidden lg:flex space-x-8 gap-x-3 text-gray-700 font-medium">
              {navLinks.map((link: NavLink) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-teal-700 font-semibold transition"
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Desktop Buttons */}
            <div className="hidden lg:flex space-x-4">
              <Link
                href="/signup"
                className="bg-white text-teal-700 font-semibold px-4 py-2 rounded-lg hover:bg-teal-600 transition flex items-center gap-1"
              >
                <PersonAdd fontSize="small" />
                Signup
              </Link>
              <Link
                href="/login"
                className="border border-teal-500 text-teal-700 font-semibold px-4 py-2 rounded-lg hover:bg-teal-50 transition flex items-center gap-1"
              >
                <Login fontSize="small" />
                Login
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-teal-700"
              onClick={toggleMobileMenu}
            >
              {mobileMenuOpen ? (
                <Close fontSize="medium" />
              ) : (
                <Menu fontSize="medium" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-black bg-opacity-50 transition-opacity duration-300 ${
          mobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        style={{
          right: "256px", // 64rem * 4 = 256px (matches your w-64 mobile menu width)
          backgroundColor: "rgba(0, 0, 0, 0.5)", // black with 50% opacity
        }}
        onClick={toggleMobileMenu}
      ></div>

      <div
        className={`fixed top-0 right-0 z-50 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full p-6">
          <div className="flex justify-end mb-8">
            <button className="text-teal-700" onClick={toggleMobileMenu}>
              <Close fontSize="medium" />
            </button>
          </div>

          <nav className="flex flex-col space-y-6">
            {navLinks.map((link: NavLink) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-teal-700 font-semibold transition py-2"
                onClick={toggleMobileMenu}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="mt-auto space-y-4 pt-8">
            <Link
              href="/signup"
              className="block bg-white text-teal-700 font-semibold px-4 py-2 rounded-lg hover:bg-teal-600 transition flex items-center gap-1"
              onClick={toggleMobileMenu}
            >
              <PersonAdd fontSize="small" />
              Signup
            </Link>
            <Link
              href="/login"
              className="block border border-teal-500 text-teal-700 font-semibold px-4 py-2 rounded-lg hover:bg-teal-50 transition flex items-center gap-1"
              onClick={toggleMobileMenu}
            >
              <Login fontSize="small" />
              Login
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
