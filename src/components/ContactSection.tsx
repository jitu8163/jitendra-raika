import { motion } from "framer-motion";
import { Mail, Linkedin } from "lucide-react";
import { personalInfo, languages } from "@/data/portfolio";

const ContactSection = () => (
  <section id="contact" className="py-24 px-6">
    <div className="max-w-4xl mx-auto text-center">
      <motion.h2
        initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-3xl sm:text-4xl font-bold mb-6 gradient-text"
      >
        Get In Touch
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
        className="text-muted-foreground mb-8 max-w-lg mx-auto"
      >
        I'm always open to new opportunities and collaborations. Feel free to reach out!
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <a
            href={`mailto:${personalInfo.email}`}
            className="flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[hsl(270,80%,60%)] to-[hsl(220,90%,55%)] text-white font-semibold hover:opacity-90 transition-opacity"
          >
            <Mail size={18} /> Email Me
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-full border border-[hsl(180,70%,45%)] text-foreground hover:bg-[hsl(180,70%,45%,0.1)] transition-colors"
          >
            <Linkedin size={18} /> LinkedIn
          </a>
        </div>
        <div className="flex justify-center gap-6 text-sm text-muted-foreground">
          {languages.map((l) => (
            <span key={l.name}>
              {l.name}: <span className="text-foreground">{l.level}</span>
            </span>
          ))}
        </div>
      </motion.div>
    </div>

    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.8 }}
      className="mt-16 text-center text-xs text-muted-foreground"
    >
      © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
    </motion.div>
  </section>
);

export default ContactSection;
