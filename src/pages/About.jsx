import React from "react";
import ShinyText from "../ui/ShinyText";
import aboutData from "../utils/aboutData";
import ScrambledText from "../ui/ScrambleText";
import SpotlightCard from "../ui/SpotlightCard";
import { FaCode, FaStar } from "react-icons/fa";
import Marquee from "react-fast-marquee";
import Education from "./Education";
import SkillExperience from "../components/SkillExperience";

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
            spotlightColor="rgba(245, 40, 145, 0.8)"
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
                  className="font-medium cursor-grab"
                  radius={40}
                  duration={1.5}
                  speed={0.15}
                  scrambleChars="__"
                >
                  {aboutData.bio}
                </ScrambledText>
              </div>
            </div>
          </SpotlightCard>

          {/* Skills */}
          <SpotlightCard
            className="h-full border border-gray-700/50 rounded-xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm hover:border-indigo-400/50 transition-all duration-500 overflow-hidden group"
            spotlightColor="rgba(46, 201, 202, 0.72)"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

            <div className="p-2 h-full flex flex-col relative z-10">
              <div className="flex items-center gap-3 mb-8 group-hover:translate-x-1 transition-transform duration-300">
                <div className="relative">
                  <FaStar className="text-indigo-400 text-xl relative z-10" />
                  {/* <div className="absolute inset-0 bg-indigo-400 rounded-full blur-md opacity-0 group-hover:opacity-70 transition-opacity duration-500"></div> */}
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
                <div className="relative p-1 rounded-xl backdrop-blur-md border border-gray-700/60 group-hover:border-indigo-400/40 transition-all duration-500 shadow-md hover:shadow-indigo-500/20">
                  <div className="py-4 px-2 rounded-xl  backdrop-blur-sm border border-gray-700/40">
                    {/* Skills Section */}
                    <div className="">
                      <h3 className="text-sm font-semibold text-gray-400 mb-3 ml-1 tracking-wide uppercase z-0">
                        Skills
                      </h3>
                      <Marquee
                        autoFill
                        speed={22}
                        pauseOnHover={true}
                        gradient={false}
                        direction="left"
                      >
                        <div className="flex gap-4 px-2 py-1 overflow-visible">
                          {aboutData.skills?.map((skill, index) => (
                            <div
                              key={index}
                              className="group/tool relative flex flex-col items-center"
                            >
                              {/* Tooltip above */}
                              <span className="absolute bottom-1 mb-2 left-1/2 transform -translate-x-1/2 px-3 py-1.5 bg-black text-white text-xs font-medium rounded-md whitespace-nowrap opacity-0 group-hover/tool:opacity-100 transition-all duration-300 shadow-lg z-100">
                                { skill.name}
                                {/* Tooltip arrow */}
                                <div className="absolute -bottom-1 left-1/2 w-2 h-2 bg-black transform -translate-x-1/2 rotate-45" />
                              </span>

                              {/* Icon container */}
                              <div className="z-10 relative p-2.5 rounded-xl bg-gray-800/60 hover:bg-gradient-to-br from-purple-500/10 to-indigo-500/10 transition-all duration-300 border border-gray-700/60 hover:border-purple-400/30 hover:shadow-lg hover:shadow-purple-500/10">
                                <img
                                  className="w-auto h-8 transition-transform duration-300 group-hover/tool:scale-110"
                                  src={skill.image}
                                  alt={skill.name}
                                />
                              </div>

                              {/* Glow dot below icon */}
                              <div className="mt-1.5 w-1 h-1 bg-purple-400 rounded-full opacity-0 group-hover/tool:opacity-100 transition-opacity duration-300" />
                            </div>
                          ))}
                        </div>
                      </Marquee>
                    </div>

                    {/* Tools Section */}
                    <div className="">
                      <h3 className="text-sm font-semibold text-gray-400 mb-3 ml-1 tracking-wide uppercase z-0">
                        Tools
                      </h3>
                      <Marquee
                        autoFill
                        speed={22}
                        pauseOnHover={true}
                        gradient={false}
                        direction="right"
                      >
                        <div className="flex gap-4 px-2 py-1 overflow-visible">
                          {aboutData.tool?.map((tool, index) => (
                            <div
                              key={index}
                              className="group/tool relative flex flex-col items-center"
                            >
                              {/* Tooltip above */}
                              <span className="absolute bottom-1 mb-2 left-1/2 transform -translate-x-1/2 px-3 py-1.5 bg-black text-white text-xs font-medium rounded-md whitespace-nowrap opacity-0 group-hover/tool:opacity-100 transition-all duration-300 shadow-lg z-100">
                                {tool.name}
                                {/* Tooltip arrow */}
                                <div className="absolute -bottom-1 left-1/2 w-2 h-2 bg-black transform -translate-x-1/2 rotate-45" />
                              </span>

                              {/* Icon container */}
                              <div className="z-10 relative p-2.5 rounded-xl bg-gray-800/60 hover:bg-gradient-to-br from-purple-500/10 to-indigo-500/10 transition-all duration-300 border border-gray-700/60 hover:border-purple-400/30 hover:shadow-lg hover:shadow-purple-500/10">
                                <img
                                  className="w-8 h-8 transition-transform duration-300 group-hover/tool:scale-110"
                                  src={tool.image}
                                  alt={tool.name}
                                />
                              </div>

                              {/* Glow dot below icon */}
                              <div className="mt-1.5 w-1 h-1 bg-purple-400 rounded-full opacity-0 group-hover/tool:opacity-100 transition-opacity duration-300" />
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
      <SkillExperience />   
    </section>
  );
}

export default About;
