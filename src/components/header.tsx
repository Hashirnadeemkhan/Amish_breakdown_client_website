"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone, Search,  } from "lucide-react"
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
        className={`transition-all duration-500 ease-in-out fixed w-full ${
          isScrolled
            ? "bg-white/95 top-0 backdrop-blur-md shadow-2xl border-b border-yellow-200"
            : "bg-gray-900  border-b border-gray-800"
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
             <Image src="/logo.png"  alt="Logo" width={110} height={110} />
             
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
                    0745 4749131
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