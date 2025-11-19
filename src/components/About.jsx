"use client";

import { Badge } from "@/components/ui/badge";
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
  SiCodepen,
  SiAuth0,
  SiNodemon,
} from "react-icons/si";
import TypeAnimation from "@/components/Typewriter";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";

export default function About() {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const skillsRef = useRef([]);
  const titleRef = useRef(null);
  const lineRef = useRef(null);
  const cardRef = useRef(null);
  const textRef = useRef(null);
  const decorativeRefs = useRef([]);

  const skills = [
    {
      name: "HTML",
      icon: SiHtml5,
      color: "text-orange-600",
      level: "Expert",
      years: "4+",
    },
    {
      name: "CSS",
      icon: SiCss3,
      color: "text-blue-600",
      level: "Expert",
      years: "4+",
    },
    {
      name: "JavaScript",
      icon: SiJavascript,
      color: "text-yellow-400",
      level: "Expert",
      years: "4+",
    },
    {
      name: "TypeScript",
      icon: SiTypescript,
      color: "text-blue-700",
      level: "Advanced",
      years: "2+",
    },
    {
      name: "React.js",
      icon: SiReact,
      color: "text-cyan-500",
      level: "Expert",
      years: "3+",
    },
    {
      name: "Next.js",
      icon: SiNextdotjs,
      color: "text-white",
      level: "Advanced",
      years: "2+",
    },
    {
      name: "Redux",
      icon: SiRedux,
      color: "text-purple-600",
      level: "Advanced",
      years: "2+",
    },
    {
      name: "React Router",
      icon: SiReactrouter,
      color: "text-red-600",
      level: "Expert",
      years: "3+",
    },
    {
      name: "Tailwind CSS",
      icon: SiTailwindcss,
      color: "text-teal-500",
      level: "Expert",
      years: "3+",
    },
    {
      name: "Shadcn",
      icon: SiCodepen,
      color: "text-white",
      level: "Advanced",
      years: "1+",
    },
    {
      name: "Bootstrap",
      icon: SiBootstrap,
      color: "text-purple-700",
      level: "Expert",
      years: "4+",
    },
    {
      name: "Sass",
      icon: SiSass,
      color: "text-pink-500",
      level: "Advanced",
      years: "2+",
    },
    {
      name: "EmailJs",
      icon: SiNodemon,
      color: "text-green-600",
      level: "Intermediate",
      years: "1+",
    },
    {
      name: "MongoDB",
      icon: SiMongodb,
      color: "text-green-500",
      level: "Intermediate",
      years: "1+",
    },
    {
      name: "Mongoose",
      icon: SiMongodb,
      color: "text-green-500",
      level: "Intermediate",
      years: "1+",
    },
    {
      name: "Axios",
      icon: SiAxios,
      color: "text-purple-500",
      level: "Advanced",
      years: "2+",
    },
    {
      name: "React Query",
      icon: SiReactquery,
      color: "text-red-500",
      level: "Intermediate",
      years: "1+",
    },
    {
      name: "Clerk",
      icon: SiAuth0,
      color: "text-blue-800",
      level: "Intermediate",
      years: "1+",
    },
    {
      name: "Cloudinary",
      icon: SiCloudinary,
      color: "text-blue-500",
      level: "Intermediate",
      years: "1+",
    },
    {
      name: "Vite",
      icon: SiVite,
      color: "text-purple-400",
      level: "Advanced",
      years: "2+",
    },
    {
      name: "Git",
      icon: SiGit,
      color: "text-orange-500",
      level: "Advanced",
      years: "3+",
    },
    {
      name: "GitHub",
      icon: SiGithub,
      color: "text-white",
      level: "Expert",
      years: "4+",
    },
    {
      name: "Figma",
      icon: SiFigma,
      color: "text-pink-600",
      level: "Advanced",
      years: "2+",
    },
    {
      name: "Adobe XD",
      icon: SiAdobexd,
      color: "text-pink-700",
      level: "Intermediate",
      years: "1+",
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

      gsap.fromTo(
        cardRef.current,
        { opacity: 0, scale: 0.95 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.5,
          delay: 0.2,
          ease: "back.out(1.7)",
        }
      );

      gsap.fromTo(
        textRef.current,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.5,
          delay: 0.4,
        }
      );

      if (containerRef.current) {
        gsap.fromTo(
          skillsRef.current,
          {
            opacity: 0,
            y: 20,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.05,
            delay: 0.2,
            ease: "back.out(1.7)",
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleSkillHover = (index) => {
    gsap.to(skillsRef.current[index], {
      scale: 1.05,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleSkillHoverOut = (index) => {
    gsap.to(skillsRef.current[index], {
      scale: 1,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleSkillTap = (index) => {
    gsap.to(skillsRef.current[index], {
      scale: 0.95,
      duration: 0.1,
      yoyo: true,
      repeat: 1,
    });
  };

  const handleIconHover = (e) => {
    gsap.to(e.currentTarget, {
      rotate: 10,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleIconHoverOut = (e) => {
    gsap.to(e.currentTarget, {
      rotate: 0,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-black relative overflow-hidden"
      id="about"
    >
      <div
        ref={(el) => (decorativeRefs.current[0] = el)}
        className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-blue-500/20 blur-3xl opacity-30"
      />
      <div
        ref={(el) => (decorativeRefs.current[1] = el)}
        className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full bg-indigo-500/20 blur-3xl opacity-30"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div ref={titleRef} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            <TypeAnimation
              sequence={[
                "About Me",
                1000,
                "My Skills",
                1000,
                "My Expertise",
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
        </div>

        <div className="max-w-4xl mx-auto">
          <div
            ref={cardRef}
            className="bg-gray-900 rounded-2xl p-8 md:p-12 shadow-lg border border-gray-800"
          >
            <div ref={textRef} className="space-y-6 mb-8">
              <p className="text-lg text-gray-300 leading-relaxed">
                Abdelrhman Saeid is a passionate{" "}
                <span className="text-blue-400 font-medium">
                  Front-End Developer
                </span>{" "}
                with{" "}
                <span className="text-blue-400 font-medium">
                  4+ years
                </span>{" "}
                of experience specializing in modern web technologies including{" "}
                <span className="text-blue-400 font-medium">
                  React.js
                </span>
                ,{" "}
                <span className="text-blue-400 font-medium">
                  Next.js
                </span>
                , and{" "}
                <span className="text-blue-400 font-medium">
                  TypeScript
                </span>
                .
              </p>

              <div className="bg-blue-500/10 rounded-lg p-6 border-l-4 border-blue-500">
                <h3 className="text-xl font-semibold text-white mb-3">
                  My Journey
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  I started as a self-taught developer, discovering my passion
                  for front-end development through the beauty of creating
                  interactive and visually appealing user interfaces. What began
                  as curiosity about how websites work evolved into a deep
                  commitment to crafting exceptional web experiences. I
                  specialize in React and Next.js because I believe in building
                  scalable, performant applications that not only look great but
                  also provide seamless user experiences. Every project is an
                  opportunity to push boundaries, learn new technologies, and
                  deliver solutions that make a real impact.
                </p>
              </div>
            </div>

            <div
              ref={containerRef}
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
            >
              {skills.map((skill, index) => (
                <div
                  key={skill.name}
                  ref={(el) => (skillsRef.current[index] = el)}
                  className="text-center group"
                  onMouseEnter={() => handleSkillHover(index)}
                  onMouseLeave={() => handleSkillHoverOut(index)}
                  onMouseDown={() => handleSkillTap(index)}
                >
                  <div className="bg-gray-800 rounded-lg p-4 border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:shadow-lg cursor-pointer h-full flex flex-col items-center justify-center">
                    <div
                      onMouseEnter={handleIconHover}
                      onMouseLeave={handleIconHoverOut}
                      className="mb-2"
                    >
                      <skill.icon
                        className={`w-8 h-8 ${skill.color} mx-auto`}
                      />
                    </div>
                    <p className="text-sm font-semibold text-white mb-1">
                      {skill.name}
                    </p>
                    <p className="text-xs text-gray-400 mb-1">
                      {skill.level}
                    </p>
                    <p className="text-xs text-blue-400 font-medium">
                      {skill.years} years
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
