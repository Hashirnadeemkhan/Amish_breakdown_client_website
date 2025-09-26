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
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";

// ✅ Zod schema for validation
const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  subject: z.string().min(2, "Subject is required"),
  message: z.string().min(5, "Message must be at least 5 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"success" | "error" | null>(null);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
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
    setStatus(null);

    try {
      // Simulate API call
      await new Promise((resolve, reject) => {
        setTimeout(() => {
          if (Math.random() > 0.3) resolve(true); // 70% success
          else reject(new Error("Something went wrong"));
        }, 1500);
      });

      console.log("Form submitted:", data);
      setStatus("success");
      form.reset();
    } catch (err) {
      console.error(err);
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="min-h-screen bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Side - Image */}
          <div className="relative">
            <Image
              height={600}
              width={600}
              src="/contact.webp"
              alt="Professional business consultation"
              className="w-full h-[600px] object-cover rounded-3xl shadow-lg"
            />
          </div>

          {/* Right Side - Contact Form */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-primary font-semibold">
                <span className="text-2xl">◄◄◄</span>
                <span className="text-lg">Contact With Us</span>
                <span className="text-2xl">►►►</span>
              </div>
              <h2 className="lg:text-5xl text-4xl font-bold text-foreground leading-tight">
                Feel Free to Write us
              </h2>
            </div>

            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                {/* Name and Email Row */}
                <div className="grid md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            placeholder="Your Name"
                            {...field}
                            className="h-14 text-lg border-2 border-border focus:border-primary transition-all duration-300"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            placeholder="Email Address"
                            type="email"
                            {...field}
                            className="h-14 text-lg border-2 border-border focus:border-primary transition-all duration-300"
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
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            placeholder="Phone"
                            type="tel"
                            {...field}
                            className="h-14 text-lg border-2 border-border focus:border-primary transition-all duration-300"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            placeholder="Subject"
                            {...field}
                            className="h-14 text-lg border-2 border-border focus:border-primary transition-all duration-300"
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
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Textarea
                          placeholder="Write a Message"
                          {...field}
                          rows={6}
                          className="text-lg border-2 border-border focus:border-primary transition-all duration-300 resize-none"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Status Message */}
                {status === "success" && (
                  <p className="text-green-600 font-medium">
                    ✅ Message sent successfully!
                  </p>
                )}
                {status === "error" && (
                  <p className="text-red-600 font-medium">
                    ❌ Failed to send message. Please try again.
                  </p>
                )}

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="h-14 px-12 text-lg font-semibold bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-300"
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
