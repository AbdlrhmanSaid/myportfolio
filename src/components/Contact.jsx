"use client";

import { useRef, useState } from "react";
import {
  Mail,
  Linkedin,
  Github,
  Phone,
  MessageCircle,
  Send,
  MapPin,
  Clock,
} from "lucide-react";
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
  const [focusedField, setFocusedField] = useState(null);
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
        publicKey,
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

  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      value: "bodesaid3@gmail.com",
      href: "mailto:bodesaid3@gmail.com",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-500/10",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+201206734290",
      href: "tel:+201206734290",
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-500/10",
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      value: "Chat on WhatsApp",
      href: "https://wa.me/201206734290",
      color: "from-green-400 to-green-600",
      bgColor: "bg-green-500/10",
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      value: "Connect with me",
      href: "https://www.linkedin.com/in/abdelrhman-saeid-95564a25a/",
      color: "from-blue-600 to-blue-800",
      bgColor: "bg-blue-500/10",
    },
    {
      icon: Github,
      title: "GitHub",
      value: "View my work",
      href: "https://github.com/AbdlrhmanSaid",
      color: "from-gray-600 to-gray-800",
      bgColor: "bg-gray-500/10",
    },
  ];

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
        {/* Header */}
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
            className="w-20 h-1 bg-blue-600 mx-auto mb-4"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, type: "spring" }}
          />
          <p className="text-gray-400 max-w-2xl mx-auto">
            Have a project in mind or just want to chat? Feel free to reach out!
          </p>
        </motion.div>

        {/* Main Content - Split Design */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Left Side - Contact Cards */}
          <motion.div
            className="lg:col-span-2 space-y-4"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 border border-gray-700">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-blue-400" />
                Contact Information
              </h3>

              <div className="space-y-3">
                {contactMethods.map((method, index) => {
                  const Icon = method.icon;
                  return (
                    <motion.a
                      key={index}
                      href={method.href}
                      target={
                        method.href.startsWith("http") ? "_blank" : undefined
                      }
                      rel={
                        method.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className={`group flex items-center gap-4 p-4 rounded-xl ${method.bgColor} border border-gray-700 hover:border-blue-500/50 transition-all duration-300`}
                      whileHover={{ x: 5, scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                    >
                      <div
                        className={`p-3 rounded-lg bg-gradient-to-br ${method.color}`}
                      >
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-sm font-semibold text-gray-300 mb-1">
                          {method.title}
                        </h4>
                        <p className="text-sm text-gray-400 group-hover:text-blue-400 transition-colors">
                          {method.value}
                        </p>
                      </div>
                    </motion.a>
                  );
                })}
              </div>

              {/* Availability */}
              <motion.div
                className="mt-6 p-4 bg-blue-500/10 rounded-xl border border-blue-500/30"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="w-4 h-4 text-blue-400" />
                  <h4 className="text-sm font-semibold text-white">
                    Availability
                  </h4>
                </div>
                <p className="text-xs text-gray-400">
                  Available for freelance projects and full-time opportunities
                </p>
                <div className="flex items-center gap-2 mt-2">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-xs text-green-400">
                    Currently available
                  </span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <Send className="w-6 h-6 text-blue-400" />
                Send me a message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Input */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Your Name
                  </label>
                  <div className="relative">
                    <Input
                      type="text"
                      name="name"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField("name")}
                      onBlur={() => setFocusedField(null)}
                      required
                      className={`w-full bg-gray-800 border-gray-700 text-white placeholder-gray-500 focus:border-blue-500 transition-all duration-300 ${
                        focusedField === "name" ? "ring-2 ring-blue-500/50" : ""
                      }`}
                    />
                  </div>
                </motion.div>

                {/* Email Input */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Your Email
                  </label>
                  <div className="relative">
                    <Input
                      type="email"
                      name="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField("email")}
                      onBlur={() => setFocusedField(null)}
                      required
                      className={`w-full bg-gray-800 border-gray-700 text-white placeholder-gray-500 focus:border-blue-500 transition-all duration-300 ${
                        focusedField === "email"
                          ? "ring-2 ring-blue-500/50"
                          : ""
                      }`}
                    />
                  </div>
                </motion.div>

                {/* Message Input */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                >
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Your Message
                  </label>
                  <div className="relative">
                    <Textarea
                      name="message"
                      placeholder="Tell me about your project..."
                      value={formData.message}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField("message")}
                      onBlur={() => setFocusedField(null)}
                      required
                      rows={6}
                      className={`w-full bg-gray-800 border-gray-700 text-white placeholder-gray-500 focus:border-blue-500 transition-all duration-300 resize-none ${
                        focusedField === "message"
                          ? "ring-2 ring-blue-500/50"
                          : ""
                      }`}
                    />
                  </div>
                </motion.div>

                {/* Submit Button */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                >
                  <MotionButton
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-lg shadow-blue-500/50 py-6 text-lg font-semibold"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="flex items-center justify-center gap-2">
                      {isSubmitting ? (
                        <>
                          <motion.div
                            className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                            animate={{ rotate: 360 }}
                            transition={{
                              duration: 1,
                              repeat: Infinity,
                              ease: "linear",
                            }}
                          />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          Send Message
                        </>
                      )}
                    </span>
                  </MotionButton>
                </motion.div>
              </form>

              {/* Form Footer */}
              <motion.p
                className="text-center text-sm text-gray-500 mt-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              >
                I typically respond within 24 hours
              </motion.p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
