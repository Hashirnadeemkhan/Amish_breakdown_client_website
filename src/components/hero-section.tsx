"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Phone, Clock, MapPin, Star } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    setIsVisible(true)

    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section className="relative min-h-screen lg:mt-0 mt-20 flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/5 via-transparent to-yellow-400/5"></div>

      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0 animate-pulse"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23fbbf24' fillOpacity='0.3'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container mx-auto px-6 lg:px-12 xl:px-16 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          <div
            className={`space-y-8 ${isVisible ? "animate-slide-up" : "opacity-0 translate-y-10"}`}
            style={{ transform: `translateY(${scrollY * 0.1}px)` }}
          >
            <div className="space-y-6">
              <div className="inline-flex items-center px-6 py-3 bg-yellow-400/20 border border-yellow-400/30 text-yellow-400 rounded-full text-sm font-semibold backdrop-blur-sm animate-pulse">
                <Star className="w-4 h-4 mr-2 animate-spin" />
                24/7 Emergency Service Available
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-balance leading-tight">
                <span className="text-white block animate-fade-in-up">Fast & Reliable</span>
                <span className="block text-yellow-400 animate-fade-in-up animation-delay-200">
                  Breakdown Recovery
                </span>
                <span className="block text-white text-2xl sm:text-3xl lg:text-4xl font-normal mt-2 animate-fade-in-up animation-delay-400">
                  Amish Recovery Services
                </span>
              </h1>

              <p className="text-lg lg:text-xl text-gray-300 text-pretty max-w-2xl leading-relaxed animate-fade-in-up animation-delay-600">
                Professional automotive recovery services across the region. When you&#39;re stuck, we&#39;re your trusted
                solution with years of experience.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 animate-fade-in-up animation-delay-800">
              {/* Emergency Call Now -> Direct Call */}
              <a href="tel:447407647395">
                <Button
                  size="lg"
                  className="bg-yellow-400 hover:bg-yellow-500 text-black text-lg px-10 py-7 rounded-xl font-semibold shadow-lg hover:shadow-yellow-400/25 transition-all duration-300 hover:scale-105"
                >
                  <Phone className="w-5 h-5 mr-3" />
                  Emergency Call Now
                </Button>
              </a>

              {/* View All Services -> Scroll to services section */}
              <a href="#services">
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-10 py-7 rounded-xl bg-transparent border-2 border-yellow-400/50 text-yellow-400 hover:bg-yellow-400/10 hover:border-yellow-400 transition-all duration-300"
                >
                  View All Services
                </Button>
              </a>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-12 animate-fade-in-up animation-delay-1000">
              <div className="flex items-center space-x-4 p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-yellow-400/20 hover:border-yellow-400/40 transition-all duration-300 hover:scale-105">
                <Clock className="w-10 h-10 text-yellow-400 animate-pulse" />
                <div>
                  <div className="font-bold text-white text-lg">24/7 Service</div>
                  <div className="text-sm text-gray-400">Always available</div>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-yellow-400/20 hover:border-yellow-400/40 transition-all duration-300 hover:scale-105">
                <MapPin className="w-10 h-10 text-yellow-400 animate-bounce" />
                <div>
                  <div className="font-bold text-white text-lg">Wide Coverage</div>
                  <div className="text-sm text-gray-400">Regional service</div>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-yellow-400/20 hover:border-yellow-400/40 transition-all duration-300 hover:scale-105">
                <Phone className="w-10 h-10 text-yellow-400 animate-pulse" />
                <div>
                  <div className="font-bold text-white text-lg">Quick Response</div>
                  <div className="text-sm text-gray-400">15min average</div>
                </div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div
            className={`relative ${isVisible ? "animate-fade-scale" : "opacity-0 scale-95"}`}
            style={{ transform: `translateY(${scrollY * -0.05}px)` }}
          >
            <div className="relative">
              {/* Animated glow effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-yellow-400/20 to-yellow-600/20 rounded-3xl blur-xl animate-pulse"></div>

              <Image
                src="/hero.png"
                height={600}
                width={800}
                alt="Professional tow truck providing breakdown recovery service"
                className="relative w-full h-auto rounded-2xl shadow-2xl animate-float hover:scale-105 transition-transform duration-500"
              />

              <div className="absolute -bottom-8 -left-8 bg-slate-800/90 backdrop-blur-md border-2 border-yellow-400/30 rounded-2xl p-8 shadow-2xl animate-bounce-slow">
                <div className="text-4xl font-bold text-yellow-400 mb-2">15min</div>
                <div className="text-sm text-gray-300 font-medium">Average Response Time</div>
                <div className="flex items-center mt-3">
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <span className="text-xs text-gray-400 ml-2">5.0 Rating</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
