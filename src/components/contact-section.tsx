"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { useForm, ControllerRenderProps } from "react-hook-form";
import Image from "next/image";

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<ContactFormData>({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      console.log("Form submitted:", data);
      setIsSubmitting(false);
      form.reset();
    }, 2000);
  };

  return (
    <section className="min-h-screen bg-background relative overflow-hidden">
      {/* Geometric Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary transform rotate-45 animate-float"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-accent transform -rotate-12 animate-float delay-1000"></div>
        <div className="absolute top-1/2 right-10 w-16 h-16 bg-primary transform rotate-12 animate-float delay-500"></div>
      </div>

      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Side - Image with Geometric Overlay */}
          <div className="relative animate-slide-in-right">
            <div className="relative overflow-hidden rounded-3xl shadow-elegant">
              <Image
                height={600}
                width={600}
                src="/contact.webp"
                alt="Professional business consultation"
                className="w-full h-[600px] object-cover"
              />

              {/* Geometric Overlay Elements */}
              <div className="absolute inset-0">
                {/* Yellow Arrow Shape */}
                <div className="absolute top-16 left-12 w-64 h-32">
                  <div className="relative w-full h-full">
                    <div className="absolute top-0 left-0 w-48 h-full bg-primary transform skew-x-12 animate-scale-in delay-300"></div>
                    <div className="absolute top-0 right-0 w-0 h-0 border-t-16 border-b-16 border-l-16 border-t-transparent border-b-transparent border-l-primary animate-bounce-in delay-700"></div>
                  </div>
                </div>

                {/* Black Geometric Shapes */}
                <div className="absolute bottom-20 left-8 w-24 h-40 bg-accent transform -skew-x-12 animate-fade-in delay-500"></div>
                <div className="absolute top-32 right-12 w-20 h-20 bg-accent transform rotate-45 animate-scale-in delay-900"></div>

                {/* Border Frame */}
                <div className="absolute top-8 right-8 w-32 h-24 border-4 border-primary animate-fade-in delay-1100"></div>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="space-y-8 animate-fade-in delay-200">
            {/* Header */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-primary font-semibold animate-slide-in-right delay-300">
                <span className="text-2xl">◄◄◄</span>
                <span className="text-lg">Contact With Us</span>
                <span className="text-2xl">►►►</span>
              </div>
              <h2 className="lg:text-5xl text-4xl font-bold text-foreground leading-tight animate-bounce-in delay-500">
                Feel Free to Write us
              </h2>
            </div>

            {/* Contact Form */}
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6 animate-scale-in delay-700"
              >
                {/* Name and Email Row */}
                <div className="grid md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    rules={{ required: "Name is required" }}
                    render={({ field }) => (
                      <FormItem className="group">
                        <FormControl>
                          <Input
                            placeholder="Your Name"
                            {...field}
                            className="h-14 text-lg border-2 border-border focus:border-primary transition-all duration-300 hover:border-primary/50"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    rules={{
                      required: "Email is required",
                      pattern: {
                        value: /^\S+@\S+$/i,
                        message: "Invalid email address",
                      },
                    }}
                    render={({ field }) => (
                      <FormItem className="group">
                        <FormControl>
                          <Input
                            placeholder="Email Address"
                            type="email"
                            {...field}
                            className="h-14 text-lg border-2 border-border focus:border-primary transition-all duration-300 hover:border-primary/50"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Phone and Subject Row */}
                <div className="grid md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }: { field: ControllerRenderProps<ContactFormData, "phone"> }) => (
                      <FormItem className="group">
                        <FormControl>
                          <Input
                            placeholder="Phone"
                            type="tel"
                            {...field}
                            className="h-14 text-lg border-2 border-border focus:border-primary transition-all duration-300 hover:border-primary/50"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="subject"
                    rules={{ required: "Subject is required" }}
                    render={({ field }) => (
                      <FormItem className="group">
                        <FormControl>
                          <Input
                            placeholder="Subject"
                            {...field}
                            className="h-14 text-lg border-2 border-border focus:border-primary transition-all duration-300 hover:border-primary/50"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Message Field */}
                <FormField
                  control={form.control}
                  name="message"
                  rules={{ required: "Message is required" }}
                  render={({ field }) => (
                    <FormItem className="group">
                      <FormControl>
                        <Textarea
                          placeholder="Write a Message"
                          {...field}
                          rows={6}
                          className="text-lg border-2 border-border focus:border-primary transition-all duration-300 hover:border-primary/50 resize-none"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="h-14 px-12 text-lg font-semibold bg-primary hover:bg-primary/90 text-primary-foreground transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/25 disabled:opacity-50 disabled:cursor-not-allowed animate-bounce-in delay-1000"
                >
                  {isSubmitting ? (
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin"></div>
                      Sending...
                    </div>
                  ) : (
                    "Send A Message"
                  )}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
