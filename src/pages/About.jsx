import React from "react";
import ShinyText from "../ui/ShinyText";
import aboutData from "../utils/aboutData";
import ScrambledText from "../ui/ScrambleText";
import SpotlightCard from "../ui/SpotlightCard";
import { FaCode, FaStar } from "react-icons/fa";
import Marquee from "react-fast-marquee";
import Education from "./Education";

function About() {
  return (
    <section id="about" className="w-full py-20 relative overflow-hidden">
    

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex justify-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-center relative">
            <ShinyText text="About Me" disabled={false} speed={2} />
          </h2>
        </div>

        {/* Grid: Bio + Skills */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Bio */}
          <SpotlightCard
            className="h-full border border-gray-700/50 rounded-xl bg-gray-800/30 backdrop-blur-sm hover:border-yellow-400/30 transition-all duration-300"
            spotlightColor="rgba(190, 90, 19, 0.1)"
          >
            <div className="p-2 h-full flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <FaCode className="text-yellow-400 text-xl" />
                <ShinyText
                  text="Who am I?"
                  disabled={false}
                  speed={2}
                  className="text-2xl md:text-3xl font-bold"
                />
              </div>
              <div className="text-base md:text-lg text-gray-300 leading-relaxed flex-grow">
                <ScrambledText
                  className="font-medium"
                  radius={40}
                  duration={1.5}
                  speed={0.15}
                  scrambleChars=".:"
                >
                  {aboutData.bio}
                </ScrambledText>
              </div>
            </div>
          </SpotlightCard>

          {/* Skills */}
          <SpotlightCard
            className="h-full border border-gray-700/50 rounded-xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm hover:border-indigo-400/50 transition-all duration-500 overflow-hidden group"
            spotlightColor="rgba(139, 92, 246, 0.15)"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

            <div className="p-2 h-full flex flex-col relative z-10">
              <div className="flex items-center gap-3 mb-8 group-hover:translate-x-1 transition-transform duration-300">
                <div className="relative">
                  <FaStar className="text-indigo-400 text-xl relative z-10" />
                  <div className="absolute inset-0 bg-indigo-400 rounded-full blur-md opacity-0 group-hover:opacity-70 transition-opacity duration-500"></div>
                </div>
                <ShinyText
                  text="My Skills"
                  disabled={false}
                  speed={2}
                  className="text-2xl md:text-3xl font-bold"
                />
              </div>

              <div className="relative group">
                {/* Glowing background hover layer */}
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 via-purple-500/10 to-pink-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />

                {/* Main container */}
                <div className="relative p-1 rounded-xl bg-gray-900/80 backdrop-blur-md border border-gray-700/60 group-hover:border-indigo-400/40 transition-all duration-500 shadow-md hover:shadow-indigo-500/20">
                  <div className="p-6 rounded-xl bg-gray-800/40 backdrop-blur-sm border border-gray-700/40">
                    {/* Skills Section */}
                    <div className="mb-8">
                      <h3 className="text-sm font-semibold text-gray-400 mb-3 ml-1 tracking-wide uppercase">
                        Skills
                      </h3>
                      <Marquee
                        autoFill
                        speed={22}
                        pauseOnHover
                        gradientColor="rgb(17 24 39)"
                      >
                        <div className="flex gap-3 px-2">
                          {aboutData.skills?.map((skill, index) => (
                            <div
                              key={index}
                              className="relative px-4 py-2.5 rounded-md bg-gray-700/60 hover:bg-indigo-500/20 transition duration-300 border border-gray-600 hover:border-indigo-400/40 group/skill"
                            >
                              <span className="text-sm font-medium text-gray-200 group-hover/skill:text-white transition-colors duration-300">
                                {skill}
                              </span>
                              <div className="absolute bottom-0 left-1/2 w-2 h-0.5 bg-indigo-400 rounded-full opacity-0 group-hover/skill:opacity-100 transition-opacity duration-300 transform -translate-x-1/2" />
                            </div>
                          ))}
                        </div>
                      </Marquee>
                    </div>

                    {/* Tools Section */}
                    <div>
                      <h3 className="text-sm font-semibold text-gray-400 mb-3 ml-1 tracking-wide uppercase">
                        Tools
                      </h3>
                      <Marquee
                        autoFill
                        speed={22}
                        pauseOnHover
                        gradientColor="rgb(17 24 39)"
                        direction="right"
                      >
                        <div className="flex gap-3 px-2">
                          {aboutData.tool?.map((tool, index) => (
                            <div
                              key={index}
                              className="relative px-4 py-2.5 rounded-md bg-gray-700/60 hover:bg-purple-500/20 transition duration-300 border border-gray-600 hover:border-purple-400/40 group/tool"
                            >
                              <span className="text-sm font-medium text-gray-200 group-hover/tool:text-white transition-colors duration-300">
                                {tool}
                              </span>
                              <div className="absolute bottom-0 left-1/2 w-2 h-0.5 bg-purple-400 rounded-full opacity-0 group-hover/tool:opacity-100 transition-opacity duration-300 transform -translate-x-1/2" />
                            </div>
                          ))}
                        </div>
                      </Marquee>
                    </div>
                  </div>

                  {/* Decorative corner borders */}
                  <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-indigo-400/40 rounded-tl-lg opacity-0 group-hover:opacity-100 transition duration-500" />
                  <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-purple-400/40 rounded-tr-lg opacity-0 group-hover:opacity-100 transition duration-500" />
                  <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-purple-400/40 rounded-bl-lg opacity-0 group-hover:opacity-100 transition duration-500 delay-100" />
                  <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-indigo-400/40 rounded-br-lg opacity-0 group-hover:opacity-100 transition duration-500 delay-100" />
                </div>
              </div>

              
            </div>
          </SpotlightCard>
        </div>
      </div>
      <Education />
    </section>
  );
}

export default About;
