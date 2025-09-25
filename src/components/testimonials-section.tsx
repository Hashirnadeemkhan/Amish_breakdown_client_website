"use client";

import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface Testimonial {
  id: number;
  name: string;
  text: string;
  image: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    text: "Sports event drop-off was smooth and stylish. No stress about parking or traffic. Will use them again for all upcoming events in London!",
    image: "/customer1.jpg",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Chen",
    text: "Outstanding service quality and professionalism. The team exceeded our expectations with their attention to detail and timely delivery.",
    image: "/customer2.jpg",
    rating: 5,
  },
  {
    id: 3,
    name: "Emma Thompson",
    text: "Absolutely incredible experience from start to finish. The seamless process and exceptional customer care made all the difference.",
    image: "/customer3.jpg",
    rating: 5,
  },
];

const TestimonialCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
  };

  // Auto slide
  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, []);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-6 h-6 ${
          i < rating ? "fill-yellow-400 text-yellow-400" : "fill-gray-200 text-gray-200"
        }`}
      />
    ));
  };

  return (
    <section
      id="testimonial"
      className="relative min-h-screen bg-gradient-to-br from-background via-background to-secondary/30 py-20 overflow-hidden"
    >
      <div className="container mx-auto max-w-6xl px-4">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-black">
            What Our Customers are Saying?
          </h2>
        </div>

        {/* Testimonial Card with Framer Motion */}
        <div className="relative max-w-6xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={testimonials[currentIndex].id}
              initial={{ opacity: 0, scale: 0.9, x: 100 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.9, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="relative p-8 md:p-12 border-2 border-primary bg-card shadow-lg">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  {/* Left: Image */}
                  <div className="relative w-80 h-80 mx-auto">
                    <Image
                      src={testimonials[currentIndex].image}
                      alt={testimonials[currentIndex].name}
                      width={320}
                      height={320}
                      className="w-full h-full object-cover rounded-2xl"
                    />
                    <div className="absolute -top-4 -right-4 w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-lg">
                      <Quote className="w-8 h-8 text-accent fill-current" />
                    </div>
                  </div>

                  {/* Right: Text */}
                  <div className="space-y-6">
                    <div className="flex gap-1">{renderStars(testimonials[currentIndex].rating)}</div>
                    <blockquote className="text-xl md:text-2xl leading-relaxed text-card-foreground font-medium">
                      &quot;{testimonials[currentIndex].text}&quot;
                    </blockquote>
                    <div className="pt-4">
                      <h3 className="text-2xl font-bold text-accent">
                        {testimonials[currentIndex].name}
                      </h3>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </AnimatePresence>

          {/* Prev / Next Buttons */}
          <div className="absolute right-6 top-1/2 -translate-y-1/2 flex flex-col gap-4">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full border-primary hover:bg-primary hover:text-accent transition-all duration-300"
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full border-primary hover:bg-primary hover:text-accent transition-all duration-300"
            >
              <ChevronRight className="w-6 h-6" />
            </Button>
          </div>
        </div>

        {/* Thumbnails Row */}
        <div className="relative mt-8 flex justify-center">
          <div className="relative">
            <div className="bg-yellow-500 px-8 py-4 rounded-r-full flex items-center gap-4 shadow-lg">
              {testimonials.map((testimonial, index) => (
                <button
                  key={testimonial.id}
                  onClick={() => goToTestimonial(index)}
                  className={`w-16 h-16 rounded-full overflow-hidden border-4 transition-all duration-300 ${
                    index === currentIndex
                      ? "border-accent scale-110 shadow-lg"
                      : "border-white/50 hover:border-white hover:scale-105"
                  }`}
                >
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={64}
                    height={64}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
            {/* Yellow Tail Effect */}
            <div className="absolute right-0 top-0 h-full w-8 transform skew-x-12 translate-x-4"></div>
            <div className="absolute -right-3 top-0 h-full w-8 bg-yellow-500 transform skew-x-12 translate-x-6"></div>
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-3 mt-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-yellow-500 scale-125"
                  : "bg-border hover:bg-primary/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
