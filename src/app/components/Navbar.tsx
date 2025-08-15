"use client";

import Link from "next/link";
import { MenuBook, PersonAdd, Login } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { navLinks, NavLink } from "@/data/navLinks";
export default function Navbar() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`absolute z-10  w-full py-4 font-[Poppins] ${
        isSticky ? "sticky top-0 bg-white shadow-md z-50" : " top-5"
      }`}
      style={{
        transition: "all 0.3s ease",
      }}
    >
      <div className="w-11/12 mx-auto">
        <div className="container mx-auto flex justify-between items-center px-6">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center text-xl font-[Baloo 2] font-bold text-teal-700"
          >
            <MenuBook className="h-8 w-8 mr-2 text-teal-800" />
            FreshTech Creators
          </Link>

          {/* Menu */}
          <nav className="hidden md:flex space-x-8 gap-x-3 text-gray-700 font-medium">
            {navLinks.map((link: NavLink) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-teal-700 font-semibold   transition"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Buttons */}
          <div className="flex space-x-4">
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
        </div>
      </div>
    </header>
  );
}
