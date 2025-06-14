"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";

// تأثيرات الحركة المشتركة
const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      when: "beforeChildren",
    },
  },
};

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [darkMode]);

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        darkMode ? "dark" : ""
      }`}
    >
      <Toaster position="top-center" reverseOrder={true} />
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      <AnimatePresence>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* Hero Section */}
          <motion.section variants={sectionVariants} className="snap-start">
            <Hero />
          </motion.section>

          {/* About Section */}
          <motion.section
            variants={sectionVariants}
            className="snap-start"
            viewport={{ once: true, amount: 0.2 }}
            whileInView="visible"
            initial="hidden"
          >
            <About />
          </motion.section>

          {/* Projects Section */}
          <motion.section
            variants={sectionVariants}
            className="snap-start"
            viewport={{ once: true, amount: 0.2 }}
            whileInView="visible"
            initial="hidden"
          >
            <Projects />
          </motion.section>

          {/* Contact Section */}
          <motion.section
            variants={sectionVariants}
            className="snap-start"
            viewport={{ once: true, amount: 0.2 }}
            whileInView="visible"
            initial="hidden"
          >
            <Contact />
          </motion.section>

          {/* Footer */}
          <motion.footer variants={sectionVariants}>
            <Footer />
          </motion.footer>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
