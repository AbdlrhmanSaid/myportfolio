"use client";

import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import TypeAnimation from "@/components/Typewriter";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Testimonials() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const lineRef = useRef(null);
  const carouselRef = useRef(null);
  const cardsRef = useRef([]);
  const decorativeRefs = useRef([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Eng Yasser",
      role: "Project Manager",
      company: "--",
      content:
        "Abdelrhman delivered an exceptional e-commerce platform that exceeded our expectations. His attention to detail and technical expertise made the development process smooth and efficient.",
      rating: 5,
      avatar: "👨‍💼",
    },
    {
      name: "MR Elfiky",
      role: "Business Owner",
      company: "--",
      content:
        "Working with Abdelrhman was a pleasure. He transformed our Figma designs into a pixel-perfect website. His communication skills and professionalism are outstanding.",
      rating: 5,
      avatar: "👔",
    },
    {
      name: "MR Amr",
      role: "Marketing Director",
      company: "--",
      content:
        "The website Abdelrhman built for us has significantly improved our online presence. The modern design and smooth user experience have increased our conversion rates.",
      rating: 5,
      avatar: "📊",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        sectionRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.5 },
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
            },
          );
        }
      });

      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.5 },
      );

      gsap.fromTo(
        lineRef.current,
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 0.8,
          ease: "back.out(1.7)",
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Carousel Animation
  useEffect(() => {
    if (carouselRef.current) {
      const cards = carouselRef.current.children;

      // Reset all cards
      gsap.set(cards, {
        opacity: 0,
        scale: 0.7,
        x: 0,
        rotationY: 0,
        zIndex: 0,
      });

      // Animate cards based on position
      Array.from(cards).forEach((card, index) => {
        const position = index - currentIndex;
        const absPosition = Math.abs(position);

        if (absPosition === 0) {
          // Center card - Active
          gsap.to(card, {
            opacity: 1,
            scale: 1,
            x: 0,
            rotationY: 0,
            zIndex: 10,
            duration: 0.7,
            ease: "power3.out",
          });
        } else if (absPosition === 1) {
          // Adjacent cards
          gsap.to(card, {
            opacity: 0.5,
            scale: 0.8,
            x: position > 0 ? "70%" : "-70%",
            rotationY: position > 0 ? -30 : 30,
            zIndex: 5,
            duration: 0.7,
            ease: "power3.out",
          });
        } else {
          // Hidden cards
          gsap.to(card, {
            opacity: 0,
            scale: 0.6,
            x: position > 0 ? "140%" : "-140%",
            rotationY: position > 0 ? -50 : 50,
            zIndex: 0,
            duration: 0.7,
            ease: "power3.out",
          });
        }
      });
    }
  }, [currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < testimonials.length - 1 ? prev + 1 : 0));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : testimonials.length - 1));
  };

  // Auto-play
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 6000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const handleButtonHover = (e) => {
    gsap.to(e.currentTarget, {
      scale: 1.1,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleButtonHoverOut = (e) => {
    gsap.to(e.currentTarget, {
      scale: 1,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-black relative overflow-hidden"
      id="testimonials"
    >
      <div
        ref={(el) => (decorativeRefs.current[0] = el)}
        className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-blue-500/20 blur-3xl opacity-30"
      />
      <div
        ref={(el) => (decorativeRefs.current[1] = el)}
        className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-indigo-500/20 blur-3xl opacity-30"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div ref={titleRef} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
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
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Don't just take my word for it. Here's what clients and colleagues
            have to say about working with me.
          </p>
        </div>

        {/* 3D Carousel */}
        <div className="relative">
          <div
            ref={carouselRef}
            className="relative h-[500px] flex items-center justify-center"
            style={{ perspective: "2000px" }}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                ref={(el) => (cardsRef.current[index] = el)}
                className="absolute w-full max-w-2xl"
                style={{ transformStyle: "preserve-3d" }}
              >
                <Card className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border border-gray-700 hover:border-blue-500/50 transition-all duration-300 shadow-2xl hover:shadow-blue-500/20">
                  <CardContent className="p-8 md:p-10">
                    {/* Quote Icon */}
                    <div className="flex justify-center mb-6">
                      <div className="bg-blue-500/10 p-4 rounded-full">
                        <Quote className="w-10 h-10 text-blue-400" />
                      </div>
                    </div>

                    {/* Avatar */}
                    <div className="flex justify-center mb-6">
                      <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-4xl shadow-lg">
                        {testimonial.avatar}
                      </div>
                    </div>

                    {/* Content */}
                    <p className="text-gray-300 text-lg md:text-xl mb-6 leading-relaxed text-center italic">
                      "{testimonial.content}"
                    </p>

                    {/* Rating */}
                    <div className="flex items-center justify-center mb-6 gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>

                    {/* Author Info */}
                    <div className="text-center">
                      <h4 className="font-bold text-xl text-white mb-1">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-blue-400 font-medium">
                        {testimonial.role}
                      </p>
                      <p className="text-xs text-gray-500 mt-1">
                        {testimonial.company}
                      </p>
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute top-4 left-4 w-16 h-16 border-t-2 border-l-2 border-blue-500/30 rounded-tl-lg" />
                    <div className="absolute bottom-4 right-4 w-16 h-16 border-b-2 border-r-2 border-blue-500/30 rounded-br-lg" />
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center gap-6 mt-8 relative z-10">
            <Button
              onClick={handlePrev}
              className="bg-blue-600 hover:bg-blue-700 text-white rounded-full w-14 h-14 p-0 shadow-lg hover:shadow-blue-500/50 transition-all"
              onMouseEnter={handleButtonHover}
              onMouseLeave={handleButtonHoverOut}
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>

            {/* Indicators */}
            <div className="flex gap-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-blue-600 w-10 shadow-lg shadow-blue-500/50"
                      : "bg-gray-600 w-3 hover:bg-gray-500"
                  }`}
                />
              ))}
            </div>

            <Button
              onClick={handleNext}
              className="bg-blue-600 hover:bg-blue-700 text-white rounded-full w-14 h-14 p-0 shadow-lg hover:shadow-blue-500/50 transition-all"
              onMouseEnter={handleButtonHover}
              onMouseLeave={handleButtonHoverOut}
            >
              <ChevronRight className="w-6 h-6" />
            </Button>
          </div>

          {/* Counter */}
          <div className="text-center mt-6">
            <p className="text-gray-400 text-sm">
              Testimonial {currentIndex + 1} of {testimonials.length}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
