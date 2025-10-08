import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { projects } from "@/data/projects";
import { useState, useRef, useEffect } from "react";
import { TypeAnimation } from "react-type-animation";
import Image from "next/image";
import { gsap } from "gsap";

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const lineRef = useRef(null);
  const filtersRef = useRef(null);
  const projectsGridRef = useRef(null);
  const projectCardsRef = useRef([]);
  const decorativeRefs = useRef([]);
  const noProjectsRef = useRef(null);

  const categories = ["All", ...Object.keys(projects)];

  const filteredProjects = Object.entries(projects)
    .filter(
      ([category]) => activeCategory === "All" || category === activeCategory
    )
    .flatMap(([category, categoryProjects]) =>
      categoryProjects
        .filter(
          (project) =>
            project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            project.description.toLowerCase().includes(searchTerm.toLowerCase())
        )
        .map((project) => ({ ...project, category }))
    )
    .reverse();

  // تهيئة GSAP animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      // animation للقسم الرئيسي
      gsap.fromTo(
        sectionRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.4 }
      );

      // animation للعناصر الزخرفية
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

      // animation للعنوان
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.4 }
      );

      // animation للخط تحت العنوان
      gsap.fromTo(
        lineRef.current,
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 0.6,
          ease: "back.out(1.7)",
        }
      );

      // animation للفلاتر
      gsap.fromTo(
        filtersRef.current,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.4,
          delay: 0.2,
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // animation للمشاريع عند تغيير الفلتر
  useEffect(() => {
    if (filteredProjects.length > 0) {
      // إخفاء جميع البطاقات أولاً
      gsap.set(projectCardsRef.current, { opacity: 0, y: 20 });

      // إظهار البطاقات مع stagger animation
      gsap.to(projectCardsRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "back.out(1.7)",
        delay: 0.1,
      });
    } else if (noProjectsRef.current) {
      gsap.fromTo(
        noProjectsRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.5 }
      );
    }
  }, [filteredProjects]);

  // دالة لتحريك الأزرار عند hover
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

  // دالة لتحريك البطاقات عند hover
  const handleCardHover = (index) => {
    gsap.to(projectCardsRef.current[index], {
      y: -5,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleCardHoverOut = (index) => {
    gsap.to(projectCardsRef.current[index], {
      y: 0,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  // دالة لتغيير الفئة مع animation
  const handleCategoryChange = (category) => {
    // animation للخروج
    if (filteredProjects.length > 0) {
      gsap.to(projectCardsRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.3,
        stagger: 0.05,
        onComplete: () => {
          setActiveCategory(category);
        },
      });
    } else {
      setActiveCategory(category);
    }
  };

  // دالة لإعادة التعيين مع animation
  const handleResetFilters = () => {
    if (noProjectsRef.current) {
      gsap.to(noProjectsRef.current, {
        opacity: 0,
        duration: 0.3,
        onComplete: () => {
          setActiveCategory("All");
          setSearchTerm("");
        },
      });
    } else {
      setActiveCategory("All");
      setSearchTerm("");
    }
  };

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-gray-50 dark:bg-gray-800 relative overflow-hidden"
      id="projects"
    >
      {/* Background animation */}
      <div
        ref={(el) => (decorativeRefs.current[0] = el)}
        className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-blue-100 dark:bg-blue-900/30 blur-3xl opacity-50"
      />
      <div
        ref={(el) => (decorativeRefs.current[1] = el)}
        className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-indigo-100 dark:bg-indigo-900/30 blur-3xl opacity-50"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section title */}
        <div ref={titleRef} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
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
        <div ref={filtersRef} className="mb-12">
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                onMouseEnter={handleButtonHover}
                onMouseLeave={handleButtonHoverOut}
                onMouseDown={handleButtonTap}
                className={`filter-btn px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === category
                    ? "bg-blue-600 text-white shadow-md"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="max-w-md mx-auto">
            <input
              type="text"
              placeholder="Search projects..."
              className="w-full px-4 py-2 rounded-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Projects grid */}
        {filteredProjects.length > 0 ? (
          <div
            ref={projectsGridRef}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredProjects.map((project, index) => (
              <div
                key={index}
                ref={(el) => (projectCardsRef.current[index] = el)}
                className="project-card"
                onMouseEnter={() => handleCardHover(index)}
                onMouseLeave={() => handleCardHoverOut(index)}
              >
                <Card className="group h-full flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="aspect-video overflow-hidden relative">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 33vw"
                      priority={
                        project.category === activeCategory &&
                        activeCategory !== "All"
                      }
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                      <span className="text-white text-sm font-medium bg-black/50 px-2 py-1 rounded">
                        {project.category}
                      </span>
                    </div>
                  </div>
                  <CardHeader className="p-4">
                    <CardTitle className="text-lg">{project.title}</CardTitle>
                    <CardDescription className="text-sm line-clamp-3">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-4 mt-auto flex gap-2">
                    <Button
                      asChild
                      className="flex-1 bg-blue-600 hover:bg-blue-700 text-white"
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
                        className="flex-1"
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
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        ) : (
          <div ref={noProjectsRef} className="text-center py-12">
            <h3 className="text-xl font-medium text-gray-800 dark:text-gray-200">
              No projects found matching your criteria
            </h3>
            <Button
              variant="ghost"
              className="mt-4"
              onClick={handleResetFilters}
              onMouseEnter={handleButtonHover}
              onMouseLeave={handleButtonHoverOut}
              onMouseDown={handleButtonTap}
            >
              Reset filters
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
