import { motion } from "framer-motion";
import { MapPin, Mail, Linkedin, Globe } from "lucide-react";
import { personalInfo } from "@/data/portfolio";

const HeroSection = () =>
<section className="relative min-h-screen flex items-center justify-center overflow-hidden">
    {/* Gradient background */}
    <div className="absolute inset-0 bg-gradient-to-br from-[hsl(270,80%,15%)] via-[hsl(220,90%,12%)] to-[hsl(180,70%,10%)]" />
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(270,80%,25%,0.4),transparent_60%)]" />
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,hsl(180,70%,20%,0.3),transparent_60%)] bg-stone-950" />

    <div className="relative z-10 text-center px-6 max-w-4xl">
      <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">

        Welcome to my portfolio
      </motion.p>
      <motion.h1
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
      className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight mb-4 gradient-text">

        {personalInfo.name.toUpperCase().split("").map((char, i) =>
      <motion.span
        key={i}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 + i * 0.05, type: "spring", stiffness: 150 }}>

            {char === " " ? "\u00A0" : char}
          </motion.span>
      )}
      </motion.h1>
      <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6 }}
      className="text-xl sm:text-2xl text-muted-foreground mb-8">

        {personalInfo.tagline}
      </motion.p>

      <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.8 }}
      className="flex flex-wrap justify-center gap-4 mb-10 text-sm text-muted-foreground">

        <span className="flex items-center gap-1"><MapPin size={14} /> {personalInfo.location}</span>
        <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-1 hover:text-foreground transition-colors">
          <Mail size={14} /> {personalInfo.email}
        </a>
        <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-foreground transition-colors">
          <Linkedin size={14} /> LinkedIn
        </a>
        <a href={personalInfo.portfolio} target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-foreground transition-colors">
          <Globe size={14} /> Portfolio
        </a>
      </motion.div>

      <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1 }}
      className="flex flex-wrap justify-center gap-4">

        <a
        href="#projects"
        className="px-8 py-3 rounded-full bg-gradient-to-r from-[hsl(270,80%,60%)] to-[hsl(220,90%,55%)] text-white font-semibold hover:opacity-90 transition-opacity">

          View Projects
        </a>
        <a
        href="#contact"
        className="px-8 py-3 rounded-full border border-[hsl(270,80%,60%)] text-foreground font-semibold hover:bg-[hsl(270,80%,60%,0.1)] transition-colors">

          Contact Me
        </a>
      </motion.div>
    </div>
  </section>;


export default HeroSection;