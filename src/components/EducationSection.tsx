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
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-3xl sm:text-4xl font-bold mb-12 gradient-text"
      >
        Education
      </motion.h2>
      <div className="grid sm:grid-cols-3 gap-6">
        {education.map((e, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50, rotateX: 15 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: i * 0.15, ease: "easeOut" }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="rounded-2xl bg-card p-6 text-center gradient-border shadow-[0_4px_20px_-4px_hsl(270,80%,60%,0.15),0_8px_16px_-6px_rgba(0,0,0,0.4)] transition-all duration-300 hover:shadow-[0_12px_40px_-8px_hsl(270,80%,60%,0.25),0_16px_32px_-10px_rgba(0,0,0,0.5)]"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.15 + 0.3, type: "spring", stiffness: 250 }}
              className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${gradients[i]} text-white font-bold text-lg mb-4`}
            >
              {e.score}
            </motion.div>
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
