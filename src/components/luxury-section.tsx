"use client"

import { useEffect, useRef, useState } from "react"
import { Wrench, Shield, Clock, Award } from "lucide-react"
import Image from "next/image"

export default function LuxurySection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-20 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 xl:px-16">
        {/* Header */}
        <div className="text-center mb-16">
          <div
            className={`inline-flex items-center gap-2 mb-4 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="flex gap-1">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="w-2 h-2 bg-yellow-400 transform rotate-45" />
              ))}
            </div>
            <span className="text-gray-600 font-medium">Premium Service</span>
            <div className="flex gap-1">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="w-2 h-2 bg-yellow-400 transform rotate-45" />
              ))}
            </div>
          </div>

          <h2
            className={`text-4xl lg:text-5xl font-bold text-gray-900 transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Unmatched Reliability and <span className="text-yellow-500">Excellence</span>
          </h2>
        </div>

        {/* Feature Cards */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Emergency Response Card */}
          <div
            className={`group bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-1000 delay-300 hover:shadow-2xl hover:-translate-y-2 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            }`}
          >
            <div className="p-8 lg:p-10">
              <div className="inline-flex items-center gap-3 bg-yellow-400 text-black px-4 py-2 rounded-lg font-semibold mb-6 group-hover:bg-yellow-500 transition-colors">
                <Clock className="w-5 h-5" />
                Emergency Response
              </div>

              <div className="mb-8">
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">Rapid Response Fleet</h3>
                <p className="text-gray-600 leading-relaxed">
                  Our state-of-the-art recovery vehicles are equipped with the latest technology and tools. Available
                  24/7 across the region, we guarantee fast response times and professional service when you need it
                  most.
                </p>
              </div>

              {/* Learn More Button → scroll to services */}
              <div className="flex justify-between items-end">
                <button
                  onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
                  className="bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
                >
                  <span className="flex items-center gap-2">
                    Learn More
                    <svg
                      className="w-4 h-4 transition-transform group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </button>
              </div>
            </div>

            <div className="relative h-64 lg:h-80 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10" />
              <div className="absolute top-4 right-4 z-20">
                <div className="bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-2">
                  <Wrench className="w-4 h-4" />
                  Professional Equipment
                </div>
              </div>
              <Image
                src="/service8.jpg"
                alt="Professional tow truck with emergency equipment"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </div>
          </div>

          {/* Professional Service Card */}
          <div
            className={`group bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-1000 delay-500 hover:shadow-2xl hover:-translate-y-2 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            }`}
          >
            <div className="p-8 lg:p-10">
              <div className="inline-flex items-center gap-3 bg-yellow-400 text-black px-4 py-2 rounded-lg font-semibold mb-6 group-hover:bg-yellow-500 transition-colors">
                <Shield className="w-5 h-5" />
                Certified Technicians
              </div>

              <div className="mb-8">
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">Expert Technicians</h3>
                <p className="text-gray-600 leading-relaxed">
                  Our certified mechanics and recovery specialists are trained to handle any situation with precision
                  and care. Fully insured and experienced, ensuring your vehicle and safety are our top priority.
                </p>
              </div>

              {/* Contact Us Button → direct call */}
              <div className="flex justify-between items-end">
                <a
                  href="tel:447886051544"
                  className="bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
                >
                  <span className="flex items-center gap-2">
                    Contact Us
                    <svg
                      className="w-4 h-4 transition-transform group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </a>
              </div>
            </div>

            <div className="relative h-64 lg:h-80 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10" />
              <div className="absolute top-4 right-4 z-20">
                <div className="bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-2">
                  <Award className="w-4 h-4" />
                  Certified Service
                </div>
              </div>
              <Image
                src="/service7.jpg"
                alt="Professional mechanics working on vehicle"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div
          className={`mt-16 grid grid-cols-2 lg:grid-cols-4 gap-8 transition-all duration-1000 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {[
            { number: "15min", label: "Average Response" },
            { number: "24/7", label: "Service Available" },
            { number: "98%", label: "Success Rate" },
            { number: "2000+", label: "Vehicles Recovered" },
          ].map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="text-3xl lg:text-4xl font-bold text-yellow-500 mb-2 group-hover:scale-110 transition-transform">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
