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
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-3xl sm:text-4xl font-bold mb-12 gradient-text"
      >
        Experience
      </motion.h2>
      <div className="relative">
        <motion.div
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[hsl(270,80%,60%)] via-[hsl(180,70%,45%)] to-[hsl(25,95%,55%)] origin-top"
        />

        <div className="space-y-12">
          {experience.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -40, filter: "blur(6px)" }}
              whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.15, ease: "easeOut" }}
              className="relative pl-12"
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.15 + 0.2, type: "spring", stiffness: 300 }}
                className={`absolute left-2.5 top-1 w-3 h-3 rounded-full ${colors[i % colors.length]} ring-4 ring-background`}
              />
              <motion.div
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="rounded-2xl bg-card p-6 gradient-border transition-shadow duration-300 hover:shadow-[0_8px_30px_-8px_hsl(270,80%,60%,0.2)]"
              >
                <p className="text-sm text-muted-foreground mb-1">{exp.period}</p>
                <h3 className="text-xl font-bold text-foreground">{exp.role}</h3>
                <p className="text-muted-foreground mb-4">
                  {exp.company} • {exp.location}
                </p>
                <ul className="space-y-2">
                  {exp.achievements.map((a, j) => (
                    <motion.li
                      key={j}
                      initial={{ opacity: 0, x: -15 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: i * 0.15 + j * 0.05 + 0.3 }}
                      className="text-sm text-muted-foreground flex gap-2"
                    >
                      <span className="text-[hsl(270,80%,60%)] mt-1">▹</span>
                      {a}
                    </motion.li>
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
