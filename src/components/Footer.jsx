import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Phone, MessageCircle } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Footer() {
  const currentYear = new Date().getFullYear();

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
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="text-white py-12 relative overflow-hidden bg-black border-t border-gray-800"
    >
      {/* Decorative elements */}
      <motion.div
        className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-blue-500/20 blur-3xl opacity-30"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
      />
      <motion.div
        className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-indigo-500/20 blur-3xl opacity-30"
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
          className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.div variants={item} className="space-y-4">
            <h3 className="text-lg font-semibold text-blue-400">
              Abdelrhman Saeid
            </h3>
            <p className="text-gray-300">
              Front-End Developer passionate about creating beautiful,
              responsive, and user-friendly web experiences.
            </p>
          </motion.div>

          <motion.div variants={item} className="space-y-4 ">
            <h3 className="text-lg font-semibold text-blue-400 ">
              Quick Links
            </h3>
            <ul className="space-y-2 ">
              <li>
                <Link
                  href="#about"
                  className="text-gray-300  transition-colors hover:text-blue-400"
                >
                  About Me
                </Link>
              </li>
              <li>
                <Link
                  href="#projects"
                  className="text-gray-300  transition-colors hover:text-blue-400"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-gray-300  transition-colors hover:text-blue-400"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </motion.div>

          <motion.div variants={item} className="space-y-4">
            <h3 className="text-lg font-semibold text-blue-400">
              Contact Info
            </h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2 text-gray-300  transition-colors">
                <Mail className="w-4 h-4" />
                <span>bodesaid3@gmail.com</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-300  transition-colors    ">
                <Phone className="w-4 h-4" />
                <span>+201206734290</span>
              </li>
            </ul>
          </motion.div>

          <motion.div variants={item} className="space-y-4">
            <h3 className="text-lg font-semibold text-blue-400">Follow Me</h3>
            <div className="flex space-x-4">
              <Button
                variant="ghost"
                size="icon"
                asChild
                aria-label="GitHub Profile"
              >
                <Link
                  href="https://github.com/AbdlrhmanSaid"
                  target="_blank"
                  className="text-gray-300  transition-colors hover:text-blue-400"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-5 h-5" />
                  <span className="sr-only">GitHub</span>
                </Link>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                asChild
                aria-label="LinkedIn Profile"
              >
                <Link
                  href="https://www.linkedin.com/in/abdelrhman-saeid-95564a25a/"
                  target="_blank"
                  className="text-gray-300  transition-colors hover:text-blue-400"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-5 h-5" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                asChild
                aria-label="WhatsApp Chat"
              >
                <Link
                  href="https://wa.me/201206734290"
                  target="_blank"
                  className="text-gray-300  transition-colors hover:text-blue-400"
                  aria-label="WhatsApp Chat"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span className="sr-only">WhatsApp</span>
                </Link>
              </Button>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="border-t border-gray-800 pt-8 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-gray-300">
            © {currentYear} Abdelrhman Saeid. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm mt-2">
            Built with Next.js, Tailwind CSS, and
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
}
