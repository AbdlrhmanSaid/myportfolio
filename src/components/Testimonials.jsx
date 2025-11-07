"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { TypeAnimation } from "react-type-animation";
import { Quote, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function Testimonials() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const lineRef = useRef(null);
  const cardsRef = useRef([]);
  const decorativeRefs = useRef([]);

  const testimonials = [
    {
      name: "Eng Yasser",
      role: "Project Manager",
      company: "--",
      content:
        "Abdelrhman delivered an exceptional e-commerce platform that exceeded our expectations. His attention to detail and technical expertise made the development process smooth and efficient.",
      rating: 5,
    },
    {
      name: "MR Elfiky",
      role: "Business Owner",
      company: "--",
      content:
        "Working with Abdelrhman was a pleasure. He transformed our Figma designs into a pixel-perfect website. His communication skills and professionalism are outstanding.",
      rating: 5,
    },
    {
      name: "MR Amr",
      role: "Marketing Director",
      company: "--",
      content:
        "The website Abdelrhman built for us has significantly improved our online presence. The modern design and smooth user experience have increased our conversion rates.",
      rating: 5,
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        sectionRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.5 }
      );

      decorativeRefs.current.forEach((ref, index) => {
        if (ref) {
          gsap.fromTo(
            ref,
            { scale: 0.8 },
            {
              scale: 1,
              duration: 2 + index * 0.5,
              repeat: -1,
              yoyo: true,
              ease: "power1.inOut",
            }
          );
        }
      });

      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.5 }
      );

      gsap.fromTo(
        lineRef.current,
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 0.8,
          ease: "back.out(1.7)",
        }
      );

      if (cardsRef.current.length > 0) {
        gsap.fromTo(
          cardsRef.current,
          {
            opacity: 0,
            y: 30,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.2,
            delay: 0.3,
            ease: "back.out(1.7)",
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden"
      id="testimonials"
    >
      <div
        ref={(el) => (decorativeRefs.current[0] = el)}
        className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-blue-100 dark:bg-blue-900/30 blur-3xl opacity-50"
      />
      <div
        ref={(el) => (decorativeRefs.current[1] = el)}
        className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-indigo-100 dark:bg-indigo-900/30 blur-3xl opacity-50"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div ref={titleRef} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            <TypeAnimation
              sequence={[
                "Client Testimonials",
                1000,
                "What Clients Say",
                1000,
                "Reviews & Feedback",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h2>
          <div
            ref={lineRef}
            className="w-20 h-1 bg-blue-600 mx-auto transform origin-left"
          />
          <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
            Don't just take my word for it. Here's what clients and colleagues
            have to say about working with me.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300"
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Quote className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {testimonial.role} at {testimonial.company}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
