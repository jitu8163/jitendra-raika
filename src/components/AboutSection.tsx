import { motion } from "framer-motion";
import { personalInfo } from "@/data/portfolio";

const AboutSection = () => (
  <section id="about" className="py-24 px-6">
    <div className="max-w-4xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-3xl sm:text-4xl font-bold mb-8 gradient-text"
      >
        About Me
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
        className="rounded-2xl bg-card p-8 gradient-border"
      >
        <p className="text-muted-foreground leading-relaxed text-lg">
          {personalInfo.summary}
        </p>
      </motion.div>
    </div>
  </section>
);

export default AboutSection;
