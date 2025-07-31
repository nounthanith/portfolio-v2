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
  FaArrowDown,
} from "react-icons/fa";
import ShinyText from "../ui/ShinyText";
import DecryptedText from "../ui/DecryptedText";
import ScrambledText from "../ui/ScrambleText";
import CircularText from "../ui/CircularText";

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

  const handleScrollDown = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section
      id="hero"
      className="relative w-full min-h-screen flex items-center justify-center py-20"
    >
      <div className="absolute ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            {/* Name */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-indigo-200">
              Hi, I'm{" "}
              <ShinyText
                text={name}
                disabled={false}
                speed={2}
                className="inline-block"
              />
            </h1>

            {/* Role */}
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

            {/* Contact Info */}
            <div className="mb-10 space-y-4 text-white/90">
              <div className="flex items-center justify-center lg:justify-start">
                <FaMapMarkerAlt className="mr-3 text-yellow-400 text-xl" />
                <ScrambledText
                  radius={40}
                  duration={1.5}
                  speed={0.15}
                  scrambleChars=".:"
                >
                  {address}
                </ScrambledText>
              </div>
              <div className="flex items-center justify-center lg:justify-start">
                <FaPhone className="mr-3 text-yellow-400 text-xl" />
                <ScrambledText
                  radius={40}
                  duration={1.5}
                  speed={0.15}
                  scrambleChars=".:"
                >
                  <a href={`tel:${phone}`} className="hover:underline">
                    {phone}
                  </a>
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
                  <a href={`mailto:${email}`} className="hover:underline">
                    {email}
                  </a>
                </ScrambledText>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex justify-center lg:justify-start space-x-5">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl text-white/80 hover:text-yellow-300 hover:-translate-y-1 transition-all duration-300"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Right: Avatar */}
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative group">
              <div className="absolute inset-0 rounded-full blur-lg opacity-20 group-hover:opacity-30 transition-all duration-500" />

              <img
                src={avatar}
                alt={name}
                className="w-64 h-64 rounded-full object-cover border-4 border-yellow-400/30 shadow-xl transform group-hover:scale-105 transition-all duration-500"
              />

              <CircularText
                text="NUON*THANITH*PORTFOLIO*"
                spinDuration={20}
                onHover="speedUp"
                className="absolute inset-0 "
              />

              <div className="absolute inset-0 rounded-full border-4 border-transparent group-hover:border-yellow-300/50 transition-all duration-500" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down Button */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <button
          onClick={handleScrollDown}
          className="group flex items-center justify-center p-2 bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 animate-bounce"
          aria-label="Scroll to about section"
        >
          <FaArrowDown className="transform group-hover:translate-y-0.5 transition-transform duration-300" />
        </button>
      </div>
    </section>
  );
}

export default Hero;
