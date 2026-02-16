import { motion } from "framer-motion";
import { Award } from "lucide-react";
import { certifications } from "@/data/portfolio";

const CertificationsSection = () => (
  <section className="py-24 px-6 bg-[hsl(250,20%,8%)]">
    <div className="max-w-4xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl sm:text-4xl font-bold mb-12 gradient-text"
      >
        Certifications
      </motion.h2>
      <div className="grid sm:grid-cols-2 gap-4">
        {certifications.map((cert, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="flex items-start gap-3 rounded-xl bg-card p-4"
          >
            <Award size={18} className="text-[hsl(270,80%,60%)] mt-0.5 shrink-0" />
            <span className="text-sm text-muted-foreground">{cert}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default CertificationsSection;
