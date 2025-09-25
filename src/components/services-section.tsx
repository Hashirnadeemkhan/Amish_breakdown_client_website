"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

const featuredServices = [
  {
    title: "Car Breakdown Recovery",
    description:
      "Fast, reliable, and 24/7 car breakdown recovery across the UK. Amish Breakdown Recovery ensures your vehicle is safely transported with modern recovery trucks and professional staff.",
    image: "/service3.jpg",
    delay: 0,
  },
  {
    title: "Jump Start",
    description:
      "Flat battery? Our emergency jump start service will quickly revive your vehicle on the spot, getting you back on the road without delays.",
    image: "/jump.png",
    delay: 0,
  },
  {
    title: "Mobile Mechanic Service",
    description:
      "Certified mobile mechanics available at your location for minor repairs, diagnostics, and quick fixes — no need to tow, we come to you.",
    image: "/mobile.png",
    delay: 200,
  },
  {
    title: "Vehicle Transportation",
    description:
      "Safe and secure transportation of your car, van, or light commercial vehicle. We handle dealership transfers, auction pickups, and long-distance transport with care.",
    image: "/vechile.png",
    delay: 400,
  },
  {
    title: "Fuel Delivery Service",
    description:
      "Run out of fuel? Amish Breakdown Recovery provides fast roadside fuel delivery to get you moving again without stress.",
    image: "/fuel.jpg",
    delay: 0,
  },
  {
    title: "Towing Services",
    description:
      "Professional towing for broken-down, accident-damaged, or non-running vehicles. Available 24/7 with rapid response times.",
    image: "/hero.png",
    delay: 200,
  },
  {
    title: "Auction Collection",
    description:
      "Reliable vehicle collection directly from auctions. We ensure secure and hassle-free transport of your purchased vehicles to your doorstep.",
    image: "/service4.jpg",
    delay: 400,
  },
  {
    title: "Dealership Collection",
    description:
      "We provide safe and timely collection of vehicles from dealerships. Whether new or used, we transport cars with the highest care and professionalism.",
    image: "/service6.jpg",
    delay: 400,
  },
{
  title: "Tire Change Assistance",
  description:
    "Got a flat tire? Amish Breakdown Recovery provides quick and reliable roadside tire replacement or assistance, ensuring you’re back on the road safely in no time.",
  image: "/tyre.jpg",
  delay: 400,
}

               
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

                 <Button
  asChild
  className="bg-yellow-500 text-black hover:text-white font-semibold px-6 py-3 rounded-none relative overflow-hidden group/btn transition-all duration-300"
>
  <a href="tel:07407647395">
    <span className="relative z-10 flex items-center gap-2">
      Book Now
      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
    </span>
    <div className="absolute inset-0 bg-black hover:text-white transform translate-x-full group-hover/btn:translate-x-0 transition-transform duration-300"></div>
  </a>
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
