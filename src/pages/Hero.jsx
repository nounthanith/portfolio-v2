import React from "react";
import personalData from "../utils/personalData";
import {
  FaGithub,
  FaFacebook,
  FaInstagram,
  FaTelegram,
  FaTwitter,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import ShinyText from "../ui/ShinyText";
import DecryptedText from "../ui/DecryptedText";
import ScrambledText from "../ui/ScrambleText";

function Hero() {
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

  const socialLinks = [
    { icon: <FaGithub />, url: github, name: "GitHub" },
    { icon: <FaFacebook />, url: facebook, name: "Facebook" },
    { icon: <FaInstagram />, url: instagram, name: "Instagram" },
    { icon: <FaTelegram />, url: telegram, name: "Telegram" },
    { icon: <FaTwitter />, url: twitter, name: "Twitter" },
  ];

  return (
    <div className="relative min-h-screen flex items-center overflow-hidden">
      {/* Enhanced Background with Gradient Overlay */}

      {/* Content Container with Better Spacing */}
      <section id="hero" className="w-full py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content with Improved Typography */}
            <div className="order-2 lg:order-1 text-center lg:text-left">
              {/* Name with Enhanced Shiny Effect */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-indigo-200">
                Hi, I'm{" "}
                <span className="">
                  <ShinyText
                    text={name}
                    disabled={false}
                    speed={2}
                    className="inline-block"
                  />
                </span>
              </h1>

              {/* Role with Smoother Decryption */}
              <div className="mb-8 max-w-2xl mx-auto lg:mx-0">
                <DecryptedText
                  text={role}
                  animateOn="view"
                  revealDirection="center"
                  speed={50}
                  maxIterations={20}
                  className="text-xl md:text-2xl font-medium text-indigo-200"
                />
              </div>

              {/* Contact Info with Better Grouping */}
              <div className="mb-10 space-y-4">
                <div className="flex items-center justify-center lg:justify-start">
                  <FaMapMarkerAlt className="mr-3 text-yellow-400 text-xl" />
                  <span className="text-white/90">
                    <ScrambledText
                      radius={40}
                      duration={1.5}
                      speed={0.15}
                      scrambleChars=".:"
                    >
                      {address}
                    </ScrambledText>
                  </span>
                </div>
                <div className="flex items-center justify-center lg:justify-start">
                  <FaPhone className="mr-3 text-yellow-400 text-xl" />
                  <ScrambledText
                    radius={40}
                    duration={1.5}
                    speed={0.15}
                    scrambleChars=".:"
                  >
                    <a href={`tel:${phone}`}>{phone}</a>
                  </ScrambledText>
                </div>
                <div className="flex items-center justify-center lg:justify-start">
                  <FaEnvelope className="mr-3 text-yellow-400 text-xl" />
                  <ScrambledText
                    radius={40}
                    duration={1.5}
                    speed={0.15}
                    scrambleChars=".:"
                  >
                    <a href={`mailto:${email}`}>{email}</a>
                  </ScrambledText>
                </div>
              </div>

              {/* Social Links with Hover Effects */}
              <div className="flex justify-center lg:justify-start space-x-5">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-2xl hover:text-yellow-300 hover:-translate-y-1 transition-all duration-300 text-white/80"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Avatar with Enhanced Effects */}
            <div className="order-1 lg:order-2 flex justify-center">
              <div className="relative group">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-yellow-300 to-yellow-500 blur-lg opacity-20 group-hover:opacity-30 transition-all duration-500"></div>
                <img
                  src={avatar}
                  alt={name}
                  className="w-64 h-64 sm:w-80 sm:h-80 rounded-full object-cover border-4 border-yellow-400/30 shadow-xl transform group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute inset-0 rounded-full border-4 border-transparent group-hover:border-yellow-300/50 transition-all duration-500"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
