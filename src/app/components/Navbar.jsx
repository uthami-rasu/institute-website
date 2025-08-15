"use client";

import Link from "next/link";
import { MenuBook, PersonAdd, Login } from "@mui/icons-material";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100); // Change to sticky after 100px scroll
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`py-4 font-[Poppins] ${
        isSticky ? "sticky top-0 bg-white shadow-md z-50" : "bg-[#E6F5F3]"
      }`}
      style={{
        transition: "all 0.3s ease",
      }}
    >
      <div className="container mx-auto flex justify-between items-center px-6">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center text-xl font-bold text-teal-700"
        >
          <MenuBook className="h-8 w-8 mr-2 text-teal-700" />
          FreshTech Creators
        </Link>

        {/* Menu */}
        <nav className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <Link href="/" className="hover:text-teal-600 transition">
            Home
          </Link>
          <Link href="/about" className="hover:text-teal-600 transition">
            About Us
          </Link>
          <Link href="/courses" className="hover:text-teal-600 transition">
            Courses
          </Link>
          <Link href="/admissions" className="hover:text-teal-600 transition">
            Admissions
          </Link>
          <Link href="/contact" className="hover:text-teal-600 transition">
            Contact Us
          </Link>
        </nav>

        {/* Buttons */}
        <div className="flex space-x-4">
          <Link
            href="/signup"
            className="bg-teal-500 text-white px-4 py-2 rounded-lg hover:bg-teal-600 transition flex items-center gap-1"
          >
            <PersonAdd fontSize="small" />
            Signup
          </Link>
          <Link
            href="/login"
            className="border border-teal-500 text-teal-500 px-4 py-2 rounded-lg hover:bg-teal-50 transition flex items-center gap-1"
          >
            <Login fontSize="small" />
            Login
          </Link>
        </div>
      </div>
    </header>
  );
}
