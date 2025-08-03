import React, { useState } from "react";
import ShinyText from "../ui/ShinyText";
import { skillExperience, categories } from "../utils/skillExperience";
import GlareHover from "../ui/GlareHover";

const SkillExperience = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [showAll, setShowAll] = useState(false);
  
  // Filter skills based on selected category
  const filteredSkills = selectedCategory === "all" 
    ? skillExperience 
    : skillExperience.filter(skill => skill.category === selectedCategory);
    
  // Sort skills by experience (highest first)
  const sortedSkills = [...filteredSkills].sort((a, b) => b.experience - a.experience);
  
  // Get skills to display (first 6 or all)
  const displayedSkills = showAll ? sortedSkills : sortedSkills.slice(0, 6);
  
  // Format category name for display
  const formatCategoryName = (category) => {
    return category.charAt(0).toUpperCase() + category.slice(1);
  };

  return (
    <section className="pt-16 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-bold mb-4">
            <ShinyText
              text="Skills & Experience"
              disabled={false}
              speed={2}
            />
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
            Technologies I've been working with recently
          </p>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            <button
              onClick={() => setSelectedCategory("all")}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                selectedCategory === "all"
                  ? "bg-white/10 text-white border border-white/20"
                  : "bg-black/30 text-gray-300 hover:bg-white/5 border border-gray-800"
              }`}
            >
              All Skills
            </button>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? "bg-white/10 text-white border border-white/20"
                    : "bg-black/30 text-gray-300 hover:bg-white/5 border border-gray-800"
                }`}
              >
                {formatCategoryName(category)}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {displayedSkills.length > 0 ? (
            displayedSkills.map((skill, index) => (
              <GlareHover
                key={index}
                className="p-6 bg-gradient-to-br from-gray-900/80 to-gray-800/80 rounded-xl border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10"
              >
                <div className="flex w-full justify-between items-center mb-4">
                  <h3 className="text-xl font-semibold text-white">
                    {skill.name}
                  </h3>
                  <span className="text-blue-400 font-medium text-sm bg-blue-900/30 px-3 py-1 rounded-full border border-blue-500/20">
                    {skill.experience}%
                  </span>
                </div>

                <div className="w-full bg-gray-700/30 rounded-full h-2.5 mb-2 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gray-600 transition-all duration-1000 ease-out"
                    style={{
                      width: `${skill.experience}%`,
                      transitionDelay: `${index * 50}ms`,
                      boxShadow: '0 0 15px rgba(99, 102, 241, 0.3)'
                    }}
                  />
                </div>

                <div className="flex items-center justify-between mt-3 text-xs text-gray-400 w-full">
                  <span>Beginner</span>
                  <div className="flex-1 px-2">
                    <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-600/50 to-transparent" />
                  </div>
                  <span>Expert</span>
                </div>
              </GlareHover>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-gray-400">No skills found in this category.</p>
            </div>
          )}
        </div>
        
        {filteredSkills.length > 6 && (
          <div className="text-center mt-8">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-6 py-2 text-sm font-medium text-blue-400 hover:text-white border border-blue-400 hover:border-white rounded-md transition-all duration-200"
            >
              {showAll ? 'Show Less' : 'Show All Skills'}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default SkillExperience;