"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, BookOpen, User, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Academics", href: "/academics" },
    { name: "Admissions", href: "/admissions" },
    { name: "Notice Board", href: "/notices" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ];

  const portals = [
    { name: "Student Portal", href: "/erp/student", role: "Student" },
    { name: "Parent Portal", href: "/erp/parent", role: "Parent" },
    { name: "Teacher Portal", href: "/erp/teacher", role: "Teacher" },
    { name: "Admin Portal", href: "/erp/admin", role: "Admin" },
    { name: "Librarian Portal", href: "/erp/login", role: "Librarian" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-slate-950/80 backdrop-blur-xl border-b border-white/5 shadow-2xl py-3 text-white"
          : "bg-transparent py-5 text-white"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2 group">
          <div className="p-2 rounded-xl bg-indigo-600/10 border border-indigo-500/20 text-indigo-400 transition-all duration-300">
            <BookOpen className="w-6 h-6" />
          </div>
          <span className="text-xl md:text-2xl font-black tracking-tight text-white group-hover:text-indigo-400 transition-colors">
            DAVMPS
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-1">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="px-4 py-2 rounded-full text-sm font-bold transition-all duration-300 text-slate-300 hover:text-white hover:bg-white/5"
            >
              {link.name}
            </Link>
          ))}

          {/* Portals Dropdown */}
          <div
            className="relative ml-4"
            onMouseEnter={() => setActiveDropdown("portals")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button
              className="flex items-center space-x-1 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg shadow-indigo-600/20 border border-indigo-500/30 transition-all duration-300 cursor-pointer"
            >
              <User className="w-4 h-4 mr-1" />
              <span>Portal Login</span>
              <ChevronDown className="w-4 h-4 ml-1" />
            </button>

            <AnimatePresence>
              {activeDropdown === "portals" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute right-0 mt-2 w-48 bg-slate-900 rounded-2xl shadow-2xl overflow-hidden border border-white/10"
                >
                  <div className="py-2">
                    {portals.map((portal) => (
                      <Link
                        key={portal.name}
                        href={portal.href}
                        className="block px-4 py-3 text-sm text-slate-300 hover:bg-white/5 hover:text-indigo-400 transition-colors"
                      >
                        {portal.name}
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden p-2 rounded-lg text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-slate-950/95 backdrop-blur-xl border-b border-white/5 overflow-hidden"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-4 py-3 rounded-lg text-sm font-medium text-slate-300 hover:bg-white/5 hover:text-white transition-all duration-300"
                >
                  {link.name}
                </Link>
              ))}
              
              <div className="border-t border-white/5 pt-4 mt-2">
                <p className="px-4 text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Institutional Portals</p>
                {portals.map((portal) => (
                  <Link
                    key={portal.name}
                    href={portal.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block px-4 py-3 rounded-lg text-sm font-medium text-slate-300 hover:bg-white/5 hover:text-indigo-400 transition-colors"
                  >
                    {portal.name}
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
