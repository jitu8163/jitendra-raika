import { motion } from "framer-motion";
import { skills } from "@/data/portfolio";

const SkillsSection = () => (
  <section id="skills" className="py-24 px-6">
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
            className="rounded-2xl p-6 bg-card gradient-border shadow-[0_4px_20px_-4px_hsl(270,80%,60%,0.15),0_8px_16px_-6px_rgba(0,0,0,0.4)] transition-all duration-300 hover:shadow-[0_12px_40px_-8px_hsl(270,80%,60%,0.25),0_16px_32px_-10px_rgba(0,0,0,0.5)]"
          >
            <h3 className="font-semibold text-lg mb-4 text-foreground">{category}</h3>
            <div className="flex flex-wrap gap-2">
              {items.map((skill) => (
                <span
                  key={skill}
                  className="text-xs px-3 py-1.5 rounded-full font-medium text-foreground/80"
                  style={{
                    background: "hsla(0, 0%, 100%, 0.07)",
                    border: "1px solid hsla(0, 0%, 100%, 0.1)",
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
