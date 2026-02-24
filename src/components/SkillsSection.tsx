import { motion } from "framer-motion";
import { skills } from "@/data/portfolio";

const colorMap: Record<string, { bg: string; text: string; border: string }> = {
  Programming: { bg: "hsl(220 90% 55% / 0.12)", text: "hsl(220 90% 70%)", border: "hsl(220 90% 55% / 0.25)" },
  Databases: { bg: "hsl(180 70% 45% / 0.12)", text: "hsl(180 70% 65%)", border: "hsl(180 70% 45% / 0.25)" },
  "Machine Learning": { bg: "hsl(270 80% 60% / 0.12)", text: "hsl(270 80% 75%)", border: "hsl(270 80% 60% / 0.25)" },
  "Data Analysis": { bg: "hsl(25 95% 55% / 0.12)", text: "hsl(25 95% 70%)", border: "hsl(25 95% 55% / 0.25)" },
  Visualization: { bg: "hsl(330 80% 60% / 0.12)", text: "hsl(330 80% 75%)", border: "hsl(330 80% 60% / 0.25)" },
  "AI Architectures": { bg: "hsl(250 80% 60% / 0.12)", text: "hsl(250 80% 75%)", border: "hsl(250 80% 60% / 0.25)" },
  Frameworks: { bg: "hsl(200 80% 50% / 0.12)", text: "hsl(200 80% 70%)", border: "hsl(200 80% 50% / 0.25)" },
  Tools: { bg: "hsl(45 90% 50% / 0.12)", text: "hsl(45 90% 70%)", border: "hsl(45 90% 50% / 0.25)" },
  "Soft Skills": { bg: "hsl(150 60% 45% / 0.12)", text: "hsl(150 60% 65%)", border: "hsl(150 60% 45% / 0.25)" },
};

const SkillsSection = () =>
<section id="skills" className="py-24 px-6 bg-[hsl(250,20%,8%)]">
    <div className="max-w-6xl mx-auto">
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
              {items.map((skill) => {
            const colors = colorMap[category] || { bg: "hsl(var(--primary) / 0.12)", text: "hsl(var(--primary))", border: "hsl(var(--primary) / 0.25)" };
            return (
              <span
                key={skill}
                className="text-xs px-3 py-1.5 rounded-full font-medium border"
                style={{ backgroundColor: colors.bg, color: colors.text, borderColor: colors.border }}>
                {skill}
              </span>
            );
          })}
            </div>
          </motion.div>
      )}
      </div>
    </div>
  </section>;


export default SkillsSection;