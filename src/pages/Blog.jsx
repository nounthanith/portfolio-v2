import React from "react";
import ShinyText from "../ui/ShinyText";
import project from "../utils/project";
import SpotlightCard from "../ui/SpotlightCard";
import StarBorder from "../ui/StarBorder";
import { Fa500Px, FaGithub, FaLaptop, FaLink } from "react-icons/fa";

function Blog() {
  return (
    <section id="blog" className="w-full relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mt-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            <ShinyText text="Blog" disabled={false} speed={2} />
          </h2>
          <p className="text-lg text-gray-300 mt-4 max-w-xl mx-auto">
            Discover my journey and insights through my blog posts.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {project.map((item, index) => (
            <SpotlightCard
              key={index}
              className="group relative border border-gray-700/40 rounded-xl bg-gray-800/40 backdrop-blur-md p-2 hover:shadow-lg transition-all duration-300"
              spotlightColor="rgba(24, 0, 0, 0.57)"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-40 object-cover rounded-md mb-4 group-hover:scale-105 transition-transform duration-300"
              />
              <ShinyText className="text-xl font-bold mb-2" text={item.name} disabled={false} speed={2} />
              <p className="text-gray-300 text-sm mb-4">{item.description}</p>

              <div className="flex justify-start items-center gap-1 mb-4">
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white border border-gray-600 px-3 py-1 rounded-md hover:opacity-80 flex items-center gap-1 hover:bg-gray-700"
                >
                  Live Demo
                  <FaLink />
                </a>
                <a
                  href={item.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white border border-gray-600 px-3 py-1 rounded-md hover:bg-gray-700 flex items-center gap-1"
                >
                  GitHub
                  <FaGithub />
                </a>
              </div>

              <p className="text-gray-300 text-sm mb-4">Technologies:</p>
              <div className="flex justify-start items-center gap-1 mb-4">
                <div className="flex flex-wrap items-center gap-1">
                  {item.technologies.map((tech, index) => (
                    <ShinyText
                      key={index}
                      className="text-sm  border border-gray-600 px-2 py-1 rounded-md hover:bg-gray-700"
                      text={tech}
                      disabled={false}
                      speed={2}
                    />
                  ))}
                </div> 
              </div>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Blog;
