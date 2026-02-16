import { motion } from "framer-motion";
import { Mail, Linkedin, Globe } from "lucide-react";
import { personalInfo, languages } from "@/data/portfolio";

const ContactSection = () => (
  <section id="contact" className="py-24 px-6">
    <div className="max-w-4xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 gradient-text">Get In Touch</h2>
        <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
          I'm always open to new opportunities and collaborations. Feel free to reach out!
        </p>
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
          <a
            href={personalInfo.portfolio}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-full border border-[hsl(25,95%,55%)] text-foreground hover:bg-[hsl(25,95%,55%,0.1)] transition-colors"
          >
            <Globe size={18} /> Portfolio
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

    <div className="mt-16 text-center text-xs text-muted-foreground">
      © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
    </div>
  </section>
);

export default ContactSection;
