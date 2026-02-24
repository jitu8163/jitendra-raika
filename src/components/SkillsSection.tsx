import { motion } from "framer-motion";
import { skills } from "@/data/portfolio";

const colorMap: Record<string, string> = {
  Programming: "from-[hsl(220,90%,55%)] to-[hsl(220,90%,45%)]",
  Databases: "from-[hsl(180,70%,45%)] to-[hsl(180,70%,35%)]",
  "Machine Learning": "from-[hsl(270,80%,60%)] to-[hsl(270,80%,50%)]",
  "Data Analysis": "from-[hsl(25,95%,55%)] to-[hsl(25,95%,45%)]",
  Visualization: "from-[hsl(330,80%,60%)] to-[hsl(330,80%,50%)]",
  "AI Architectures": "from-[hsl(270,80%,60%)] to-[hsl(220,90%,55%)]",
  Frameworks: "from-[hsl(180,70%,45%)] to-[hsl(220,90%,55%)]",
  Tools: "from-[hsl(25,95%,55%)] to-[hsl(330,80%,60%)]",
  "Soft Skills": "from-[hsl(330,80%,60%)] to-[hsl(270,80%,60%)]"
};

const SkillsSection = () =>
<section id="skills" className="py-24 px-6 bg-[hsl(250,20%,8%)]">
    <div className="max-w-6xl mx-auto shadow-md">
      <motion.h2
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-3xl sm:text-4xl font-bold mb-12 gradient-text">

        Skills
      </motion.h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {Object.entries(skills).map(([category, items], i) =>
      <motion.div
        key={category}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: i * 0.05 }}
        className="rounded-2xl p-6 bg-muted">

            <h3 className="font-semibold text-lg mb-4 text-foreground">{category}</h3>
            <div className="flex flex-wrap gap-2">
              {items.map((skill) =>
          <span
            key={skill}
            className={`text-xs px-3 py-1 rounded-full bg-gradient-to-r ${colorMap[category] || "from-primary to-secondary"} text-white font-medium`}>

                  {skill}
                </span>
          )}
            </div>
          </motion.div>
      )}
      </div>
    </div>
  </section>;


export default SkillsSection;