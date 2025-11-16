import { Button } from "@/components/ui/button";
import { TypeAnimation } from "react-type-animation";
import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { Download, Sparkles } from "lucide-react";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiRedux,
  SiReactrouter,
  SiTailwindcss,
  SiBootstrap,
  SiSass,
  SiMongodb,
  SiAxios,
  SiReactquery,
  SiCloudinary,
  SiVite,
  SiGit,
  SiGithub,
  SiFigma,
  SiAdobexd,
  SiAuth0,
} from "react-icons/si";

export default function Hero() {
  const containerRef = useRef(null);
  const heroRef = useRef(null);
  const contentRef = useRef(null);
  const glowRefs = useRef([]);
  const logoRefs = useRef([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Technology icons from skills
  const technologies = [
    { Icon: SiHtml5, color: "#E34F26", name: "HTML5" },
    { Icon: SiCss3, color: "#1572B6", name: "CSS3" },
    { Icon: SiJavascript, color: "#F7DF1E", name: "JavaScript" },
    { Icon: SiTypescript, color: "#3178C6", name: "TypeScript" },
    { Icon: SiReact, color: "#61DAFB", name: "React" },
    { Icon: SiNextdotjs, color: "#FFFFFF", name: "Next.js" },
    { Icon: SiRedux, color: "#764ABC", name: "Redux" },
    { Icon: SiReactrouter, color: "#CA4245", name: "React Router" },
    { Icon: SiTailwindcss, color: "#06B6D4", name: "Tailwind CSS" },
    { Icon: SiBootstrap, color: "#7952B3", name: "Bootstrap" },
    { Icon: SiSass, color: "#CC6699", name: "Sass" },
    { Icon: SiMongodb, color: "#47A248", name: "MongoDB" },
    { Icon: SiAxios, color: "#5A29E4", name: "Axios" },
    { Icon: SiReactquery, color: "#FF4154", name: "React Query" },
    { Icon: SiCloudinary, color: "#3448C5", name: "Cloudinary" },
    { Icon: SiVite, color: "#646CFF", name: "Vite" },
    { Icon: SiGit, color: "#F05032", name: "Git" },
    { Icon: SiGithub, color: "#FFFFFF", name: "GitHub" },
    { Icon: SiFigma, color: "#F24E1E", name: "Figma" },
    { Icon: SiAdobexd, color: "#FF61F6", name: "Adobe XD" },
    { Icon: SiAuth0, color: "#EB5424", name: "Auth0" },
  ];

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
      // Hero fade in
      gsap.fromTo(
        heroRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.8 }
      );

      // Glows
      gsap.fromTo(
        ".glow-static",
        { opacity: 0 },
        { opacity: 0.2, duration: 2, delay: 0.5, stagger: 0.3 }
      );

      // === أنيميشن كلاسيكي - حركة دائرية سلسة ===
      logoRefs.current.forEach((ref, index) => {
        if (!ref) return;

        const tech = technologies[index];

        // توزيع الشعارات في دوائر متعددة حول المركز
        const circleIndex = Math.floor(index / 6); // كل 6 شعارات في دائرة
        const positionInCircle = index % 6;

        // نصف القطر لكل دائرة
        const radius = 30 + circleIndex * 18; // 30%, 48%, 66%...
        // زاوية موزعة بشكل متساوي
        const initialAngle = positionInCircle * 60 + circleIndex * 15; // 60 درجة بين كل شعار
        const angleRad = (initialAngle * Math.PI) / 180;

        // حساب الموضع الأولي
        const x = 50 + radius * Math.cos(angleRad);
        const y = 50 + radius * Math.sin(angleRad);

        // إعداد الموقع الأولي
        gsap.set(ref, {
          xPercent: x - 50,
          yPercent: y - 50,
          rotation: 0,
          opacity: 0,
          scale: 0.8,
        });

        // أنيميشن الدخول - fade in مع scale
        gsap.to(ref, {
          opacity: 0.5,
          scale: 1,
          duration: 0.8,
          delay: index * 0.04,
          ease: "power2.out",
        });

        // أنيميشن كلاسيكي - دوران دائري سلس
        const rotationDuration = 30 + circleIndex * 10; // كل دائرة تدور بسرعة مختلفة
        const rotationDirection = circleIndex % 2 === 0 ? 1 : -1; // اتجاهات مختلفة

        // إنشاء حركة دائرية باستخدام timeline
        const orbit = gsap.timeline({ repeat: -1 });

        // تقسيم الدائرة إلى 16 نقطة للحركة السلسة جداً
        const steps = 16;
        for (let i = 0; i <= steps; i++) {
          const angle = initialAngle + (i * 360 * rotationDirection) / steps;
          const rad = (angle * Math.PI) / 180;
          const newX = 50 + radius * Math.cos(rad);
          const newY = 50 + radius * Math.sin(rad);

          orbit.to(ref, {
            xPercent: newX - 50,
            yPercent: newY - 50,
            duration: rotationDuration / steps,
            ease: "none",
          });
        }
      });

      // --- محتوى النص ---
      if (contentRef.current) {
        gsap.fromTo(
          contentRef.current.children,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.15,
            delay: 0.4,
            ease: "power3.out",
          }
        );
      }

      // تأثيرات أخرى (الاسم، الأزرار، الـ sparkles)
      gsap.fromTo(
        ".name-highlight",
        { scale: 0.8, opacity: 0.7 },
        {
          scale: 1,
          opacity: 1,
          duration: 1,
          delay: 0.8,
          ease: "elastic.out(1.2, 0.5)",
        }
      );
      gsap.fromTo(
        ".hero-buttons .btn-animate",
        { scale: 0.8, opacity: 0, y: 20 },
        {
          scale: 1,
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.15,
          delay: 1.2,
          ease: "back.out(1.7)",
        }
      );
      gsap.fromTo(
        ".sparkle-icon",
        { scale: 0, rotation: -180 },
        {
          scale: 1,
          rotation: 0,
          duration: 1,
          delay: 1.5,
          ease: "back.out(1.7)",
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []); // تشغيل مرة واحدة فقط عند التحميل

  const handleButtonHover = (e) => {
    gsap.to(e.currentTarget, {
      scale: 1.08,
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
      id="home"
      className="bg-gradient-to-br from-black via-gray-900 to-black py-20 h-screen relative overflow-hidden"
    >
      <div
        ref={heroRef}
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
      >
        <div
          ref={(el) => (glowRefs.current[0] = el)}
          className="absolute w-80 h-80 rounded-full bg-blue-500 blur-3xl opacity-15"
        />
        <div
          ref={(el) => (glowRefs.current[1] = el)}
          className="absolute w-96 h-96 rounded-full bg-indigo-500 blur-3xl opacity-15"
        />
        <div
          ref={(el) => (glowRefs.current[2] = el)}
          className="absolute w-64 h-64 rounded-full bg-purple-500 blur-3xl opacity-15"
        />
      </div>

      {/* Animated Technology Logos Background */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        {technologies.map((tech, index) => {
          const Icon = tech.Icon;

          return (
            <div
              key={index}
              ref={(el) => (logoRefs.current[index] = el)}
              className="absolute transition-all duration-300 hover:opacity-100 hover:scale-125 cursor-pointer w-full h-full flex items-center justify-center"
              style={{
                color: tech.color,
                filter: `drop-shadow(0 0 15px ${tech.color}60)`,
              }}
            >
              <Icon className="w-10 h-10 md:w-14 md:h-14 lg:w-16 lg:h-16" />
            </div>
          );
        })}
      </div>

      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="glow-static absolute top-20 left-20 w-40 h-40 rounded-full bg-blue-500 blur-3xl opacity-10"></div>
        <div className="glow-static absolute bottom-20 right-20 w-60 h-60 rounded-full bg-indigo-500 blur-3xl opacity-10"></div>
        <div className="glow-static absolute top-1/2 right-1/4 w-32 h-32 rounded-full bg-purple-500 blur-3xl opacity-10"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full relative">
          <div
            ref={contentRef}
            className="text-center m-auto absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full"
          >
            <div className="flex justify-center items-center mb-2">
              <Sparkles className="sparkle-icon text-yellow-400 w-6 h-6 mr-2" />
              <span className="text-sm text-yellow-400 font-medium tracking-wider">
                WELCOME TO MY PORTFOLIO
              </span>
            </div>

            <div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
                Hi, I'm{" "}
                <span className="name-highlight bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent inline-block">
                  Abdelrhman Saeid
                </span>
              </h1>
            </div>

            <div className="mb-10">
              <p className="text-xl md:text-3xl text-gray-300 mb-3 max-w-3xl mx-auto font-light">
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
                  className="font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent"
                  repeat={Infinity}
                />
              </p>
              <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                Crafting beautiful, responsive, and user-friendly web
                experiences with modern technologies
              </p>
            </div>

            <div className="hero-buttons flex flex-col sm:flex-row gap-5 justify-center items-center">
              <div
                className="btn-animate"
                onMouseEnter={handleButtonHover}
                onMouseLeave={handleButtonHoverOut}
                onMouseDown={handleButtonTap}
              >
                <Button
                  onClick={() => scrollToSection("projects")}
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 relative overflow-hidden group transition-all duration-300 px-8 py-3 text-lg font-medium"
                >
                  <span className="relative z-10 flex items-center">
                    View My Work
                    <svg
                      className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-indigo-700 opacity-0 rounded-lg group-hover:opacity-100 transition-opacity duration-300" />
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
                  size="lg"
                  className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 relative overflow-hidden group transition-all duration-300 px-8 py-3 text-lg font-medium"
                >
                  <span className="relative z-10">Get In Touch</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-700 to-purple-700 opacity-0 rounded-lg group-hover:opacity-100 transition-opacity duration-300" />
                </Button>
              </div>
              <div
                className="btn-animate"
                onMouseEnter={handleButtonHover}
                onMouseLeave={handleButtonHoverOut}
                onMouseDown={handleButtonTap}
              >
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-black shadow-lg shadow-blue-400/20 hover:shadow-blue-400/40 relative overflow-hidden group transition-all duration-300 px-8 py-3 text-lg font-medium"
                >
                  <a
                    href="/AbdelrhmanSaeid-Frontend.pdf"
                    download="AbdelrhmanSaeid-Frontend.pdf"
                    className="flex items-center"
                  >
                    <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                    <span className="relative z-10">Download CV</span>
                    <div className="absolute inset-0 bg-blue-400 opacity-0 rounded-lg group-hover:opacity-100 transition-opacity duration-300" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
