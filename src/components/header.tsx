"use client"

import { useState, useEffect } from "react"
import { FaWhatsapp } from "react-icons/fa6"
import {
  Menu,
  X,
  Phone,
  Facebook,
  Instagram,
  MapPin,
  Mail,
  Clock,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className="fixed top-0 w-full z-50">
      {/* Top Bar */}
      <div
        className={`h-10 flex justify-center items-center bg-[#ffc700] text-black text-sm transition-all duration-500 ease-in-out ${
          isScrolled
            ? "transform -translate-y-full opacity-0"
            : "transform translate-y-0 opacity-100"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Social Icons */}
            <div className="flex items-center space-x-3">
              <Facebook className="w-4 h-4 hover:text-white cursor-pointer transition-all duration-300 hover:scale-110" />
              <Instagram className="w-4 h-4 hover:text-white cursor-pointer transition-all duration-300 hover:scale-110" />
              <a
                href="https://wa.me/447407647395"
                target="_blank"
                rel="noopener noreferrer"
                className="w-4 h-4 hover:text-white cursor-pointer transition-all duration-300 hover:scale-110"
              >
                <FaWhatsapp />
              </a>
            </div>

            {/* Operating Hours */}
            <div className="hidden md:flex items-center space-x-2 font-medium">
              <Clock className="w-4 h-4" />
              <span>Mon to Sat: 8.00 am - 8.00 pm</span>
            </div>

            {/* Contact Info */}
            <div className="hidden lg:flex items-center space-x-6 font-medium">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>11 Spinney Rise Birstall, Leicester LE4 3DY</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>info@amishbreakdown.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div
        className={`transition-all duration-500 ease-in-out fixed w-full ${
          isScrolled
            ? "bg-white/95 top-0 backdrop-blur-md shadow-2xl border-b border-yellow-200"
            : "bg-gray-900 top-10 border-b border-gray-800"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div
              className={`flex items-center space-x-3 transition-all duration-300 ${
                isScrolled ? "scale-90" : "scale-100"
              }`}
            >
              <Image src="/logo.png" alt="Logo" width={110} height={110} />
            </div>

            {/* Desktop Menu */}
            <nav className="hidden lg:flex items-center space-x-8">
              {["home", "about", "services", "testimonial", "choose-us", "contact"].map(
                (item) => (
                  <Link
                    key={item}
                    href={`#${item}`}
                    className={`transition-colors duration-300 ${
                      isScrolled
                        ? "text-gray-900 hover:text-yellow-600"
                        : "text-white hover:text-yellow-400"
                    }`}
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1).replace("-", " ")}
                  </Link>
                )
              )}
            </nav>

            {/* Call Options (Desktop) */}
            <div className="hidden lg:flex items-center space-x-4">
              <div
                className={`flex items-center space-x-3 px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105 ${
                  isScrolled
                    ? "bg-yellow-50 border border-yellow-200 hover:bg-yellow-100"
                    : "bg-gray-800/50 border border-gray-700 hover:bg-gray-700/50"
                }`}
              >
                <div>
                  <div
                    className={`text-xs transition-colors duration-300 ${
                      isScrolled ? "text-gray-600" : "text-gray-400"
                    }`}
                  >
                    Call to Questions
                  </div>
                  <div
                    className={`font-semibold transition-colors duration-300 ${
                      isScrolled ? "text-gray-900" : "text-white"
                    }`}
                  >
                    07407647395
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <a
                    href="tel:447407647395"
                    className="p-2 bg-yellow-500 rounded-full hover:bg-yellow-600 transition"
                  >
                    <Phone className="w-4 h-4 text-black" />
                  </a>
                  <a
                    href="https://wa.me/447407647395"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-green-500 rounded-full hover:bg-green-600 transition"
                  >
                    <FaWhatsapp className="w-4 h-4 text-white" />
                  </a>
                </div>
              </div>
            </div>

            {/* Mobile menu button */}
            <button
              className={`lg:hidden transition-all duration-300 hover:scale-110 ${
                isScrolled ? "text-gray-900" : "text-white"
              }`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div
              className={`lg:hidden mt-4 pb-4 border-t transition-all duration-300 animate-in slide-in-from-top ${
                isScrolled ? "border-yellow-200" : "border-gray-700"
              }`}
            >
              <nav className="flex flex-col space-y-4 pt-4">
                {["home", "about", "services", "testimonial", "choose-us", "contact"].map(
                  (item) => (
                    <Link
                      key={item}
                      href={`#${item}`}
                      className={`transition-colors duration-300 ${
                        isScrolled
                          ? "text-gray-900 hover:text-yellow-600"
                          : "text-white hover:text-yellow-400"
                      }`}
                    >
                      {item.charAt(0).toUpperCase() + item.slice(1).replace("-", " ")}
                    </Link>
                  )
                )}
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
