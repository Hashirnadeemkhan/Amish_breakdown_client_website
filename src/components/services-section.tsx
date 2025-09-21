"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

const featuredServices = [
  {
    title: "Emergency Breakdown Recovery",
    description:
      "24/7 emergency breakdown recovery service for all vehicle types. Our professional team responds quickly to get you back on the road safely with state-of-the-art recovery equipment.",
    image: "/service3.jpg",
    delay: 0,
  },
  {
    title: "Mobile Mechanic Service",
    description:
      "On-site mechanical repairs and diagnostics at your location. Our certified mechanics come to you with fully equipped mobile workshops for convenient roadside assistance.",
    image: "/service2.jpg",
    delay: 200,
  },
  {
    title: "Vehicle Transportation & Towing",
    description:
      "Safe and secure vehicle transportation for non-running vehicles. We provide professional towing services with modern equipment ensuring your vehicle's protection during transport.",
    image: "/service1.jpg",
    delay: 400,
  },
  {
    title: "Emergency Breakdown Recovery",
    description:
      "24/7 emergency breakdown recovery service for all vehicle types. Our professional team responds quickly to get you back on the road safely with state-of-the-art recovery equipment.",
    image: "/service4.jpg",
    delay: 0,
  },
  {
    title: "Mobile Mechanic Service",
    description:
      "On-site mechanical repairs and diagnostics at your location. Our certified mechanics come to you with fully equipped mobile workshops for convenient roadside assistance.",
    image: "/service5.jpg",
    delay: 200,
  },
  {
    title: "Vehicle Transportation & Towing",
    description:
      "Safe and secure vehicle transportation for non-running vehicles. We provide professional towing services with modern equipment ensuring your vehicle's protection during transport.",
    image: "/service6.jpg",
    delay: 400,
  },
]

export function ServicesSection() {
  const [visibleCards, setVisibleCards] = useState<number[]>([])
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cardIndex = Number.parseInt(entry.target.getAttribute("data-index") || "0")
            setVisibleCards((prev) => [...prev, cardIndex])
          }
        })
      },
      { threshold: 0.1 },
    )

    const cards = sectionRef.current?.querySelectorAll("[data-index]")
    cards?.forEach((card) => observer.observe(card))

    return () => observer.disconnect()
  }, [])

  return (
    <section id="services" ref={sectionRef} className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-6 lg:px-12 xl:px-16">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="flex gap-1">
              <div className="w-2 h-2 bg-yellow-500 rotate-45"></div>
              <div className="w-2 h-2 bg-yellow-500 rotate-45"></div>
              <div className="w-2 h-2 bg-yellow-500 rotate-45"></div>
            </div>
            <span className="text-muted-foreground font-medium tracking-wider">Our Service</span>
            <div className="flex gap-1">
              <div className="w-2 h-2 bg-yellow-500 rotate-45"></div>
              <div className="w-2 h-2 bg-yellow-500 rotate-45"></div>
              <div className="w-2 h-2 bg-yellow-500 rotate-45"></div>
            </div>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-balance mb-6">
            We&#39;re Offering the Best
            <span className="block">Services to You</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {featuredServices.map((service, index) => {
            const isVisible = visibleCards.includes(index)

            return (
              <Card
                key={index}
                data-index={index}
                className={`group overflow-hidden hover:shadow-2xl transition-all duration-700 border-0 bg-white ${
                  isVisible ? "animate-slide-up opacity-100" : "opacity-0 translate-y-8"
                }`}
                style={{
                  animationDelay: `${service.delay}ms`,
                  transform: isVisible ? "translateY(0)" : "translateY(32px)",
                }}
              >
                <div className="relative overflow-hidden">
                  <Image
                  height={400}
                  width={600}
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                <CardContent className="p-8">
                  <h3 className="text-xl font-bold mb-4 text-balance group-hover:text-yellow-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-pretty leading-relaxed mb-6">{service.description}</p>

                  <Button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6 py-3 rounded-none relative overflow-hidden group/btn transition-all duration-300">
                    <span className="relative z-10 flex items-center gap-2">
                      Book Now
                      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                    </span>
                    <div className="absolute inset-0 bg-yellow-600 transform translate-x-full group-hover/btn:translate-x-0 transition-transform duration-300"></div>
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
