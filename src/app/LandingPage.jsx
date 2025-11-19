"use client";

import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import { Toaster } from "react-hot-toast";

const SectionSkeleton = ({ title }) => (
  <section className="py-20 text-center text-gray-500" aria-live="polite">
    <p>Loading {title}…</p>
  </section>
);

const AboutSection = dynamic(() => import("@/components/About"), {
  loading: () => <SectionSkeleton title="About" />,
});

const ProjectsSection = dynamic(() => import("@/components/Projects"), {
  loading: () => <SectionSkeleton title="Projects" />,
});

const TestimonialsSection = dynamic(
  () => import("@/components/Testimonials"),
  {
    loading: () => <SectionSkeleton title="Testimonials" />,
  }
);

const ContactSection = dynamic(() => import("@/components/Contact"), {
  loading: () => <SectionSkeleton title="Contact" />,
});

const FooterSection = dynamic(() => import("@/components/Footer"), {
  loading: () => <SectionSkeleton title="Footer" />,
});

export default function Home() {
  return (
    <div className="min-h-screen bg-black transition-colors duration-300">
      <Toaster position="top-center" reverseOrder />
      <Navbar />

      <main id="main-content" className="flex flex-col">
        <Hero />
        <AboutSection />
        <ProjectsSection />
        <TestimonialsSection />
        <ContactSection />
        <FooterSection />
      </main>
    </div>
  );
}
