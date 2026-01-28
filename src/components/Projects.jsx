"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ExternalLink,
  Github,
  Info,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { projects } from "@/data/projects";
import { useState, useRef, useEffect, useMemo } from "react";
import TypeAnimation from "@/components/Typewriter";
import Image from "next/image";
import { gsap } from "gsap";

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const lineRef = useRef(null);
  const filtersRef = useRef(null);
  const carouselRef = useRef(null);
  const projectCardsRef = useRef([]);
  const decorativeRefs = useRef([]);
  const noProjectsRef = useRef(null);

  const categories = [...Object.keys(projects)];

  const filteredProjects = useMemo(() => {
    const needle = searchTerm.toLowerCase();

    return Object.entries(projects)
      .filter(
        ([category]) => activeCategory === "All" || category === activeCategory,
      )
      .flatMap(([category, categoryProjects]) =>
        categoryProjects
          .filter(
            (project) =>
              project.title.toLowerCase().includes(needle) ||
              project.description.toLowerCase().includes(needle),
          )
          .map((project) => ({ ...project, category })),
      )
      .reverse();
  }, [activeCategory, searchTerm]);

  useEffect(() => {
    setCurrentIndex(0);
  }, [activeCategory, searchTerm]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        sectionRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.4 },
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
        { opacity: 1, y: 0, duration: 0.4 },
      );

      gsap.fromTo(
        lineRef.current,
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 0.6,
          ease: "back.out(1.7)",
        },
      );

      gsap.fromTo(
        filtersRef.current,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.4,
          delay: 0.2,
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (filteredProjects.length > 0 && carouselRef.current) {
      const cards = carouselRef.current.children;
      const totalCards = cards.length;

      // Reset all cards
      gsap.set(cards, {
        opacity: 0,
        scale: 0.8,
        x: 0,
        rotationY: 0,
        zIndex: 0,
      });

      // Animate cards based on position
      Array.from(cards).forEach((card, index) => {
        const position = index - currentIndex;
        const absPosition = Math.abs(position);

        if (absPosition === 0) {
          // Center card
          gsap.to(card, {
            opacity: 1,
            scale: 1,
            x: 0,
            rotationY: 0,
            zIndex: 10,
            duration: 0.6,
            ease: "power2.out",
          });
        } else if (absPosition === 1) {
          // Adjacent cards
          gsap.to(card, {
            opacity: 0.6,
            scale: 0.85,
            x: position > 0 ? "60%" : "-60%",
            rotationY: position > 0 ? -25 : 25,
            zIndex: 5,
            duration: 0.6,
            ease: "power2.out",
          });
        } else if (absPosition === 2) {
          // Far cards
          gsap.to(card, {
            opacity: 0.3,
            scale: 0.7,
            x: position > 0 ? "120%" : "-120%",
            rotationY: position > 0 ? -45 : 45,
            zIndex: 1,
            duration: 0.6,
            ease: "power2.out",
          });
        } else {
          // Hidden cards
          gsap.to(card, {
            opacity: 0,
            scale: 0.6,
            x: position > 0 ? "180%" : "-180%",
            rotationY: position > 0 ? -60 : 60,
            zIndex: 0,
            duration: 0.6,
            ease: "power2.out",
          });
        }
      });
    }
  }, [currentIndex, filteredProjects]);

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev < filteredProjects.length - 1 ? prev + 1 : 0,
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev > 0 ? prev - 1 : filteredProjects.length - 1,
    );
  };

  // Auto-play carousel
  useEffect(() => {
    if (filteredProjects.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev < filteredProjects.length - 1 ? prev + 1 : 0,
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [filteredProjects.length]);

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
      ref={sectionRef}
      className="py-20 bg-black relative overflow-hidden"
      id="projects"
    >
      {/* Background animation */}
      <div
        ref={(el) => (decorativeRefs.current[0] = el)}
        className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-blue-500/20 blur-3xl opacity-30"
      />
      <div
        ref={(el) => (decorativeRefs.current[1] = el)}
        className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-indigo-500/20 blur-3xl opacity-30"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section title */}
        <div ref={titleRef} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            <TypeAnimation
              sequence={[
                "Featured Projects",
                1000,
                "My Work",
                1000,
                "Portfolio",
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

        {/* Filter controls */}
        <div ref={filtersRef} className="mb-12 space-y-6">
          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3">
            <Button
              onClick={() => setActiveCategory("All")}
              className={`rounded-full px-6 py-2 transition-all duration-300 ${
                activeCategory === "All"
                  ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/50"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700 border border-gray-700"
              }`}
              onMouseEnter={handleButtonHover}
              onMouseLeave={handleButtonHoverOut}
            >
              All Projects
            </Button>
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`rounded-full px-6 py-2 transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/50"
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700 border border-gray-700"
                }`}
                onMouseEnter={handleButtonHover}
                onMouseLeave={handleButtonHoverOut}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Search Box */}
          <div className="max-w-md mx-auto">
            <input
              type="text"
              placeholder="Search projects..."
              className="w-full px-4 py-2 rounded-full border border-gray-700 bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 placeholder-gray-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* 3D Carousel */}
        {filteredProjects.length > 0 ? (
          <div className="relative">
            {/* Carousel Container */}
            <div
              ref={carouselRef}
              className="relative h-[600px] flex items-center justify-center"
              style={{ perspective: "2000px" }}
            >
              {filteredProjects.map((project, index) => (
                <div
                  key={index}
                  ref={(el) => (projectCardsRef.current[index] = el)}
                  className="absolute w-full max-w-md"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <Card className="group h-full flex flex-col overflow-hidden shadow-2xl hover:shadow-blue-500/30 transition-all duration-300 bg-gray-900 border-gray-800">
                    <div className="aspect-video overflow-hidden relative">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, 33vw"
                        priority={index === currentIndex}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                        <span className="text-white text-sm font-medium bg-black/50 px-3 py-1 rounded-full">
                          {project.category}
                        </span>
                      </div>
                    </div>
                    <CardHeader className="p-6">
                      <CardTitle className="text-xl text-white">
                        {project.title}
                      </CardTitle>
                      <CardDescription className="text-sm line-clamp-3 text-gray-400">
                        {project.description}
                      </CardDescription>
                      {project.technologies && (
                        <div className="flex flex-wrap gap-2 mt-3">
                          {project.technologies.slice(0, 3).map((tech, idx) => (
                            <Badge
                              key={idx}
                              variant="secondary"
                              className="text-xs bg-blue-500/10 text-blue-400 border-blue-500/30"
                            >
                              {tech}
                            </Badge>
                          ))}
                          {project.technologies.length > 3 && (
                            <Badge
                              variant="secondary"
                              className="text-xs bg-blue-500/10 text-blue-400 border-blue-500/30"
                            >
                              +{project.technologies.length - 3}
                            </Badge>
                          )}
                        </div>
                      )}
                    </CardHeader>
                    <CardContent className="p-6 pt-0 mt-auto space-y-3">
                      <div className="flex gap-2">
                        <Button
                          asChild
                          className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white"
                          onMouseEnter={handleButtonHover}
                          onMouseLeave={handleButtonHoverOut}
                          onMouseDown={handleButtonTap}
                        >
                          <a
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Live Demo
                          </a>
                        </Button>
                        {project.github && (
                          <Button
                            asChild
                            variant="outline"
                            className="flex-1 border-gray-700 hover:bg-gray-800"
                            onMouseEnter={handleButtonHover}
                            onMouseLeave={handleButtonHoverOut}
                            onMouseDown={handleButtonTap}
                          >
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Github className="w-4 h-4 mr-2" />
                              Code
                            </a>
                          </Button>
                        )}
                      </div>
                      {(project.challenge ||
                        project.whatIDid ||
                        project.result) && (
                        <Button
                          variant="outline"
                          className="w-full border-gray-700 hover:bg-gray-800"
                          onClick={() => setSelectedProject(project)}
                          onMouseEnter={handleButtonHover}
                          onMouseLeave={handleButtonHoverOut}
                          onMouseDown={handleButtonTap}
                        >
                          <Info className="w-4 h-4 mr-2" />
                          View Details
                        </Button>
                      )}
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-center items-center gap-4 mt-8">
              <Button
                onClick={handlePrev}
                className="bg-blue-600 hover:bg-blue-700 text-white rounded-full w-12 h-12 p-0"
                onMouseEnter={handleButtonHover}
                onMouseLeave={handleButtonHoverOut}
              >
                <ChevronLeft className="w-6 h-6" />
              </Button>

              {/* Indicators */}
              <div className="flex gap-2">
                {filteredProjects.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? "bg-blue-600 w-8"
                        : "bg-gray-600 hover:bg-gray-500"
                    }`}
                  />
                ))}
              </div>

              <Button
                onClick={handleNext}
                className="bg-blue-600 hover:bg-blue-700 text-white rounded-full w-12 h-12 p-0"
                onMouseEnter={handleButtonHover}
                onMouseLeave={handleButtonHoverOut}
              >
                <ChevronRight className="w-6 h-6" />
              </Button>
            </div>

            {/* Project Counter */}
            <div className="text-center mt-6">
              <p className="text-gray-400 text-sm">
                Project {currentIndex + 1} of {filteredProjects.length}
              </p>
            </div>
          </div>
        ) : (
          <div ref={noProjectsRef} className="text-center py-12">
            <h3 className="text-xl font-medium text-gray-300">
              No projects found matching your criteria
            </h3>
            <Button
              variant="ghost"
              className="mt-4"
              onClick={() => {
                setActiveCategory("All");
                setSearchTerm("");
              }}
              onMouseEnter={handleButtonHover}
              onMouseLeave={handleButtonHoverOut}
              onMouseDown={handleButtonTap}
            >
              Reset filters
            </Button>
          </div>
        )}

        {selectedProject && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm "
            onClick={() => setSelectedProject(null)}
          >
            <div
              className="bg-gray-900 rounded-lg max-w-3xl w-full max-h-[85vh] overflow-y-auto shadow-2xl mt-[50px] border border-gray-800"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="sticky top-0 bg-gray-900 border-b border-gray-800 p-4 flex justify-between items-center">
                <h3 className="text-2xl font-bold text-white">
                  {selectedProject.title}
                </h3>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setSelectedProject(null)}
                >
                  <X className="w-5 h-5" />
                </Button>
              </div>
              <div className="p-6 space-y-6">
                <div className="relative w-full h-64 rounded-lg overflow-hidden">
                  <Image
                    src={selectedProject.image || "/placeholder.svg"}
                    alt={selectedProject.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">
                    Description
                  </h4>
                  <p className="text-gray-300">{selectedProject.description}</p>
                </div>

                {selectedProject.challenge && (
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">
                      The Challenge
                    </h4>
                    <p className="text-gray-300">{selectedProject.challenge}</p>
                  </div>
                )}

                {selectedProject.whatIDid && (
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">
                      What I Did
                    </h4>
                    <p className="text-gray-300">{selectedProject.whatIDid}</p>
                  </div>
                )}

                {selectedProject.technologies && (
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech, idx) => (
                        <Badge
                          key={idx}
                          variant="secondary"
                          className="text-sm bg-blue-500/10 text-blue-400 border-blue-500/30"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}

                {selectedProject.result && (
                  <div className="bg-blue-500/10 rounded-lg p-4 border-l-4 border-blue-500">
                    <h4 className="text-lg font-semibold text-white mb-2">
                      Result
                    </h4>
                    <p className="text-gray-300">{selectedProject.result}</p>
                  </div>
                )}

                <div className="flex gap-4 pt-4">
                  <Button
                    asChild
                    className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white"
                  >
                    <a
                      href={selectedProject.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Visit Live Demo
                    </a>
                  </Button>
                  {selectedProject.github && (
                    <Button asChild variant="outline" className="flex-1">
                      <a
                        href={selectedProject.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        View Code
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
