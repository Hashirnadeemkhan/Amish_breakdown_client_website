import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"

import TestimonialCarousel from "@/components/testimonials-section"
// import { ContactSection } from "@/components/contact-section"
import  {Footer}  from "@/components/footer"
import { AboutSection } from "@/components/about-section"
import LuxurySection from "@/components/luxury-section"
import WhyChooseUsSection from "@/components/why-choose-us-section"
import ContactSection from "@/components/contact-section"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <LuxurySection/>
      <WhyChooseUsSection/>
       <TestimonialCarousel />
       <ContactSection/>
      <Footer />
    </main>
  )
}
