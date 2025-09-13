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
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

export default function About() {
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

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        duration: 0.5,
      },
    },
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden"
      id="about"
    >
      {/* Decorative elements */}
      <motion.div
        className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-blue-100 dark:bg-blue-900/30 blur-3xl opacity-50"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
      />
      <motion.div
        className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full bg-indigo-100 dark:bg-indigo-900/30 blur-3xl opacity-50"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          repeatType: "reverse",
          delay: 0.5,
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
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
          <motion.div
            className="w-20 h-1 bg-blue-600 mx-auto"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, type: "spring" }}
          />
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 md:p-12 shadow-lg border border-gray-200 dark:border-gray-700"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <motion.p
              className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
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
            </motion.p>

            <motion.div
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
              variants={container}
              initial="hidden"
              animate="show"
            >
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  className="text-center"
                  variants={item}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Badge
                    variant="secondary"
                    className="mb-2 flex items-center justify-center p-2 text-sm font-medium transition-all duration-300 hover:shadow-md hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    <motion.div
                      initial={{ rotate: 0 }}
                      whileHover={{ rotate: 10 }}
                      transition={{ type: "spring" }}
                    >
                      <skill.icon className={`w-6 h-6 mr-2 ${skill.color}`} />
                    </motion.div>
                    <p className="text-[0.5rem]">{skill.name}</p>
                  </Badge>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
