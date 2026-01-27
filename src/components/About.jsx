"use client";

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
import {
  Code2,
  Layers,
  Palette,
  Database,
  Wrench,
  Sparkles,
} from "lucide-react";
import TypeAnimation from "@/components/Typewriter";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";

export default function About() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const lineRef = useRef(null);
  const cardRef = useRef(null);
  const textRef = useRef(null);
  const decorativeRefs = useRef([]);
  const skillCategoriesRef = useRef([]);

  const skillCategories = [
    {
      title: "Core Technologies",
      icon: Code2,
      iconColor: "text-blue-400",
      skills: [
        { name: "HTML5", icon: SiHtml5, color: "#E34F26", level: 95 },
        { name: "CSS3", icon: SiCss3, color: "#1572B6", level: 95 },
        { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E", level: 90 },
        { name: "TypeScript", icon: SiTypescript, color: "#3178C6", level: 80 },
      ],
    },
    {
      title: "Frameworks & Libraries",
      icon: Layers,
      iconColor: "text-purple-400",
      skills: [
        { name: "React.js", icon: SiReact, color: "#61DAFB", level: 92 },
        { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF", level: 85 },
        { name: "Redux", icon: SiRedux, color: "#764ABC", level: 80 },
        {
          name: "React Router",
          icon: SiReactrouter,
          color: "#CA4245",
          level: 90,
        },
      ],
    },
    {
      title: "Styling & UI",
      icon: Palette,
      iconColor: "text-pink-400",
      skills: [
        {
          name: "Tailwind CSS",
          icon: SiTailwindcss,
          color: "#06B6D4",
          level: 93,
        },
        { name: "Bootstrap", icon: SiBootstrap, color: "#7952B3", level: 88 },
        { name: "Sass/SCSS", icon: SiSass, color: "#CC6699", level: 82 },
        { name: "Shadcn UI", icon: SiCodepen, color: "#FFFFFF", level: 75 },
      ],
    },
    {
      title: "Backend & Database",
      icon: Database,
      iconColor: "text-green-400",
      skills: [
        { name: "MongoDB", icon: SiMongodb, color: "#47A248", level: 72 },
        { name: "Mongoose", icon: SiMongodb, color: "#47A248", level: 72 },
        { name: "Axios", icon: SiAxios, color: "#5A29E4", level: 85 },
        {
          name: "React Query",
          icon: SiReactquery,
          color: "#FF4154",
          level: 70,
        },
      ],
    },
    {
      title: "Tools & Services",
      icon: Wrench,
      iconColor: "text-orange-400",
      skills: [
        { name: "Git", icon: SiGit, color: "#F05032", level: 85 },
        { name: "GitHub", icon: SiGithub, color: "#FFFFFF", level: 90 },
        { name: "Vite", icon: SiVite, color: "#646CFF", level: 80 },
        { name: "Clerk Auth", icon: SiAuth0, color: "#6C47FF", level: 68 },
      ],
    },
    {
      title: "Design & Others",
      icon: Sparkles,
      iconColor: "text-yellow-400",
      skills: [
        { name: "Figma", icon: SiFigma, color: "#F24E1E", level: 78 },
        { name: "Adobe XD", icon: SiAdobexd, color: "#FF61F6", level: 65 },
        { name: "Cloudinary", icon: SiCloudinary, color: "#3448C5", level: 70 },
        { name: "EmailJS", icon: SiNodemon, color: "#47A248", level: 70 },
      ],
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

      gsap.fromTo(
        cardRef.current,
        { opacity: 0, scale: 0.95 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.5,
          delay: 0.2,
          ease: "back.out(1.7)",
        },
      );

      gsap.fromTo(
        textRef.current,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.5,
          delay: 0.4,
        },
      );

      // Simple fade in for skill categories
      gsap.fromTo(
        skillCategoriesRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          delay: 0.6,
          ease: "power2.out",
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

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

        <div className="max-w-6xl mx-auto">
          <div
            ref={cardRef}
            className="bg-gray-900 rounded-2xl p-8 md:p-12 shadow-lg border border-gray-800"
          >
            {/* About Text */}
            <div ref={textRef} className="space-y-6 mb-12">
              <p className="text-lg text-gray-300 leading-relaxed">
                Abdelrhman Saeid is a passionate{" "}
                <span className="text-blue-400 font-medium">
                  Front-End Developer
                </span>{" "}
                with <span className="text-blue-400 font-medium">4+ years</span>{" "}
                of experience specializing in modern web technologies including{" "}
                <span className="text-blue-400 font-medium">React.js</span>,{" "}
                <span className="text-blue-400 font-medium">Next.js</span>, and{" "}
                <span className="text-blue-400 font-medium">TypeScript</span>.
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

            {/* Skills Section */}
            <div className="mt-12">
              <h3 className="text-2xl font-bold text-white text-center mb-8">
                Technical Skills
              </h3>

              {/* Skills Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {skillCategories.map((category, categoryIndex) => {
                  const CategoryIcon = category.icon;
                  return (
                    <div
                      key={categoryIndex}
                      ref={(el) =>
                        (skillCategoriesRef.current[categoryIndex] = el)
                      }
                      className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-blue-500/50 transition-all duration-300"
                    >
                      {/* Category Header */}
                      <div className="flex items-center gap-3 mb-5">
                        <div className={`${category.iconColor}`}>
                          <CategoryIcon className="w-7 h-7" />
                        </div>
                        <h4 className="text-lg font-semibold text-white">
                          {category.title}
                        </h4>
                      </div>

                      {/* Skills List */}
                      <div className="space-y-4">
                        {category.skills.map((skill, skillIndex) => {
                          const SkillIcon = skill.icon;
                          return (
                            <div key={skillIndex} className="group">
                              {/* Skill Name and Icon */}
                              <div className="flex items-center justify-between mb-2">
                                <div className="flex items-center gap-2">
                                  <SkillIcon
                                    className="w-5 h-5 transition-transform duration-300 group-hover:scale-110"
                                    style={{ color: skill.color }}
                                  />
                                  <span className="text-sm font-medium text-gray-300">
                                    {skill.name}
                                  </span>
                                </div>
                                <span className="text-sm font-semibold text-blue-400">
                                  {skill.level}%
                                </span>
                              </div>

                              {/* Progress Bar */}
                              <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                                <div
                                  className="h-full rounded-full transition-all duration-1000 ease-out"
                                  style={{
                                    width: `${skill.level}%`,
                                    background: `linear-gradient(90deg, ${skill.color}dd, ${skill.color})`,
                                    boxShadow: `0 0 10px ${skill.color}40`,
                                  }}
                                />
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Legend */}
              <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                  <span className="text-gray-400">Expert (90-100%)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-blue-500" />
                  <span className="text-gray-400">Advanced (75-89%)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <span className="text-gray-400">Intermediate (65-74%)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
