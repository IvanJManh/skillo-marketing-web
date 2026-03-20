"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

const navLinks = [
  { href: "#features", label: "Features" },
  { href: "#how-it-works", label: "How It Works" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#roadmap", label: "Roadmap" },
  { href: "#download", label: "Download" },
]

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-lg shadow-black/5"
          : "bg-white/90 backdrop-blur-md"
      } rounded-2xl`}
    >
      <div className="flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <img src="/icon.png" alt="Logo" className="h-8 w-auto object-contain" />
          <span className="font-semibold text-slate-900 text-lg hidden sm:block">
            Skillo
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-slate-600 hover:text-blue-600 transition-colors font-medium text-sm"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="#download"
            className="px-5 py-2.5 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-full font-medium text-sm hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
          >
            Get Started
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 text-slate-600 hover:text-blue-600 transition-colors"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-slate-100 px-6 py-4">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-slate-600 hover:text-blue-600 transition-colors font-medium py-2"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#download"
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-5 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-full font-medium text-center hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
