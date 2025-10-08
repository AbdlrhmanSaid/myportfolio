import { Button } from "@/components/ui/button";
import { TypeAnimation } from "react-type-animation";
import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";

export default function Hero() {
  const containerRef = useRef(null);
  const heroRef = useRef(null);
  const contentRef = useRef(null);
  const glowRefs = useRef([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        setMousePosition({ x, y });
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      if (container) {
        container.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, []);

  useEffect(() => {
    if (glowRefs.current.length > 0) {
      glowRefs.current.forEach((ref, index) => {
        if (ref) {
          const offsetX = [160, 92, 278];
          const offsetY = [160, 292, -22];
          const delay = index * 0.1;

          gsap.to(ref, {
            x: mousePosition.x - offsetX[index],
            y: mousePosition.y - offsetY[index],
            duration: 1.5,
            delay: delay,
            ease: "power2.out",
          });
        }
      });
    }
  }, [mousePosition]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        heroRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.5 }
      );

      gsap.fromTo(
        ".glow-static",
        { opacity: 0 },
        {
          opacity: 0.2,
          duration: 2,
          delay: 0.5,
          stagger: 0.5,
        }
      );

      if (contentRef.current) {
        const children = contentRef.current.children;

        gsap.fromTo(
          children,
          {
            opacity: 0,
            y: 20,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.1,
            delay: 0.3,
            ease: "power2.out",
          }
        );
      }

      gsap.fromTo(
        ".name-highlight",
        { scale: 0.9 },
        {
          scale: 1,
          duration: 0.8,
          delay: 0.5,
          ease: "elastic.out(1, 0.5)",
        }
      );

      gsap.fromTo(
        ".hero-buttons .btn-animate",
        { scale: 0.8, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.5,
          stagger: 0.1,
          delay: 1,
          ease: "back.out(1.7)",
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleButtonHover = (e) => {
    gsap.to(e.currentTarget, {
      scale: 1.05,
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

  const handleButtonTap = (e) => {
    gsap.to(e.currentTarget, {
      scale: 0.95,
      duration: 0.1,
      yoyo: true,
      repeat: 1,
    });
  };

  return (
    <section
      ref={containerRef}
      className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 py-20 h-screen relative overflow-hidden"
    >
      <div
        ref={heroRef}
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
      >
        <div
          ref={(el) => (glowRefs.current[0] = el)}
          className="absolute w-80 h-80 rounded-full bg-blue-400 blur-3xl opacity-30 dark:opacity-20"
        />
        <div
          ref={(el) => (glowRefs.current[1] = el)}
          className="absolute w-96 h-96 rounded-full bg-indigo-400 blur-3xl opacity-20 dark:opacity-15"
        />
        <div
          ref={(el) => (glowRefs.current[2] = el)}
          className="absolute w-64 h-64 rounded-full bg-purple-400 blur-3xl opacity-20 dark:opacity-15"
        />
      </div>

      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="glow-static absolute top-20 left-20 w-40 h-40 rounded-full bg-blue-400 blur-3xl opacity-20 dark:opacity-10"></div>
        <div className="glow-static absolute bottom-20 right-20 w-60 h-60 rounded-full bg-indigo-400 blur-3xl opacity-20 dark:opacity-10"></div>
        <div className="glow-static absolute top-1/2 right-1/4 w-32 h-32 rounded-full bg-purple-400 blur-3xl opacity-20 dark:opacity-10"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full relative">
          <div
            ref={contentRef}
            className="text-center m-auto absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full"
          >
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                Hi, I'm{" "}
                <span className="name-highlight text-blue-600 dark:text-blue-400 inline-block">
                  Abdelrhman Saeid
                </span>
              </h1>
            </div>

            <div className="mb-8">
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-2 max-w-3xl mx-auto">
                I'm a{" "}
                <TypeAnimation
                  sequence={[
                    "Front-End Developer",
                    2000,
                    "UI/UX Enthusiast",
                    2000,
                    "React Specialist",
                    2000,
                    "Web Designer",
                    2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  className="text-blue-600 dark:text-blue-400 font-medium"
                  repeat={Infinity}
                />
              </p>
              <p className="text-lg text-gray-500 dark:text-gray-400 max-w-3xl mx-auto">
                Crafting beautiful, responsive, and user-friendly web
                experiences
              </p>
            </div>

            <div className="hero-buttons flex flex-col sm:flex-row gap-4 justify-center">
              <div
                className="btn-animate"
                onMouseEnter={handleButtonHover}
                onMouseLeave={handleButtonHoverOut}
                onMouseDown={handleButtonTap}
              >
                <Button
                  onClick={() => scrollToSection("projects")}
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg relative overflow-hidden group"
                >
                  <span className="relative z-10">View My Work</span>
                  <div className="absolute inset-0 bg-blue-700 opacity-0 rounded-lg group-hover:opacity-100 transition-opacity duration-200" />
                </Button>
              </div>
              <div
                className="btn-animate"
                onMouseEnter={handleButtonHover}
                onMouseLeave={handleButtonHoverOut}
                onMouseDown={handleButtonTap}
              >
                <Button
                  onClick={() => scrollToSection("contact")}
                  variant="outline"
                  size="lg"
                  className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white dark:border-blue-400 dark:text-blue-400 shadow-lg relative overflow-hidden group"
                >
                  <span className="relative z-10">Get In Touch</span>
                  <div className="absolute inset-0 bg-blue-600 opacity-0 rounded-lg group-hover:opacity-100 transition-opacity duration-200" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
