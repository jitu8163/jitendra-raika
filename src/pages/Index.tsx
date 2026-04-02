import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import EducationSection from "@/components/EducationSection";
import CertificationsSection from "@/components/CertificationsSection";
import ContactSection from "@/components/ContactSection";
import NumericalSphere from "@/components/NumericalSphere";

const blobs = [
  { color: "hsl(270 80% 60% / 0.12)", size: 600, x: "5%", y: "10%", duration: 20 },
  { color: "hsl(220 90% 55% / 0.10)", size: 500, x: "65%", y: "25%", duration: 25 },
  { color: "hsl(180 70% 45% / 0.08)", size: 550, x: "25%", y: "55%", duration: 22 },
  { color: "hsl(330 80% 60% / 0.07)", size: 450, x: "70%", y: "75%", duration: 28 },
  { color: "hsl(250 70% 50% / 0.06)", size: 400, x: "40%", y: "40%", duration: 30 },
];

const CursorFollower = () => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springX = useSpring(cursorX, { damping: 25, stiffness: 200 });
  const springY = useSpring(cursorY, { damping: 25, stiffness: 200 });
  const outerX = useSpring(cursorX, { damping: 35, stiffness: 100 });
  const outerY = useSpring(cursorY, { damping: 35, stiffness: 100 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [cursorX, cursorY]);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 rounded-full pointer-events-none z-[9999]"
        style={{
          x: springX,
          y: springY,
          translateX: "-50%",
          translateY: "-50%",
          background: "hsl(var(--primary))",
          boxShadow: "0 0 10px hsl(var(--primary) / 0.6)",
        }}
      />
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-[9998]"
        style={{
          x: outerX,
          y: outerY,
          translateX: "-50%",
          translateY: "-50%",
          border: "1.5px solid hsl(var(--primary) / 0.4)",
          boxShadow: "0 0 20px hsl(var(--primary) / 0.15)",
        }}
      />
    </>
  );
};

const ParticleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener("resize", resize);

    const orbs = Array.from({ length: 6 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 120 + 60,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      hue: 250 + Math.random() * 40,
      phase: Math.random() * Math.PI * 2,
    }));

    const starCount = Math.min(60, Math.floor((canvas.width * canvas.height) / 25000));
    const stars = Array.from({ length: starCount }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 1.2 + 0.3,
      twinkleSpeed: Math.random() * 0.03 + 0.01,
      phase: Math.random() * Math.PI * 2,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (const orb of orbs) {
        orb.x += orb.vx;
        orb.y += orb.vy;
        orb.phase += 0.005;

        if (orb.x < -orb.radius) orb.x = canvas.width + orb.radius;
        if (orb.x > canvas.width + orb.radius) orb.x = -orb.radius;
        if (orb.y < -orb.radius) orb.y = canvas.height + orb.radius;
        if (orb.y > canvas.height + orb.radius) orb.y = -orb.radius;

        const pulse = 0.8 + 0.2 * Math.sin(orb.phase);
        const radius = orb.radius * pulse;
        const gradient = ctx.createRadialGradient(orb.x, orb.y, 0, orb.x, orb.y, radius);
        gradient.addColorStop(0, `hsla(${orb.hue}, 60%, 65%, 0.06)`);
        gradient.addColorStop(1, `hsla(${orb.hue}, 60%, 65%, 0)`);

        ctx.beginPath();
        ctx.arc(orb.x, orb.y, radius, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
      }

      for (const star of stars) {
        star.phase += star.twinkleSpeed;
        const opacity = 0.15 + 0.25 * Math.sin(star.phase);

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(220, 50%, 80%, ${opacity})`;
        ctx.fill();
      }

      animId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.5 }}
    />
  );
};

const GradientBlobs = () => (
  <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-[hsl(270,80%,12%)] via-[hsl(240,30%,8%)] to-[hsl(200,50%,8%)]" />
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(270,80%,20%,0.35),transparent_60%)]" />
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,hsl(180,70%,15%,0.25),transparent_60%)]" />

    {blobs.map((blob, index) => (
      <motion.div
        key={index}
        className="absolute rounded-full"
        style={{
          width: blob.size,
          height: blob.size,
          left: blob.x,
          top: blob.y,
          background: `radial-gradient(circle, ${blob.color}, transparent 70%)`,
          filter: "blur(80px)",
        }}
        animate={{
          x: [0, 60, -40, 30, 0],
          y: [0, -50, 30, -60, 0],
          scale: [1, 1.15, 0.9, 1.1, 1],
        }}
        transition={{
          duration: blob.duration,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    ))}
  </div>
);

const Index = () => (
  <div className="min-h-screen bg-transparent">
    <CursorFollower />
    <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
      <GradientBlobs />
      <ParticleBackground />
    </div>
    <div className="relative z-10 bg-transparent">
      <Navbar />
      <HeroSection />
      <NumericalSphere />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <EducationSection />
      <CertificationsSection />
      <ContactSection />
    </div>
  </div>
);

export default Index;
