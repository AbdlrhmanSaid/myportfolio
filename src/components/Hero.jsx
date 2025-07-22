import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 py-20 h-screen relative overflow-hidden"
    >
      {/* Animated background elements */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 2, delay: 0.5 }}
      >
        <div className="absolute top-20 left-20 w-40 h-40 rounded-full bg-blue-400 blur-3xl opacity-30 dark:opacity-20"></div>
        <div className="absolute bottom-20 right-20 w-60 h-60 rounded-full bg-indigo-400 blur-3xl opacity-30 dark:opacity-20"></div>
        <div className="absolute top-1/2 right-1/4 w-32 h-32 rounded-full bg-purple-400 blur-3xl opacity-30 dark:opacity-20"></div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full relative">
          <motion.div
            className="text-center m-auto absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full"
            variants={container}
            initial="hidden"
            animate="show"
            viewport={{ once: true }}
          >
            <motion.div variants={item}>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                Hi, I'm{" "}
                <motion.span
                  className="text-blue-600 dark:text-blue-400 inline-block"
                  initial={{ scale: 0.9 }}
                  animate={{ scale: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                    delay: 0.5,
                  }}
                >
                  Abdelrhman Saeid
                </motion.span>
              </h1>
            </motion.div>

            <motion.div variants={item} className="mb-8">
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-2 max-w-3xl mx-auto">
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
                  className="text-blue-600 dark:text-blue-400 font-medium"
                  repeat={Infinity}
                />
              </p>
              <p className="text-lg text-gray-500 dark:text-gray-400 max-w-3xl mx-auto">
                Crafting beautiful, responsive, and user-friendly web
                experiences
              </p>
            </motion.div>

            <motion.div
              variants={item}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  onClick={() => scrollToSection("projects")}
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg"
                >
                  View My Work
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  onClick={() => scrollToSection("contact")}
                  variant="outline"
                  size="lg"
                  className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white dark:border-blue-400 dark:text-blue-400 shadow-lg"
                >
                  Get In Touch
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
