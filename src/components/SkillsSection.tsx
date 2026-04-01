import { motion } from "framer-motion";
import { skills } from "@/data/portfolio";

const categoryColors: Record<string, { bg: string; text: string; border: string }> = {
  Programming: { bg: "hsl(220 90% 55% / 0.08)", text: "hsl(220 80% 75%)", border: "hsl(220 90% 55% / 0.2)" },
  Databases: { bg: "hsl(180 70% 45% / 0.08)", text: "hsl(180 60% 70%)", border: "hsl(180 70% 45% / 0.2)" },
  "Machine Learning": { bg: "hsl(270 80% 60% / 0.08)", text: "hsl(270 70% 75%)", border: "hsl(270 80% 60% / 0.2)" },
  "Data Analysis": { bg: "hsl(25 90% 55% / 0.08)", text: "hsl(25 80% 72%)", border: "hsl(25 90% 55% / 0.2)" },
  Visualization: { bg: "hsl(330 80% 60% / 0.08)", text: "hsl(330 70% 75%)", border: "hsl(330 80% 60% / 0.2)" },
  "AI Architectures": { bg: "hsl(270 80% 60% / 0.08)", text: "hsl(270 70% 75%)", border: "hsl(270 80% 60% / 0.2)" },
  Frameworks: { bg: "hsl(180 70% 45% / 0.08)", text: "hsl(180 60% 70%)", border: "hsl(180 70% 45% / 0.2)" },
  Tools: { bg: "hsl(25 90% 55% / 0.08)", text: "hsl(25 80% 72%)", border: "hsl(25 90% 55% / 0.2)" },
  "Soft Skills": { bg: "hsl(330 80% 60% / 0.08)", text: "hsl(330 70% 75%)", border: "hsl(330 80% 60% / 0.2)" },
};

const fallback = { bg: "hsl(270 80% 60% / 0.08)", text: "hsl(270 70% 75%)", border: "hsl(270 80% 60% / 0.2)" };

const SkillsSection = () => (
  <section id="skills" className="py-24 px-6 bg-[hsl(250,20%,8%)]">
    <div className="max-w-6xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl sm:text-4xl font-bold mb-12 gradient-text"
      >
        Skills
      </motion.h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {Object.entries(skills).map(([category, items], i) => {
          const c = categoryColors[category] || fallback;
          return (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="rounded-2xl p-6 bg-card gradient-border transition-shadow duration-300 hover:shadow-[0_8px_30px_-8px_hsl(270,80%,60%,0.2)]"
            >
              <h3 className="font-semibold text-lg mb-4 text-foreground">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs px-3 py-1.5 rounded-full font-medium transition-colors duration-200"
                    style={{
                      background: c.bg,
                      color: c.text,
                      border: `1px solid ${c.border}`,
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);

export default SkillsSection;
