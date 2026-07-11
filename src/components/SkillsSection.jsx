import { useState } from "react";
import { cn } from "../lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt, FaGithub, FaFigma, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiPostman, SiMongodb, SiExpress, SiElectron, SiTypescript } from "react-icons/si";
import { VscCode } from "react-icons/vsc";
import { TbBrandReactNative } from "react-icons/tb";

const skills = [
  { name: "HTML/CSS", category: "frontend", icon: <div className="flex gap-1"><FaHtml5 className="text-[#E34F26]" /><FaCss3Alt className="text-[#1572B6]" /></div> },
  { name: "JavaScript", category: "frontend", icon: <FaJs className="text-[#F7DF1E]" /> },
  { name: "TypeScript", category: "frontend", icon: <SiTypescript className="text-[#3178C6]" /> },
  { name: "React", category: "frontend", icon: <FaReact className="text-[#61DAFB]" /> },
  { name: "React Native", category: "frontend", icon: <TbBrandReactNative className="text-[#61DAFB]" /> },
  { name: "Tailwind CSS", category: "frontend", icon: <SiTailwindcss className="text-[#06B6D4]" /> },
  { name: "Git/GitHub", category: "tools", icon: <div className="flex gap-1"><FaGitAlt className="text-[#F05032]" /><FaGithub className="text-foreground" /></div> },
  { name: "Postman", category: "tools", icon: <SiPostman className="text-[#FF6C37]" /> },
  { name: "Figma", category: "tools", icon: <FaFigma className="text-[#F24E1E]" /> },
  { name: "VS Code", category: "tools", icon: <VscCode className="text-[#007ACC]" /> },
  { name: "Node.js", category: "backend", icon: <FaNodeJs className="text-[#339933]" /> },
  { name: "Express", category: "backend", icon: <SiExpress className="text-foreground" /> },
  { name: "MongoDB", category: "backend", icon: <SiMongodb className="text-[#47A248]" /> },
  { name: "Electron", category: "frontend", icon: <SiElectron className="text-[#47848F]" /> },
];

const categories = ["all", "frontend", "backend", "tools"];

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const filterskills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );
  
  return (
    <section id="skills" className="py-24 px-4 relative overflow-hidden">
      <div className="container mx-auto max-w-5xl relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize cursor-pointer",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}>
              {category}
            </button>
          ))}
        </div>
        <motion.div layout className="flex flex-wrap justify-center gap-4 sm:gap-6">
          <AnimatePresence>
            {filterskills.map((skill, key) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                key={skill.name}
                className="w-[calc(50%-0.5rem)] sm:w-[calc(33.333%-1rem)] lg:w-[calc(25%-1.25rem)]">
                <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} scale={1.03} transitionSpeed={800}>
                  <div className="card-surface card-hover p-4 sm:p-6 flex flex-col items-center justify-center gap-3 hover:border-primary/40">
                    <div className="text-3xl sm:text-4xl">
                      {skill.icon}
                    </div>
                    <h3 className="font-semibold text-center text-sm sm:text-base">{skill.name}</h3>
                  </div>
                </Tilt>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
