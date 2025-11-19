"use client";

import { useRef, useState } from "react";
import { Mail, Linkedin, Github, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
import TypeAnimation from "@/components/Typewriter";

const MotionButton = motion(Button);

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const emailClientRef = useRef(null);

  const loadEmailClient = async () => {
    if (emailClientRef.current) return emailClientRef.current;
    const mod = await import("@emailjs/browser");
    emailClientRef.current = mod.default ?? mod;
    return emailClientRef.current;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    try {
      const emailClient = await loadEmailClient();

      await emailClient.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        publicKey
      );

      toast.success("Thank you for your message! I'll get back to you soon.", {
        duration: 5000,
        position: "bottom-center",
        style: {
          background: "#1e40af",
          color: "#fff",
        },
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      toast.error("Failed to send message. Please try again later.", {
        position: "bottom-center",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
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
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        duration: 0.6,
      },
    },
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="py-20 bg-black relative overflow-hidden"
      id="contact"
    >
      {/* Decorative elements */}
      <motion.div
        className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-blue-500/20 blur-3xl opacity-30"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
      />
      <motion.div
        className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full bg-indigo-500/20 blur-3xl opacity-30"
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
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            <TypeAnimation
              sequence={[
                "Get In Touch",
                1000,
                "Contact Me",
                1000,
                "Let's Talk",
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

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {/* Contact Information */}
          <motion.div variants={item}>
            <h3 className="text-2xl font-bold text-white mb-6">
              Contact Information
            </h3>
            <div className="space-y-6">
              <motion.div
                className="flex items-center space-x-4 p-4 bg-gray-900 rounded-lg hover:bg-gray-800 transition-colors border border-gray-800"
                whileHover={{ x: 5 }}
              >
                <div className="p-3 bg-blue-500/20 rounded-full">
                  <Mail className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-300">
                    Email
                  </h4>
                  <a
                    href="mailto:bodesaid3@gmail.com"
                    className="text-gray-200 hover:text-blue-400 transition-colors"
                  >
                    bodesaid3@gmail.com
                  </a>
                </div>
              </motion.div>

              <motion.div
                className="flex items-center space-x-4 p-4 bg-gray-900 rounded-lg hover:bg-gray-800 transition-colors border border-gray-800"
                whileHover={{ x: 5 }}
              >
                <div className="p-3 bg-blue-500/20 rounded-full">
                  <Phone className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-300">
                    Phone
                  </h4>
                  <a
                    href="tel:+201206734290"
                    className="text-gray-200 hover:text-blue-400 transition-colors"
                  >
                    +201206734290
                  </a>
                </div>
              </motion.div>

              <motion.div
                className="flex items-center space-x-4 p-4 bg-gray-900 rounded-lg hover:bg-gray-800 transition-colors border border-gray-800"
                whileHover={{ x: 5 }}
              >
                <div className="p-3 bg-blue-500/20 rounded-full">
                  <MessageCircle className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-300">
                    WhatsApp
                  </h4>
                  <a
                    href="https://wa.me/201206734290"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-200 hover:text-blue-400 transition-colors"
                  >
                    Chat on WhatsApp
                  </a>
                </div>
              </motion.div>

              <motion.div
                className="flex items-center space-x-4 p-4 bg-gray-900 rounded-lg hover:bg-gray-800 transition-colors border border-gray-800"
                whileHover={{ x: 5 }}
              >
                <div className="p-3 bg-blue-500/20 rounded-full">
                  <Linkedin className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-300">
                    LinkedIn
                  </h4>
                  <a
                    href="https://www.linkedin.com/in/abdelrhman-saeid-95564a25a/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-200 hover:text-blue-400 transition-colors"
                  >
                    Connect on LinkedIn
                  </a>
                </div>
              </motion.div>

              <motion.div
                className="flex items-center space-x-4 p-4 bg-gray-900 rounded-lg hover:bg-gray-800 transition-colors border border-gray-800"
                whileHover={{ x: 5 }}
              >
                <div className="p-3 bg-blue-500/20 rounded-full">
                  <Github className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-300">
                    GitHub
                  </h4>
                  <a
                    href="https://github.com/AbdlrhmanSaid"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-200 hover:text-blue-400 transition-colors"
                  >
                    View GitHub Profile
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div variants={item}>
            <h3 className="text-2xl font-bold text-white mb-6">
              Send Message
            </h3>
            <motion.form
              onSubmit={handleSubmit}
              className="space-y-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                <Input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                <Input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
              >
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <MotionButton
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-lg shadow-blue-500/50"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </MotionButton>
              </motion.div>
            </motion.form>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
