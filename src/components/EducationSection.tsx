import { motion } from "framer-motion";
import { education } from "@/data/portfolio";

const gradients = [
  "from-[hsl(270,80%,60%)] to-[hsl(220,90%,55%)]",
  "from-[hsl(180,70%,45%)] to-[hsl(220,90%,55%)]",
  "from-[hsl(25,95%,55%)] to-[hsl(330,80%,60%)]",
];

const EducationSection = () => (
  <section id="education" className="py-24 px-6">
    <div className="max-w-4xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl sm:text-4xl font-bold mb-12 gradient-text"
      >
        Education
      </motion.h2>
      <div className="grid sm:grid-cols-3 gap-6">
        {education.map((e, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="rounded-2xl bg-card p-6 text-center"
          >
            <div
              className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${gradients[i]} text-white font-bold text-lg mb-4`}
            >
              {e.score}
            </div>
            <h3 className="font-semibold text-foreground mb-1">{e.degree}</h3>
            <p className="text-sm text-muted-foreground mb-1">{e.institution}</p>
            <p className="text-xs text-muted-foreground">{e.period}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default EducationSection;
