import { motion } from "framer-motion";
import { experience } from "@/data/portfolio";

const colors = [
  "bg-[hsl(270,80%,60%)]",
  "bg-[hsl(180,70%,45%)]",
  "bg-[hsl(25,95%,55%)]",
];

const ExperienceSection = () => (
  <section id="experience" className="py-24 px-6">
    <div className="max-w-4xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl sm:text-4xl font-bold mb-12 gradient-text"
      >
        Experience
      </motion.h2>
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[hsl(270,80%,60%)] via-[hsl(180,70%,45%)] to-[hsl(25,95%,55%)]" />

        <div className="space-y-12">
          {experience.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative pl-12"
            >
              <div className={`absolute left-2.5 top-1 w-3 h-3 rounded-full ${colors[i % colors.length]} ring-4 ring-background`} />
              <div className="rounded-2xl bg-card p-6">
                <p className="text-sm text-muted-foreground mb-1">{exp.period}</p>
                <h3 className="text-xl font-bold text-foreground">{exp.role}</h3>
                <p className="text-muted-foreground mb-4">
                  {exp.company} • {exp.location}
                </p>
                <ul className="space-y-2">
                  {exp.achievements.map((a, j) => (
                    <li key={j} className="text-sm text-muted-foreground flex gap-2">
                      <span className="text-[hsl(270,80%,60%)] mt-1">▹</span>
                      {a}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default ExperienceSection;
