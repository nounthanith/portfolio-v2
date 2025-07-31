import React from "react";
import ShinyText from "../ui/ShinyText";
import educationData from "../utils/education";
import {
  FaGraduationCap,
  FaLaptopCode,
  FaLanguage,
  FaSchool,
} from "react-icons/fa";
import GlareHover from "../ui/GlareHover";

const getIcon = (icon) => {
  switch (icon) {
    case "🎓":
      return <FaGraduationCap className="text-2xl" />;
    case "💻":
      return <FaLaptopCode className="text-2xl" />;
    case "🌐":
      return <FaLanguage className="text-2xl" />;
    case "🏫":
      return <FaSchool className="text-2xl" />;
    default:
      return <span className="text-2xl">{icon}</span>;
  }
};

function Education() {
  return (
    <section id="education" className="w-full mt-10 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <ShinyText
              text="Education & Experience"
              disabled={false}
              speed={2}
              className=""
            />
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            My educational journey and professional development in the tech
            industry
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-2 relative">
            {/* Vertical Timeline Line */}
            <div className="absolute left-1/2 w-0.5 inset-y-0 bg-gradient-to-b from-indigo-500/20 via-purple-500/30 to-transparent -translate-x-1/2 hidden md:block" />

            {educationData.map((edu, index) => (
              <div
                key={edu.id}
                className={`relative flex flex-col md:flex-row items-center ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline Card */}
                <div
                  className={`w-full md:w-5/12 ${
                    index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                  }`}
                >
                  <GlareHover
                    className="p-4 w-full h-full text-center"
                    glareColor="#ffffff"
                    glareOpacity={0.2}
                    glareAngle={-30}
                    glareSize={400}
                    transitionDuration={1000}
                    playOnce={false}
                  >
                    <div className="relative z-10 group-hover:scale-[1.01] transition-transform duration-500">
                     

                      {/* Duration */}
                      <div className="inline-block text-xs px-3 py-1 rounded-full bg-indigo-900/30 text-indigo-300 border border-indigo-800/50">
                        {edu.duration}
                      </div>

                      {/* Title */}
                      <div>
                      <ShinyText className="text-xl font-bold font-mono py-2" text={edu.title} disabled={false} speed={4} />
                      </div>

                      {/* Institution */}
                      <p className="text-indigo-300 font-medium font-mono">
                        {edu.institution}
                      </p>

                      {/* Description */}
                      

                      {/* Details List */}
                      <ul className="space-y-2 mt-3">
                        {edu.details &&
                          edu.details.map((detail, i) => (
                            <li key={i} className="flex items-start">
                              <span className="text-indigo-400 mr-2 mt-1">
                                ▹
                              </span>
                              <span className="text-gray-300 text-sm">
                                {detail}
                              </span>
                            </li>
                          ))}
                      </ul>
                    </div>
                  </GlareHover>
                </div>

                {/* Timeline Dot (Desktop Only) */}
                <div className="hidden md:flex items-center justify-center w-16 h-16 rounded-full bg-indigo-500/10 border-2 border-indigo-500/30 mx-4">
                  <div className="w-3 h-3 rounded-full bg-indigo-400 animate-ping" />
                </div>

                {/* Spacer for symmetry */}
                <div className="hidden md:block w-5/12"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
