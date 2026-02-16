import { motion } from "framer-motion";
import { personalInfo } from "@/data/portfolio";

const AboutSection = () => (
  <section id="about" className="py-24 px-6">
    <div className="max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 gradient-text">About Me</h2>
        <div className="rounded-2xl bg-card p-8 gradient-border">
          <p className="text-muted-foreground leading-relaxed text-lg">
            {personalInfo.summary}
          </p>
        </div>
      </motion.div>
    </div>
  </section>
);

export default AboutSection;
