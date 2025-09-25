"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone, Search, Facebook, Twitter, Instagram, MapPin, Mail, Clock } from "lucide-react"
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
      <div
        className={`h-10 flex justify-center items-center bg-[#ffc700] text-black text-sm transition-all duration-500 ease-in-out ${
          isScrolled ? "transform -translate-y-full opacity-0" : "transform translate-y-0 opacity-100"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Social Icons */}
            <div className="flex items-center space-x-3">
              <Facebook className="w-4 h-4 hover:text-white cursor-pointer transition-all duration-300 hover:scale-110" />
              <Twitter className="w-4 h-4 hover:text-white cursor-pointer transition-all duration-300 hover:scale-110" />
              <div className="w-4 h-4 hover:text-white cursor-pointer transition-all duration-300 hover:scale-110">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.373 0 0 5.372 0 12s5.373 12 12 12 12-5.372 12-12S18.627 0 12 0zm5.568 8.16c-.169 1.858-.896 3.463-2.001 4.568-1.105 1.105-2.71 1.832-4.568 2.001v-3.484h-1.5v-1.5h1.5V7.5h1.5v2.245h2.245v1.5H13.5v3.484c1.245-.113 2.369-.653 3.182-1.466.813-.813 1.353-1.937 1.466-3.182H15.75v-1.5h2.318c-.169-1.858-.896-3.463-2.001-4.568C14.962 2.408 13.357 1.681 11.5 1.512v3.484h1.5v1.5h-1.5V8.74H8.755v-1.5H11.5V3.756c-1.245.113-2.369.653-3.182 1.466-.813.813-1.353 1.937-1.466 3.182H9.25v1.5H6.932c.169 1.858.896 3.463 2.001 4.568 1.105 1.105 2.71 1.832 4.568 2.001v-3.484h-1.5v-1.5h1.5v-2.245h2.245v1.5H13.5V7.244c1.245-.113 2.369-.653 3.182-1.466.813-.813 1.353-1.937 1.466-3.182h-2.398v-1.5h2.818z" />
                </svg>
              </div>
              <Instagram className="w-4 h-4 hover:text-white cursor-pointer transition-all duration-300 hover:scale-110" />
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
                <span>11 Spinney Rise
Birstall, Leicester LE4 3DY</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>info@amishbreakdown.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`transition-all duration-500 ease-in-out fixed w-full ${
          isScrolled
            ? "bg-white/95 top-0 backdrop-blur-md shadow-2xl border-b border-yellow-200"
            : "bg-gray-900 top-10 border-b border-gray-800"
        }`}
        style={{
          transform: isScrolled ? "translateY(0)" : "translateY(0)",
        }}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div
              className={`flex items-center space-x-3 transition-all duration-300 ${
                isScrolled ? "scale-90" : "scale-100"
              }`}
            >
             <Image src="/logo.jpg"  alt="Logo" width={110} height={110} />
             
            </div>

            <nav className="hidden lg:flex items-center space-x-8">
              <Link
                href="#home"
                className={`font-medium transition-all duration-300 hover:scale-105 relative group ${
                  isScrolled ? "text-gray-900 hover:text-yellow-600" : "text-white hover:text-yellow-400"
                }`}
              >
                Home
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link
                href="#about"
                className={`font-medium transition-all duration-300 hover:scale-105 relative group ${
                  isScrolled ? "text-gray-900 hover:text-yellow-600" : "text-white hover:text-yellow-400"
                }`}
              >
                About
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link
                href="#services"
                className={`font-medium transition-all duration-300 hover:scale-105 relative group ${
                  isScrolled ? "text-gray-900 hover:text-yellow-600" : "text-white hover:text-yellow-400"
                }`}
              >
                Services
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link
                href="#testimonial"
                className={`font-medium transition-all duration-300 hover:scale-105 relative group ${
                  isScrolled ? "text-gray-900 hover:text-yellow-600" : "text-white hover:text-yellow-400"
                }`}
              >
                Testimonial
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link
                href="#choose-us"
                className={`font-medium transition-all duration-300 hover:scale-105 relative group ${
                  isScrolled ? "text-gray-900 hover:text-yellow-600" : "text-white hover:text-yellow-400"
                }`}
              >
                Choose Us
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link
                href="#contact"
                className={`font-medium transition-all duration-300 hover:scale-105 relative group ${
                  isScrolled ? "text-gray-900 hover:text-yellow-600" : "text-white hover:text-yellow-400"
                }`}
              >
                Contact Us
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </nav>

            <div className="hidden lg:flex items-center space-x-4">
              <div
                className={`flex items-center space-x-3 px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105 ${
                  isScrolled
                    ? "bg-yellow-50 border border-yellow-200 hover:bg-yellow-100"
                    : "bg-gray-800/50 border border-gray-700 hover:bg-gray-700/50"
                }`}
              >
                <div className="p-1 bg-yellow-500 rounded-full">
                  <Phone className="w-4 h-4 text-black" />
                </div>
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
              </div>
              <Button
                variant="ghost"
                size="icon"
                className={`transition-all duration-300 hover:scale-110 ${
                  isScrolled
                    ? "hover:bg-yellow-100 text-gray-700 hover:text-yellow-600"
                    : "hover:bg-gray-700 text-gray-300 hover:text-yellow-400"
                }`}
              >
                <Search className="w-5 h-5" />
              </Button>
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

          {isMenuOpen && (
            <div
              className={`lg:hidden mt-4 pb-4 border-t transition-all duration-300 animate-in slide-in-from-top ${
                isScrolled ? "border-yellow-200" : "border-gray-700"
              }`}
            >
              <nav className="flex flex-col space-y-4 pt-4">
                <Link
                  href="#home"
                  className={`font-medium transition-all duration-300 hover:translate-x-2 ${
                    isScrolled ? "text-gray-900 hover:text-yellow-600" : "text-white hover:text-yellow-400"
                  }`}
                >
                  Home
                </Link>
                <Link
                  href="#about"
                  className={`font-medium transition-all duration-300 hover:translate-x-2 ${
                    isScrolled ? "text-gray-900 hover:text-yellow-600" : "text-white hover:text-yellow-400"
                  }`}
                >
                  About
                </Link>
                <Link
                  href="#services"
                  className={`font-medium transition-all duration-300 hover:translate-x-2 ${
                    isScrolled ? "text-gray-900 hover:text-yellow-600" : "text-white hover:text-yellow-400"
                  }`}
                >
                  Services
                </Link>
                <Link
                  href="#testimonial"
                  className={`font-medium transition-all duration-300 hover:translate-x-2 ${
                    isScrolled ? "text-gray-900 hover:text-yellow-600" : "text-white hover:text-yellow-400"
                  }`}
                >
                  Testimonial
                </Link>
                <Link
                  href="#choose-us"
                  className={`font-medium transition-all duration-300 hover:translate-x-2 ${
                    isScrolled ? "text-gray-900 hover:text-yellow-600" : "text-white hover:text-yellow-400"
                  }`}
                >
                  Choose Us
                </Link>
                <Link
                  href="#contact"
                  className={`font-medium transition-all duration-300 hover:translate-x-2 ${
                    isScrolled ? "text-gray-900 hover:text-yellow-600" : "text-white hover:text-yellow-400"
                  }`}
                >
                  Contact Us
                </Link>
                <div className="flex items-center space-x-2 pt-2">
                  <div className="p-1 bg-yellow-500 rounded-full">
                    <Phone className="w-3 h-3 text-black" />
                  </div>
                  <span className={`font-semibold ${isScrolled ? "text-gray-900" : "text-white"}`}>0745 4749131</span>
                </div>
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}