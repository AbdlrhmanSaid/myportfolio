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
import { TypeAnimation } from "react-type-animation";
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
    { name: "HTML", icon: SiHtml5, color: "text-orange-600" },
    { name: "CSS", icon: SiCss3, color: "text-blue-600" },
    { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
    { name: "TypeScript", icon: SiTypescript, color: "text-blue-700" },
    { name: "React.js", icon: SiReact, color: "text-cyan-500" },
    { name: "Next.js", icon: SiNextdotjs, color: "text-black dark:text-white" },
    { name: "Redux", icon: SiRedux, color: "text-purple-600" },
    { name: "React Router", icon: SiReactrouter, color: "text-red-600" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-teal-500" },
    { name: "Shadcn", icon: SiCodepen, color: "text-black dark:text-white" },
    { name: "Bootstrap", icon: SiBootstrap, color: "text-purple-700" },
    { name: "Sass", icon: SiSass, color: "text-pink-500" },
    { name: "EmailJs", icon: SiNodemon, color: "text-green-600" },
    { name: "MongoDB", icon: SiMongodb, color: "text-green-500" },
    { name: "Mongoose", icon: SiMongodb, color: "text-green-500" },
    { name: "Axios", icon: SiAxios, color: "text-purple-500" },
    { name: "React Query", icon: SiReactquery, color: "text-red-500" },
    { name: "Clerk", icon: SiAuth0, color: "text-blue-800" },
    { name: "Cloudinary", icon: SiCloudinary, color: "text-blue-500" },
    { name: "Vite", icon: SiVite, color: "text-purple-400" },
    { name: "Git", icon: SiGit, color: "text-orange-500" },
    { name: "GitHub", icon: SiGithub, color: "text-black dark:text-white" },
    { name: "Figma", icon: SiFigma, color: "text-pink-600" },
    { name: "Adobe XD", icon: SiAdobexd, color: "text-pink-700" },
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
      className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden"
      id="about"
    >
      <div
        ref={(el) => (decorativeRefs.current[0] = el)}
        className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-blue-100 dark:bg-blue-900/30 blur-3xl opacity-50"
      />
      <div
        ref={(el) => (decorativeRefs.current[1] = el)}
        className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full bg-indigo-100 dark:bg-indigo-900/30 blur-3xl opacity-50"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div ref={titleRef} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
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
            className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 md:p-12 shadow-lg border border-gray-200 dark:border-gray-700"
          >
            <p
              ref={textRef}
              className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8"
            >
              Abdelrhman Saeid is a passionate{" "}
              <span className="text-blue-700 dark:text-blue-300 font-medium">
                Front-End Developer
              </span>{" "}
              with{" "}
              <span className="text-blue-700 dark:text-blue-300 font-medium">
                4+ years
              </span>{" "}
              of experience specializing in modern web technologies including{" "}
              <span className="text-blue-700 dark:text-blue-300 font-medium">
                React.js
              </span>
              ,{" "}
              <span className="text-blue-700 dark:text-blue-300 font-medium">
                Next.js
              </span>
              , and{" "}
              <span className="text-blue-700 dark:text-blue-300 font-medium">
                TypeScript
              </span>
              .
            </p>

            <div
              ref={containerRef}
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
            >
              {skills.map((skill, index) => (
                <div
                  key={skill.name}
                  ref={(el) => (skillsRef.current[index] = el)}
                  className="text-center"
                  onMouseEnter={() => handleSkillHover(index)}
                  onMouseLeave={() => handleSkillHoverOut(index)}
                  onMouseDown={() => handleSkillTap(index)}
                >
                  <Badge
                    variant="secondary"
                    className="skill-badge mb-2 flex items-center justify-center p-2 text-sm font-medium transition-all duration-300 hover:shadow-md hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
                  >
                    <div
                      onMouseEnter={handleIconHover}
                      onMouseLeave={handleIconHoverOut}
                    >
                      <skill.icon className={`w-6 h-6 mr-2 ${skill.color}`} />
                    </div>
                    <p className="text-[1rem]">{skill.name}</p>
                  </Badge>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
