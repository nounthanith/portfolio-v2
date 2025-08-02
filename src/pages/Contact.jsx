import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import ShinyText from "../ui/ShinyText";
import personalData from "../utils/personalData";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaPaperPlane,
  FaFacebook,
} from "react-icons/fa";
import { motion } from "framer-motion";
import SpotlightCard from "../components/SpotlightCard";
import GlareHover from "../ui/GlareHover";
import { ScrambleTextPlugin } from "gsap/all";
import ScrambledText from "../ui/ScrambleText";

function Contact() {
  const API_URL =
    "https://script.google.com/macros/s/AKfycbxAiS4s8EoIA1WRxHKTdyQMiJyXds81vt7K3xH-cmnXEQTPVC0ecSS0CLCniwrUDCc-/exec";

  const date = new Date().toLocaleString();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    timestamp: date,
    action: "insert",
    id: Math.floor(Math.random() * 1000 + 1),
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!form.message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      toast.error("Please fix the form errors");
      return;
    }

    setLoading(true);
    const toastId = toast.loading("Sending message...");

    const params = new URLSearchParams({
      ...form,
      timestamp: date,
      action: "insert",
      id: Math.floor(Math.random() * 1000 + 1),
    });

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: params.toString(),
      });

      const result = await response.text();

      try {
        const data = JSON.parse(result);
        if (data.status === "success" || data.result === "success") {
          toast.success("Message sent successfully!", { id: toastId });
          setForm({ name: "", email: "", message: "" });
        } else {
          throw new Error(data.message || "Failed to send message");
        }
      } catch (e) {
        if (response.ok) {
          toast.success("Message sent successfully!", { id: toastId });
          setForm({ name: "", email: "", message: "" });
        } else {
          throw new Error("Failed to send message");
        }
      }
    } catch (error) {
      toast.error(error.message || "Failed to send message.", { id: toastId });
    } finally {
      setLoading(false);
    }
  };

  const {
    name,
    address,
    role,
    phone,
    email,
    github,
    facebook,
    instagram,
    telegram,
    twitter,
    avatar,
  } = personalData;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <ShinyText text="Get In Touch" disabled={false} speed={2} />
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Have a project in mind or want to chat? Feel free to reach out!
          </p>
          <div className="mt-6 flex justify-center">
            <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full"></div>
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col justify-center items-center lg:flex-row gap-8 max-w-6xl mx-auto"
        >
          {/* Contact Info */}
          <motion.div variants={itemVariants} className="w-full lg:w-2/5">
            <GlareHover className="p-8 h-full bg-gray-800/40 backdrop-blur-md">
              <h3 className="text-2xl font-bold text-white mb-6 relative pb-2">
                <ShinyText text="Contact Information" disabled={false} speed={2} />
                <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full"></span>
              </h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-pink-500/30 group-hover:to-purple-600/30 transition-all duration-300 shadow-lg">
                    <FaPhone className="text-pink-400 text-xl" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Phone</p>
                    <a
                      href={`tel:${phone}`}
                      className="text-white hover:text-pink-400 transition-colors font-medium"
                    >
                      <ScrambledText radius={100} duration={1.2} speed={0.5} scrambleChars=".:" className="text-white" style={{ cursor: "pointer" }}>{phone}</ScrambledText>
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-pink-500/30 group-hover:to-purple-600/30 transition-all duration-300 shadow-lg">
                    <FaEnvelope className="text-pink-400 text-xl" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Email</p>
                    <a
                      href={`mailto:${email}`}
                      className="text-white hover:text-pink-400 transition-colors font-medium"
                    >
                        <ScrambledText radius={100} duration={1.2} speed={0.5} scrambleChars=".:" className="text-white" style={{ cursor: "pointer" }}>{email}</ScrambledText>
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center group-hover:bg-gradient-to-br transition-all duration-300 shadow-lg flex-shrink-0">
                    <FaMapMarkerAlt className="text-pink-400 text-xl" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Location</p>
                    <ScrambledText radius={100} duration={1.2} speed={0.5} scrambleChars=".:" className="text-white" style={{ cursor: "pointer" }}>{address}</ScrambledText>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-700/50">
                <ShinyText text="Follow me" disabled={false} speed={2} className="" style={{ cursor: "pointer" }} />
                <div className="flex gap-4">
                  <motion.a
                    whileHover={{ y: -3 }}
                    href={github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-all duration-300 shadow hover:shadow-lg"
                  >
                    <FaGithub className="text-white text-xl" />
                  </motion.a>
                  <motion.a
                    whileHover={{ y: -3 }}
                    href={facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-all duration-300 shadow hover:shadow-lg"
                  >
                    <FaFacebook className="text-white text-xl" />
                  </motion.a>
                  <motion.a
                    whileHover={{ y: -3 }}
                    href={twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-all duration-300 shadow hover:shadow-lg"
                  >
                    <FaTwitter className="text-white text-xl" />
                  </motion.a>
                </div>
              </div>
            </GlareHover>
          </motion.div>

          {/* Contact Form */}
          <motion.div variants={itemVariants} className="w-full lg:w-3/5">
            <GlareHover className="p-8 md:p-10 rounded-xl border border-gray-700/50 shadow-xl">
              <h3 className="text-2xl font-bold text-white mb-6 relative pb-2">
                <ShinyText text="Send Me a Message" disabled={false} speed={2} className="" style={{ cursor: "pointer" }} />
                <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full"></span>
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 text-white rounded-lg border ${
                        errors.name ? "border-red-500" : "border-gray-600"
                      } focus:ring-2 focus:ring-pink-500 focus:border-transparent transition duration-200 placeholder-gray-400`}
                      placeholder="Your name"
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-400">{errors.name}</p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 text-white rounded-lg border ${
                        errors.email ? "border-red-500" : "border-gray-600"
                      } focus:ring-2 focus:ring-pink-500 focus:border-transparent transition duration-200 placeholder-gray-400`}
                      placeholder="your@email.com"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-400">
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 text-white rounded-lg border ${
                      errors.message ? "border-red-500" : "border-gray-600"
                    } focus:ring-2 focus:ring-pink-500 focus:border-transparent transition duration-200 placeholder-gray-400`}
                    placeholder="Hello, I'd like to talk about..."
                  ></textarea>
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-400">
                      {errors.message}
                    </p>
                  )}
                </div>
                <div className="pt-2">
                  <ShinyText
                    text="Send Message"
                    disabled={false}
                    speed={2}
                    className="mb-2"
                  />

                  <motion.button
                    type="submit"
                    disabled={loading}
                    whileHover={!loading ? { scale: 1.02 } : {}}
                    whileTap={!loading ? { scale: 0.98 } : {}}
                    className={`w-full border border-gray-600 text-gray-200 py-4 px-6 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl ${
                      loading ? "opacity-80 cursor-not-allowed" : ""
                    }`}
                  >
                    {loading ? (
                      <>
                        <svg
                          className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <FaPaperPlane className="mr-2" />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </div>
              </form>
            </GlareHover>
          </motion.div>
        </motion.div>
      </div>
      <Toaster
        position="top-center"
        toastOptions={{
          style: {
            background: "#1F2937",
            color: "#fff",
            border: "1px solid #374151",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
          },
        }}
      />
    </section>
  );
}

export default Contact;
