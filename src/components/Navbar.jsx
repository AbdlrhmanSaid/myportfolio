"use client";

import { useState } from "react";
import { Menu, X, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold text-white">AS</h1>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {["home", "about", "projects", "testimonials", "contact"].map(
                (section) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className="text-white hover:text-blue-400 px-3 py-2 text-sm font-medium transition-colors"
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </button>
                ),
              )}
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <Button
              asChild
              variant="outline"
              size="sm"
              className="hidden md:flex border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-blue-100"
            >
              <a
                href="/Abdelrhman Saeid Frontend Developer.pdf"
                download="Abdelrhman Saeid Frontend Developer.pdf"
                className="flex items-center"
              >
                <Download className="w-4 h-4 mr-2" />
                CV
              </a>
            </Button>

            <div className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-white"
                aria-label="Toggle mobile menu"
              >
                {mobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black border-t border-gray-800">
            {["home", "about", "projects", "testimonials", "contact"].map(
              (section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="block text-white hover:text-blue-400 px-3 py-2 text-base font-medium w-full text-left"
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              ),
            )}
            <a
              href="/AbdelrhmanSaeid-Frontend.pdf"
              download="AbdelrhmanSaeid-Frontend.pdf"
              className="flex items-center px-3 py-2 text-base font-medium text-white hover:text-blue-400"
            >
              <Download className="w-4 h-4 mr-2" />
              Download CV
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
