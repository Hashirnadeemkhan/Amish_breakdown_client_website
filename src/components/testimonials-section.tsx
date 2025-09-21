"use client"

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Image from 'next/image';

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
    rating: 5
  },
  {
    id: 2,
    name: "Michael Chen",
    text: "Outstanding service quality and professionalism. The team exceeded our expectations with their attention to detail and timely delivery.",
    image: "/customer2.jpg",
    rating: 5
  },
  {
    id: 3,
    name: "Emma Thompson",
    text: "Absolutely incredible experience from start to finish. The seamless process and exceptional customer care made all the difference.",
    image: "/customer3.jpg",
    rating: 5
  }
];

const TestimonialCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextTestimonial = React.useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      setIsAnimating(false);
    }, 300);
  }, [isAnimating]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating) {
        nextTestimonial();
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex, isAnimating, nextTestimonial]);

  const prevTestimonial = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
      setIsAnimating(false);
    }, 300);
  };

  const goToTestimonial = (index: number) => {
    if (isAnimating || index === currentIndex) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex(index);
      setIsAnimating(false);
    }, 300);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-6 h-6 ${
          i < rating ? 'fill-yellow-400 text-yellow-400' : 'fill-gray-200 text-gray-200'
        }`}
      />
    ));
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section   id="testimonial" className="relative min-h-screen bg-gradient-to-br from-background via-background to-secondary/30 py-20 overflow-hidden">
      <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-20">
        <div className="relative w-96 h-96">
          <div className="absolute top-0 right-0 w-0 h-0 border-l-[60px] border-l-transparent border-r-[60px] border-r-transparent border-b-[100px] border-b-accent animate-float" />
          <div className="absolute top-20 right-20 w-0 h-0 border-l-[40px] border-l-transparent border-r-[40px] border-r-transparent border-b-[70px] border-b-primary" style={{ animationDelay: '1s' }} />
          <div className="absolute top-40 right-40 w-0 h-0 border-l-[30px] border-l-transparent border-r-[30px] border-r-transparent border-b-[50px] border-b-accent animate-float" style={{ animationDelay: '2s' }} />
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16 animate-fade-in">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="flex gap-1">
              <ChevronLeft className="w-5 h-5 text-primary" />
              <ChevronLeft className="w-5 h-5 text-primary" />
              <ChevronLeft className="w-5 h-5 text-primary" />
            </div>
            <span className="text-primary font-medium text-lg">Our Testimonial</span>
            <div className="flex gap-1">
              <ChevronRight className="w-5 h-5 text-primary" />
              <ChevronRight className="w-5 h-5 text-primary" />
              <ChevronRight className="w-5 h-5 text-primary" />
            </div>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-accent mb-4">
            What Our Customers are Saying?
          </h2>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <Card className={`
            relative p-8 md:p-12 border-2 border-primary bg-card shadow-[var(--shadow-testimonial)]
            transition-all duration-500 ease-in-out
            ${isAnimating ? 'opacity-0 transform scale-95' : 'opacity-100 transform scale-100'}
          `}>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="relative">
                <div className="relative w-80 h-80 mx-auto">
                  {currentTestimonial.image && (
                    <Image
                      src={currentTestimonial.image}
                      height={320}
                      width={320}
                      alt={currentTestimonial.name}
                      className={`
                        w-full h-full object-cover rounded-2xl
                        transition-all duration-700 ease-out
                        ${!isAnimating ? 'animate-scale-in' : ''}
                      `}
                    />
                  )}
                  <div className="absolute -top-4 -right-4 w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-lg animate-bounce-in">
                    <Quote className="w-8 h-8 text-accent fill-current" />
                  </div>
                </div>
              </div>

              <div className={`
                space-y-6
                transition-all duration-600 ease-out delay-200
                ${!isAnimating ? 'animate-slide-in-right' : ''}
              `}>
                <div className="flex gap-1">
                  {renderStars(currentTestimonial.rating)}
                </div>
                <blockquote className="text-xl md:text-2xl leading-relaxed text-card-foreground font-medium">
                  &quot;{currentTestimonial.text}&quot;
                </blockquote>
                <div className="pt-4">
                  <h3 className="text-2xl font-bold text-accent">
                    {currentTestimonial.name}
                  </h3>
                </div>
              </div>
            </div>

            <div className="absolute right-6 top-1/2 -translate-y-1/2 flex flex-col gap-4">
              <Button
                variant="outline"
                size="icon"
                onClick={prevTestimonial}
                disabled={isAnimating}
                className="w-12 h-12 rounded-full border-primary hover:bg-primary hover:text-accent transition-all duration-300"
              >
                <ChevronLeft className="w-6 h-6" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={nextTestimonial}
                disabled={isAnimating}
                className="w-12 h-12 rounded-full border-primary hover:bg-primary hover:text-accent transition-all duration-300"
              >
                <ChevronRight className="w-6 h-6" />
              </Button>
            </div>
          </Card>

          <div className="relative mt-8 flex justify-center">
            <div className="relative">
              <div className="bg-yellow-500 px-8 py-4 rounded-r-full flex items-center gap-4 shadow-lg">
                {testimonials.map((testimonial, index) => (
                  <button
                    key={testimonial.id}
                    onClick={() => goToTestimonial(index)}
                    disabled={isAnimating}
                    className={`
                      w-16 h-16 rounded-full overflow-hidden border-4 transition-all duration-300
                      ${index === currentIndex 
                        ? 'border-accent scale-110 shadow-lg' 
                        : 'border-white/50 hover:border-white hover:scale-105'
                      }
                    `}
                  >
                    {testimonial.image && (
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        width={64}
                        height={64}
                        className="w-full h-full object-cover "
                      />
                    )}
                  </button>
                ))}
              </div>
              <div className="absolute right-0 top-0 h-full w-8  transform skew-x-12 translate-x-4"></div>
              <div className="absolute -right-3 top-0  h-full w-8 bg-yellow-500 transform skew-x-12 translate-x-6"></div>
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-3 mt-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToTestimonial(index)}
              disabled={isAnimating}
              className={`
                w-3 h-3 rounded-full transition-all duration-300
                ${index === currentIndex 
                  ? 'bg-yellow-500 scale-125' 
                  : 'bg-border hover:bg-primary/50'
                }
              `}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;