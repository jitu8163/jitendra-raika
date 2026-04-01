import { motion } from "framer-motion";
import { Award } from "lucide-react";
import { certifications } from "@/data/portfolio";

const CertificationsSection = () => (
  <section className="py-24 px-6 bg-[hsl(250,20%,8%)]">
    <div className="max-w-4xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-3xl sm:text-4xl font-bold mb-12 gradient-text"
      >
        Certifications
      </motion.h2>
      <div className="grid sm:grid-cols-2 gap-4">
        {certifications.map((cert, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.07, ease: "easeOut" }}
            whileHover={{ y: -3, transition: { duration: 0.2 } }}
            className="flex items-start gap-3 rounded-xl bg-card p-4 transition-shadow duration-300 hover:shadow-[0_6px_20px_-6px_hsl(270,80%,60%,0.15)]"
          >
            <motion.div
              initial={{ rotate: -90, scale: 0 }}
              whileInView={{ rotate: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 + 0.2, type: "spring" }}
            >
              <Award size={18} className="text-[hsl(270,80%,60%)] mt-0.5 shrink-0" />
            </motion.div>
            <span className="text-sm text-muted-foreground">{cert}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default CertificationsSection;
