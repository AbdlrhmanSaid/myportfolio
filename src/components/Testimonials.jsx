"use client";

import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import TypeAnimation from "@/components/Typewriter";
import {
  Github,
  Star,
  GitFork,
  Code2,
  Zap,
  Globe,
  Server,
  Database,
  Smartphone,
  Layers,
  ExternalLink,
} from "lucide-react";

const techStack = [
  {
    category: "Frontend",
    icon: <Globe className="w-5 h-5" />,
    color: "from-blue-500 to-cyan-500",
    glow: "shadow-blue-500/30",
    border: "border-blue-500/30",
    skills: [
      { name: "React.js", level: 95, color: "bg-blue-500" },
      { name: "Next.js", level: 90, color: "bg-blue-600" },
      { name: "TypeScript", level: 80, color: "bg-blue-700" },
      { name: "Tailwind CSS", level: 92, color: "bg-cyan-500" },
    ],
  },
  {
    category: "Backend",
    icon: <Server className="w-5 h-5" />,
    color: "from-purple-500 to-indigo-500",
    glow: "shadow-purple-500/30",
    border: "border-purple-500/30",
    skills: [
      { name: "Node.js", level: 85, color: "bg-purple-500" },
      { name: "Express.js", level: 82, color: "bg-purple-600" },
      { name: "REST APIs", level: 88, color: "bg-indigo-500" },
      { name: "Clerk Auth", level: 80, color: "bg-indigo-600" },
    ],
  },
  {
    category: "Database",
    icon: <Database className="w-5 h-5" />,
    color: "from-emerald-500 to-teal-500",
    glow: "shadow-emerald-500/30",
    border: "border-emerald-500/30",
    skills: [
      { name: "MongoDB", level: 83, color: "bg-emerald-500" },
      { name: "Supabase", level: 75, color: "bg-teal-600" },
    ],
  },
  {
    category: "Tools & More",
    icon: <Layers className="w-5 h-5" />,
    color: "from-orange-500 to-rose-500",
    glow: "shadow-orange-500/30",
    border: "border-orange-500/30",
    skills: [
      { name: "Git & GitHub", level: 90, color: "bg-orange-500" },
      { name: "Figma", level: 72, color: "bg-rose-500" },
      { name: "GSAP", level: 78, color: "bg-orange-600" },
    ],
  },
];

const githubStats = [
  { label: "Public Repos", value: "20+", icon: <Code2 className="w-6 h-6" /> },
  { label: "GitHub Stars", value: "50+", icon: <Star className="w-6 h-6" /> },
  {
    label: "Total Commits",
    value: "500+",
    icon: <GitFork className="w-6 h-6" />,
  },
  {
    label: "Projects Shipped",
    value: "15+",
    icon: <Zap className="w-6 h-6" />,
  },
];

function SkillBar({ name, level, color, delay }) {
  const barRef = useRef(null);

  useEffect(() => {
    if (barRef.current) {
      gsap.fromTo(
        barRef.current,
        { width: "0%" },
        {
          width: `${level}%`,
          duration: 1.2,
          delay: delay || 0,
          ease: "power2.out",
        },
      );
    }
  }, [level, delay]);

  return (
    <div className="mb-3">
      <div className="flex justify-between items-center mb-1">
        <span className="text-sm text-gray-300 font-medium">{name}</span>
        <span className="text-xs text-gray-500">{level}%</span>
      </div>
      <div className="h-1.5 bg-gray-800 rounded-full overflow-hidden">
        <div
          ref={barRef}
          className={`h-full rounded-full ${color}`}
          style={{ width: "0%" }}
        />
      </div>
    </div>
  );
}

export default function GitHubStats() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const lineRef = useRef(null);
  const statsRef = useRef([]);
  const cardsRef = useRef([]);
  const decorativeRefs = useRef([]);

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
        { scaleX: 1, duration: 0.8, ease: "back.out(1.7)" },
      );

      // Stats counter animation
      statsRef.current.forEach((el, i) => {
        if (el) {
          gsap.fromTo(
            el,
            { opacity: 0, y: 30, scale: 0.8 },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.6,
              delay: 0.2 + i * 0.1,
              ease: "back.out(1.7)",
            },
          );
        }
      });

      cardsRef.current.forEach((el, i) => {
        if (el) {
          gsap.fromTo(
            el,
            { opacity: 0, y: 40 },
            {
              opacity: 1,
              y: 0,
              duration: 0.6,
              delay: 0.4 + i * 0.15,
              ease: "power2.out",
            },
          );
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleCardHover = (e) => {
    gsap.to(e.currentTarget, {
      y: -6,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleCardHoverOut = (e) => {
    gsap.to(e.currentTarget, {
      y: 0,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-black relative overflow-hidden"
      id="skills"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          ref={(el) => (decorativeRefs.current[0] = el)}
          className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-blue-500/10 blur-3xl opacity-40"
        />
        <div
          ref={(el) => (decorativeRefs.current[1] = el)}
          className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-purple-500/10 blur-3xl opacity-40"
        />
        <div
          ref={(el) => (decorativeRefs.current[2] = el)}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-indigo-500/5 blur-3xl opacity-30"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Title */}
        <div ref={titleRef} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            <TypeAnimation
              sequence={[
                "Skills & Stack",
                1000,
                "Tech I Use",
                1000,
                "My Toolbox",
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
            Technologies and tools I use to build modern, performant, and
            scalable web applications.
          </p>
        </div>

        {/* GitHub Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
          {githubStats.map((stat, i) => (
            <div
              key={i}
              ref={(el) => (statsRef.current[i] = el)}
              onMouseEnter={handleCardHover}
              onMouseLeave={handleCardHoverOut}
              className="bg-gray-900/80 border border-gray-800 hover:border-blue-500/50 rounded-xl p-5 text-center transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 cursor-default"
            >
              <div className="flex justify-center mb-3">
                <div className="bg-blue-500/10 p-3 rounded-full text-blue-400">
                  {stat.icon}
                </div>
              </div>
              <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Skill Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {techStack.map((group, i) => (
            <div
              key={i}
              ref={(el) => (cardsRef.current[i] = el)}
              onMouseEnter={handleCardHover}
              onMouseLeave={handleCardHoverOut}
              className={`bg-gray-900/80 border ${group.border} rounded-xl p-6 transition-all duration-300 hover:shadow-xl ${group.glow}`}
            >
              <div className="flex items-center gap-3 mb-5">
                <div
                  className={`bg-gradient-to-br ${group.color} p-2.5 rounded-lg text-white`}
                >
                  {group.icon}
                </div>
                <h3 className="text-lg font-semibold text-white">
                  {group.category}
                </h3>
              </div>
              <div>
                {group.skills.map((skill, j) => (
                  <SkillBar
                    key={j}
                    {...skill}
                    delay={0.5 + i * 0.1 + j * 0.08}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="text-center">
          <a
            href="https://github.com/AbdlrhmanSaid"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gray-900 border border-gray-700 hover:border-blue-500/60 text-white px-8 py-4 rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 group"
            onMouseEnter={(e) =>
              gsap.to(e.currentTarget, { scale: 1.05, duration: 0.3 })
            }
            onMouseLeave={(e) =>
              gsap.to(e.currentTarget, { scale: 1, duration: 0.3 })
            }
          >
            <Github className="w-5 h-5" />
            <span>View My GitHub Profile</span>
            <ExternalLink className="w-4 h-4 opacity-60 group-hover:opacity-100 transition-opacity" />
          </a>
        </div>
      </div>
    </section>
  );
}
