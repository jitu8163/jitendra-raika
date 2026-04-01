import { motion } from "framer-motion";
import { skills } from "@/data/portfolio";

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
        {Object.entries(skills).map(([category, items], i) => (
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
                  className="text-xs px-3 py-1.5 rounded-full font-medium text-muted-foreground"
                  style={{
                    background: "hsl(250 20% 16%)",
                    border: "1px solid hsl(250 15% 24%)",
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;
