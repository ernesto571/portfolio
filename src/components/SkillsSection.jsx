import { useState } from "react";
import ShootingStarsBackground from "./ShootingStarsBackground";

const skills = [
  // Frontend
  { name: "HTML/CSS", level: 95, category: "frontend" },
  { name: "JavaScript", level: 90, category: "frontend" },
  { name: "React", level: 90, category: "frontend" },
  { name: "Tailwind CSS", level: 90, category: "frontend" },
  // Backend
  { name: "Node.js", level: 80, category: "backend" },
  { name: "Express", level: 80, category: "backend" },
  { name: "Django", level: 75, category: "backend" },
  { name: "MongoDB", level: 80, category: "backend" },
  { name: "PostgreSQL", level: 75, category: "backend" },
  // Tools
  { name: "Git/GitHub", level: 90, category: "tools" },
  
  { name: "VS Code", level: 95, category: "tools" },
];

const categories = ["all", "frontend", "backend", "tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  
  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section 
      className="py-24 px-4 relative scroll-mt-16 min-h-screen flex items-center bg-gray-100  dark:bg-gray-900  transition-colors duration-300">
      <ShootingStarsBackground/>
      <div className="w-full max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-800 dark:text-white">
          My <span className="text-[#6859ba]">Skills</span>
        </h2>
        
        {/* Category Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={`
                px-6 py-3 rounded-full font-semibold transition-all duration-300 capitalize
                ${activeCategory === category
                  ? 'bg-[#6859ba] text-white shadow-lg scale-105'
                  : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-[#6859ba]/10 dark:hover:bg-[#6859ba]/20 hover:text-[#6859ba] border border-gray-200 dark:border-gray-600'
                }
              `}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-600 hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg text-gray-800 dark:text-white">
                  {skill.name}
                </h3>
              </div>
              
              {/* Progress Bar */}
              <div className="w-full bg-gray-200 dark:bg-gray-600 h-3 rounded-full overflow-hidden mb-2">
                <div
                  className="bg-gradient-to-r from-[#6859ba] to-[#7767d2] h-3 rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
              
              {/* Percentage */}
              <div className="text-right">
                <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
